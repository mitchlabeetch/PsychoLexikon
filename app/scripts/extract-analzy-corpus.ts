import { mkdir, readdir, readFile, writeFile, copyFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { authoringDraftCollectionSchema, type AuthoringDraft } from '../src/content/authoringSchema'
import { articleCategoryMap, getTaxonomyPath } from '../src/content/taxonomy'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const appDir = path.resolve(__dirname, '..')
const repoRoot = path.resolve(appDir, '..')
const analzyDir = path.resolve(repoRoot, 'analzy')
const outputJsonPath = path.resolve(appDir, 'src', 'content', 'recovered', 'analzy-corpus.json')
const outputDraftJsonPath = path.resolve(appDir, 'src', 'content', 'recovered', 'analzy-import-drafts.json')
const outputAuthoringDraftJsonPath = path.resolve(appDir, 'src', 'content', 'recovered', 'analzy-authoring-drafts.json')
const outputPageSnapshotDir = path.resolve(appDir, 'src', 'content', 'recovered', 'analzy-pages')
const outputAssetDir = path.resolve(appDir, 'public', 'recovered', 'analzy')
const shouldWrite = process.argv.includes('--write')

const pageRouteByComponent: Record<string, string> = {
  Aktionspotential: '/aktionspotential',
  Arbeitsgedaechtnis: '/arbeitsgedaechtnis',
  Attribution: '/attribution',
  BigFive: '/big-five',
  BisModell: '/bis-modell',
  Gestaltgesetze: '/gestaltgesetze',
  Konditionierung: '/konditionierung',
  MotivationEmotion: '/motivation-emotion',
  Piaget: '/piaget',
  Psychometrie: '/psychometrie',
  Signifikanztestung: '/signifikanztestung',
  Versuchsplanung: '/versuchsplanung',
}

const pageArticleIdByComponent: Record<string, string> = {
  Aktionspotential: '01',
  Gestaltgesetze: '02',
  Arbeitsgedaechtnis: '03',
  Konditionierung: '04',
  BisModell: '05',
  Piaget: '06',
  Attribution: '07',
  BigFive: '08',
  Versuchsplanung: '09',
  Signifikanztestung: '10',
  Psychometrie: '11',
  MotivationEmotion: '12',
}

const conceptRouteDefinitions: Record<
  string,
  {
    articleId: string
    categoryId: string
    keywords: string[]
    title: string
    subtitle?: string
  }
> = {
  '/hexaco': {
    articleId: '13',
    categoryId: 'differential-and-personality',
    keywords: ['hexaco', 'persoenlichkeit', 'traits'],
    title: 'HEXACO-Modell',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zur Persoenlichkeitsstruktur',
  },
  '/mischel': {
    articleId: '14',
    categoryId: 'differential-and-personality',
    keywords: ['mischel', 'person-situation', 'persoenlichkeit'],
    title: 'Mischel: Person-Situation',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zur Person-Situations-Debatte',
  },
  '/persoenlichkeitstests': {
    articleId: '15',
    categoryId: 'differential-and-personality',
    keywords: ['persoenlichkeitstests', 'diagnostik', 'traits'],
    title: 'Persoenlichkeitstests',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zur Persoenlichkeitsdiagnostik',
  },
  '/persoenlichkeitsstoerungen': {
    articleId: '16',
    categoryId: 'differential-and-personality',
    keywords: ['persoenlichkeitsstoerungen', 'klinisch', 'persoenlichkeit'],
    title: 'Persoenlichkeitsstoerungen',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff an der Schnittstelle von Persoenlichkeit und Klinik',
  },
  '/intelligenztheorien': {
    articleId: '17',
    categoryId: 'differential-and-personality',
    keywords: ['intelligenz', 'theorien', 'diagnostik'],
    title: 'Intelligenztheorien im Ueberblick',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zu konkurrierenden Intelligenzmodellen',
  },
  '/faktorenanalyse': {
    articleId: '18',
    categoryId: 'statistics-and-psychometrics',
    keywords: ['faktorenanalyse', 'psychometrie', 'statistik'],
    title: 'Faktorenanalyse',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zur dimensionsreduzierenden Testanalyse',
  },
  '/iq-tests': {
    articleId: '19',
    categoryId: 'statistics-and-psychometrics',
    keywords: ['iq-tests', 'diagnostik', 'intelligenz'],
    title: 'IQ-Tests und Diagnostik',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zur Intelligenzdiagnostik',
  },
  '/vygotsky': {
    articleId: '20',
    categoryId: 'learning-and-development',
    keywords: ['vygotsky', 'soziale entwicklung', 'lernen'],
    title: 'Vygotsky: Soziale Entwicklung',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zur sozial vermittelten Entwicklung',
  },
  '/sprachentwicklung': {
    articleId: '21',
    categoryId: 'learning-and-development',
    keywords: ['sprachentwicklung', 'entwicklung', 'kindheit'],
    title: 'Sprachentwicklung im Kindesalter',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zur sprachlichen Entwicklung',
  },
  '/core-knowledge': {
    articleId: '22',
    categoryId: 'learning-and-development',
    keywords: ['core knowledge', 'entwicklung', 'kindheit'],
    title: 'Core Knowledge Theory',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zu fruehen Wissensstrukturen',
  },
  '/selbstwirksamkeit': {
    articleId: '23',
    categoryId: 'motivation-and-emotion',
    keywords: ['selbstwirksamkeit', 'bandura', 'motivation'],
    title: 'Selbstwirksamkeit nach Bandura',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zu Kompetenzueberzeugungen',
  },
  '/leistungsmotivation': {
    articleId: '24',
    categoryId: 'motivation-and-emotion',
    keywords: ['leistungsmotivation', 'motivation', 'zielorientierung'],
    title: 'Leistungsmotivation',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zu Erfolg, Anstrengung und Zielverfolgung',
  },
  '/lernen-hilflosigkeit': {
    articleId: '25',
    categoryId: 'motivation-and-emotion',
    keywords: ['gelernte hilflosigkeit', 'motivation', 'attribution'],
    title: 'Gelernte Hilflosigkeit',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zu Kontrollverlust und Attribution',
  },
  '/sozialkognition': {
    articleId: '26',
    categoryId: 'social-psychology',
    keywords: ['soziale kognition', 'soziales denken', 'attribution'],
    title: 'Soziale Kognition',
    subtitle: 'Wiederhergestellter Vertiefungsbegriff zu mentalen Prozessen im sozialen Kontext',
  },
}

const routeArticleIdMap = new Map<string, string>([
  ...Object.entries(pageRouteByComponent).map(([component, route]) => [route, pageArticleIdByComponent[component] ?? '']),
  ...Object.entries(conceptRouteDefinitions).map(([route, definition]) => [route, definition.articleId]),
].filter((entry) => entry[1]))

interface PrimaryPageRecord {
  component: string
  route: string | null
  title: string
  subtitle?: string
  imageAssets: string[]
  citationCount: number
  definitionCount: number
  relatedRoutes: string[]
}

interface RelatedRouteRecord {
  route: string
  label: string | null
}

interface ResearchFileRecord {
  fileName: string
  rowCount: number
  headers: string[]
}

interface AnalzyCorpusManifest {
  corpusId: string
  sourceRoot: string
  extractedFrom: {
    deployDir: string
    bundlePath: string
    researchDir: string
  }
  primaryPages: PrimaryPageRecord[]
  relatedRoutes: RelatedRouteRecord[]
  imageAssets: string[]
  researchFiles: ResearchFileRecord[]
}

interface RecoveredDefinitionRecord {
  term: string
  definition: string
  label: string
}

interface RecoveredCitationRecord {
  citation: string
  excerpt?: string
}

interface RecoveredImageRecord {
  assetName: string
  publicSrc: string
}

interface AnalzyImportDraft {
  articleId: string
  canonicalSlug: string
  component: string
  recoveredRoute: string | null
  title: string
  subtitle?: string
  categoryId: string
  taxonomyPath: string[]
  keywords: string[]
  leadCandidate?: string
  sectionHeadings: string[]
  textBlocks: string[]
  definitions: RecoveredDefinitionRecord[]
  citations: RecoveredCitationRecord[]
  images: RecoveredImageRecord[]
  relatedRoutes: RelatedRouteRecord[]
  sourceSnapshotPath: string
}

interface AnalzyImportDraftManifest {
  corpusId: string
  drafts: AnalzyImportDraft[]
}

interface ConceptBacklinkRecord {
  route: string
  label: string
  sourceArticleId: string
  sourceTitle: string
  sourceCategoryId: string
}

function slugToTitle(value: string) {
  return value
    .replace(/^illu-/, '')
    .replace(/\.[a-z0-9]+$/i, '')
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ')
}

function unescapeBundleString(value: string | undefined) {
  if (!value) {
    return undefined
  }

  const unescaped = value
    .replace(/\\"/g, '"')
    .replace(/\\n/g, '\n')
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex: string) => String.fromCharCode(Number.parseInt(hex, 16)))

  const repaired = Buffer.from(unescaped, 'latin1').toString('utf8')
  const mojibakeScore = (input: string) => (input.match(/[Ãâð�³÷▄õÕ]/g) ?? []).length
  return mojibakeScore(repaired) < mojibakeScore(unescaped) ? repaired : unescaped
}

async function findSubdirectory(matcher: (name: string) => boolean) {
  const entries = await readdir(analzyDir, { withFileTypes: true })
  const match = entries.find((entry) => entry.isDirectory() && matcher(entry.name))
  if (!match) {
    throw new Error('Expected recovered analzy subdirectory was not found.')
  }

  return path.join(analzyDir, match.name)
}

function extractPageChunks(bundle: string) {
  const markerRegex = /src\/pages\/([^:"]+)\.tsx:/g
  const markers: Array<{ component: string; index: number }> = []
  let match: RegExpExecArray | null

  while ((match = markerRegex.exec(bundle)) !== null) {
    const component = match[1]
    if (markers.some((marker) => marker.component === component)) {
      continue
    }

    markers.push({ component, index: match.index })
  }

  return markers.map((marker, index) => ({
    component: marker.component,
    chunk: bundle.slice(marker.index, markers[index + 1]?.index ?? bundle.length),
  }))
}

function extractTextBlocks(chunk: string) {
  const ignoredValues = new Set([
    'Definition',
    'Vertiefung',
    'Alltagsbeispiel',
    'Zusammenfassung',
    'Literatur',
    'Zum Weiterforschen',
  ])

  const textBlocks = [...chunk.matchAll(/children:"([^"]{30,})"/g)]
    .map((match) => unescapeBundleString(match[1])?.replace(/\s+/g, ' ').trim())
    .filter((value): value is string => Boolean(value))
    .filter((value) => !value.startsWith('src/pages/'))
    .filter((value) => !ignoredValues.has(value))

  return [...new Set(textBlocks)]
}

function extractSectionHeadings(chunk: string) {
  const headings = [...chunk.matchAll(/"h[234]",\{[^}]{0,240}?children:"([^"]{3,})"/g)]
    .map((match) => unescapeBundleString(match[1])?.trim())
    .filter((value): value is string => Boolean(value))

  return [...new Set(headings)]
}

function extractDefinitions(chunk: string) {
  const definitions = [...chunk.matchAll(/term:"([^"]+)",definition:"([^"]+)",children:"([^"]+)"/g)].map((match) => ({
    term: unescapeBundleString(match[1]) ?? match[1],
    definition: unescapeBundleString(match[2]) ?? match[2],
    label: unescapeBundleString(match[3]) ?? match[3],
  }))

  return definitions.filter(
    (definition, index, allDefinitions) =>
      allDefinitions.findIndex((candidate) => candidate.term === definition.term && candidate.definition === definition.definition) === index,
  )
}

function extractCitations(chunk: string) {
  const citations = [...chunk.matchAll(/citation:"([^"]+)"/g)].map((match) => {
    const citation = unescapeBundleString(match[1]) ?? match[1]
    const excerptSlice = chunk.slice(match.index, match.index + 420)
    const excerptMatch = excerptSlice.match(/children:"([^"]{20,})"/)

    return {
      citation,
      excerpt: unescapeBundleString(excerptMatch?.[1])?.replace(/\s+/g, ' ').trim(),
    } satisfies RecoveredCitationRecord
  })

  return citations.filter(
    (citation, index, allCitations) => allCitations.findIndex((candidate) => candidate.citation === citation.citation) === index,
  )
}

function extractPrimaryPages(bundle: string) {
  return extractPageChunks(bundle)
    .filter((page) => page.component !== 'Home')
    .map((page) => {
      const titleMatch = page.chunk.match(/text-h1[^"]*",children:"([^"]+)"/)
      const subtitleMatch = page.chunk.match(/text-subtitle[^"]*",children:"([^"]+)"/)
      const imageAssets = [...new Set([...page.chunk.matchAll(/\/((?:hero-bg|illu-[a-z0-9-]+)\.png)/g)].map((result) => result[1]))]
      const relatedRoutes = [...new Set([...page.chunk.matchAll(/to:"(\/[a-z0-9-]+)"/g)].map((result) => result[1]))]

      return {
        component: page.component,
        route: pageRouteByComponent[page.component] ?? null,
        title: unescapeBundleString(titleMatch?.[1]) ?? page.component,
        subtitle: unescapeBundleString(subtitleMatch?.[1]),
        imageAssets,
        citationCount: [...page.chunk.matchAll(/citation:"/g)].length,
        definitionCount: [...page.chunk.matchAll(/term:"/g)].length,
        relatedRoutes,
      } satisfies PrimaryPageRecord
    })
}

function extractRelatedRoutes(bundle: string) {
  const matches = [...bundle.matchAll(/to:"(\/[a-z0-9-]+)".{0,220}?children:"([^"]+)"/g)]
  const routeMap = new Map<string, string | null>()

  for (const match of matches) {
    routeMap.set(match[1], unescapeBundleString(match[2]) ?? null)
  }

  return [...routeMap.entries()]
    .map(([route, label]) => ({ route, label }) satisfies RelatedRouteRecord)
    .sort((left, right) => left.route.localeCompare(right.route))
}

function isLikelySourceLine(value: string) {
  return /(journal|review|psychology|neuroscience|wikipedia|simplypsychology|annual review|physiology|press|publisher|doi)/i.test(value)
}

function estimateReadMinutesFromTextBlocks(textBlocks: string[]) {
  const wordCount = textBlocks
    .join(' ')
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean).length

  return Math.max(3, Math.ceil(wordCount / 180))
}

function getInternalTargetForRoute(route: string) {
  const articleId = routeArticleIdMap.get(route)
  if (articleId) {
    return {
      kind: 'internal-article' as const,
      articleId,
    }
  }

  return {
    kind: 'internal-route' as const,
    path: route,
  }
}

function buildAuthoringSections(draft: AnalzyImportDraft): AuthoringDraft['sections'] {
  const filteredNarrativeBlocks = draft.textBlocks.filter(
    (block) =>
      block !== draft.title &&
      block !== draft.subtitle &&
      !draft.sectionHeadings.includes(block) &&
      !isLikelySourceLine(block),
  )
  const leadParagraphs = filteredNarrativeBlocks.slice(0, 2)
  const explanationParagraphs = filteredNarrativeBlocks.slice(2)
  const sectionHeadingBlacklist = new Set(['Zusammenfassung', 'Literatur', 'Zum Weiterforschen'])

  const sections: AuthoringDraft['sections'] = []

  if (leadParagraphs.length > 0) {
    sections.push({
      id: `${draft.articleId}-lead`,
      type: 'lead',
      entries: leadParagraphs.map((text) => ({
        kind: 'paragraph',
        content: {
          text,
          annotations: [],
        },
      })),
    })
  }

  const explanationSectionEntries = [
    ...draft.sectionHeadings
      .filter((heading) => !sectionHeadingBlacklist.has(heading))
      .map((heading) => ({
        kind: 'subheading' as const,
        text: heading,
      })),
    ...explanationParagraphs.map((text) => ({
      kind: 'paragraph' as const,
      content: {
        text,
        annotations: [],
      },
    })),
  ]

  if (explanationSectionEntries.length > 0) {
    sections.push({
      id: `${draft.articleId}-explanation`,
      type: 'explanation',
      title: 'Arbeitsfassung',
      entries: explanationSectionEntries,
    })
  }

  if (draft.images.length > 0) {
    sections.push({
      id: `${draft.articleId}-visuals`,
      type: 'visual',
      title: 'Illustrationen',
      assetIds: draft.images.map((_, index) => `${draft.articleId}-asset-${index + 1}`),
      layout: draft.images.length > 1 ? 'stack' : 'single',
    })
  }

  if (draft.relatedRoutes.length > 0) {
    sections.push({
      id: `${draft.articleId}-summary`,
      type: 'summary',
      title: 'Weiterfuehrende Verknuepfungen',
      entries: [
        {
          kind: 'bullet_list',
          items: draft.relatedRoutes.map((route) => ({
            text: route.label ?? route.route,
            annotations: [],
          })),
        },
      ],
    })
  }

  return sections
}

function buildAuthoringDrafts(importDrafts: AnalzyImportDraft[], bundlePath: string): AuthoringDraft[] {
  return importDrafts.map((draft) => ({
    schemaVersion: '1.0.0',
    pageType: 'knowledge-article-draft',
    origin: {
      kind: 'recovered-bundle',
      sourcePath: bundlePath,
      recoveredRoute: draft.recoveredRoute ?? undefined,
      snapshotPath: draft.sourceSnapshotPath,
    },
    identity: {
      articleId: draft.articleId,
      slug: draft.canonicalSlug,
    },
    header: {
      title: draft.title,
      subtitle: draft.subtitle,
      discipline: draft.taxonomyPath[0],
      difficulty: 'Erstsemester-Komplexitaetsgrad',
      categoryId: draft.categoryId,
      keywords: draft.keywords,
      audience: ['erstsemester', 'selbststudium', 'gui-authoring'],
      leadTeaser:
        draft.textBlocks.find((block) => block !== draft.title && block !== draft.subtitle && !draft.sectionHeadings.includes(block) && !isLikelySourceLine(block)) ??
        draft.subtitle ??
        draft.title,
      estimatedReadMinutes: estimateReadMinutesFromTextBlocks(draft.textBlocks),
    },
    glossary: draft.definitions.map((definition, index) => ({
      id: `${draft.articleId}-glossary-${index + 1}`,
      term: definition.term,
      label: definition.label,
      aliases: definition.label && definition.label !== definition.term ? [definition.label] : [],
      definition: definition.definition,
      sourceIds: [],
    })),
    sources: draft.citations.map((citation, index) => ({
      id: `${draft.articleId}-recovered-source-${index + 1}`,
      rawCitation: citation.citation,
      excerpt: citation.excerpt,
      doi: citation.citation.match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i)?.[0],
      url: citation.citation.match(/https?:\/\/\S+/)?.[0],
    })),
    assets: draft.images.map((image, index) => ({
      id: `${draft.articleId}-asset-${index + 1}`,
      title: slugToTitle(image.assetName),
      placement: index === 0 ? 'hero' : 'inline',
      asset: {
        kind: 'image-file',
        src: image.publicSrc,
        alt: `${draft.title}: ${slugToTitle(image.assetName)}`,
        description: `Recovered illustration ${image.assetName} from analzy deployment bundle.`,
      },
      caption: slugToTitle(image.assetName),
      tags: draft.keywords,
    })),
    connections: draft.relatedRoutes.map((route, index) => ({
      id: `${draft.articleId}-connection-${index + 1}`,
      category: 'verknuepfung',
      title: route.label ?? route.route,
      description: `Recovered internal concept link from ${draft.recoveredRoute ?? draft.canonicalSlug}.`,
      target: getInternalTargetForRoute(route.route),
    })),
    sections: buildAuthoringSections(draft),
    notes: {
      importedFrom: 'analzy-deployment-v2',
      sourceSnapshotPath: draft.sourceSnapshotPath,
      uiHint: 'GUI authoring draft generated from recovered deploy bundle; review text ordering before publishing.',
    },
  }))
}

function buildConceptAuthoringDrafts(importDrafts: AnalzyImportDraft[], relatedRoutes: RelatedRouteRecord[], bundlePath: string): AuthoringDraft[] {
  const backlinksByRoute = new Map<string, ConceptBacklinkRecord[]>()

  for (const draft of importDrafts) {
    for (const route of draft.relatedRoutes) {
      const bucket = backlinksByRoute.get(route.route) ?? []
      bucket.push({
        route: route.route,
        label: route.label ?? route.route,
        sourceArticleId: draft.articleId,
        sourceTitle: draft.title,
        sourceCategoryId: draft.categoryId,
      })
      backlinksByRoute.set(route.route, bucket)
    }
  }

  return relatedRoutes.flatMap((routeRecord) => {
    const definition = conceptRouteDefinitions[routeRecord.route]
    if (!definition) {
      return []
    }

    const backlinks = backlinksByRoute.get(routeRecord.route) ?? []
    const taxonomyPath = getTaxonomyPath(definition.categoryId).map((node) => node.label)
    const displayTitle = definition.title || routeRecord.label || routeRecord.route
    const leadTeaser = `${displayTitle} wurde im wiederhergestellten analzy-Korpus als weiterfuehrender Konzeptknoten referenziert.`
    const backlinkItems = backlinks.map((backlink) => ({
      text: `${backlink.sourceTitle} (${backlink.route})`,
      annotations: [],
    }))

    return [
      {
        schemaVersion: '1.0.0',
        pageType: 'knowledge-article-draft',
        origin: {
          kind: 'recovered-bundle',
          sourcePath: bundlePath,
          recoveredRoute: routeRecord.route,
        },
        identity: {
          articleId: definition.articleId,
          slug: `thema-${definition.articleId}`,
        },
        header: {
          title: displayTitle,
          subtitle: definition.subtitle,
          discipline: taxonomyPath[0],
          difficulty: 'Vertiefungs-Knoten',
          categoryId: definition.categoryId,
          keywords: definition.keywords,
          audience: ['selbststudium', 'vertiefung', 'gui-authoring'],
          leadTeaser,
          estimatedReadMinutes: 2,
        },
        glossary: [],
        sources: [
          {
            id: `${definition.articleId}-recovered-source-1`,
            rawCitation: `Recovered route reference in analzy deployment bundle: ${displayTitle} (${routeRecord.route}) was linked from ${backlinks.map((backlink) => backlink.sourceTitle).join(', ')}.`,
            notes: 'The recovered deployment preserved this concept as a navigable internal link but not as a standalone page body.',
          },
        ],
        assets: [],
        connections: [
          ...backlinks.map((backlink, index) => ({
            id: `${definition.articleId}-backlink-${index + 1}`,
            category: 'rueckverweis',
            title: backlink.sourceTitle,
            description: `Recovered primary article that referenced ${displayTitle}.`,
            target: {
              kind: 'internal-article' as const,
              articleId: backlink.sourceArticleId,
            },
          })),
          {
            id: `${definition.articleId}-category-1`,
            category: 'kategorie',
            title: taxonomyPath[0] ?? definition.categoryId,
            description: 'Canonical category placement for this derived concept node.',
            target: {
              kind: 'internal-category' as const,
              categoryId: definition.categoryId,
            },
          },
        ],
        sections: [
          {
            id: `${definition.articleId}-lead`,
            type: 'lead',
            entries: [
              {
                kind: 'paragraph',
                content: {
                  text: leadTeaser,
                  annotations: [],
                },
              },
              {
                kind: 'paragraph',
                content: {
                  text: 'Eine eigenstaendige Quellseite fuer diesen Begriff wurde im wiederhergestellten Deploy-Bundle nicht erhalten. Die Seite bleibt dennoch als erster kanonischer Konzeptknoten bestehen, damit kuenftige GUI-Autorenschaft, neue Quellen und weitere Inhalte anschlussfaehig ergaenzt werden koennen.',
                  annotations: [],
                },
              },
            ],
          },
          {
            id: `${definition.articleId}-explanation`,
            type: 'explanation',
            title: 'Wiederhergestellter Kontext',
            entries: [
              {
                kind: 'paragraph',
                content: {
                  text: `Der recovered route slug lautet ${routeRecord.route} und wurde der Kategorie ${taxonomyPath[0] ?? definition.categoryId} zugeordnet.`,
                  annotations: [],
                },
              },
              {
                kind: 'paragraph',
                content: {
                  text: backlinks.length > 0
                    ? `Der Begriff war im recovered corpus mit ${backlinks.length} Rueckverweisen aus bereits migrierten Primärartikeln verbunden.`
                    : 'Im recovered corpus wurde dieser Begriff als isolierter weiterfuehrender Link erkannt.',
                  annotations: [],
                },
              },
            ],
          },
          {
            id: `${definition.articleId}-summary`,
            type: 'summary',
            title: 'Rueckverweise aus dem recovered corpus',
            entries: [
              {
                kind: 'bullet_list',
                items:
                  backlinkItems.length > 0
                    ? backlinkItems
                    : [
                        {
                          text: 'Kein Rueckverweis aus einem erhaltenen Primärartikel gefunden.',
                          annotations: [],
                        },
                      ],
              },
            ],
          },
        ],
        notes: {
          importedFrom: 'analzy-deployment-v2',
          uiHint: 'Derived concept node generated from preserved internal route labels and backlinks; enrich with full prose when new source material becomes available.',
        },
      } satisfies AuthoringDraft,
    ]
  })
}

async function extractResearchFiles(researchDir: string) {
  const fileNames = (await readdir(researchDir)).filter((fileName) => fileName.endsWith('.csv')).sort()

  return Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(researchDir, fileName)
      const raw = await readFile(fullPath, 'utf8')
      const lines = raw.split(/\r?\n/).filter((line) => line.trim().length > 0)
      const headers = (lines[0] ?? '')
        .split(',')
        .map((header) => header.trim())
        .filter(Boolean)

      return {
        fileName,
        rowCount: Math.max(lines.length - 1, 0),
        headers,
      } satisfies ResearchFileRecord
    }),
  )
}

async function copyRecoveredAssets(deployDir: string, imageAssets: string[]) {
  await mkdir(outputAssetDir, { recursive: true })

  for (const assetName of imageAssets) {
    await copyFile(path.join(deployDir, assetName), path.join(outputAssetDir, assetName))
  }
}

async function writePageSnapshots(primaryPagesWithChunks: ReturnType<typeof extractPageChunks>) {
  await mkdir(outputPageSnapshotDir, { recursive: true })

  await Promise.all(
    primaryPagesWithChunks
      .filter((page) => page.component !== 'Home')
      .map(async (page) => {
        const articleId = pageArticleIdByComponent[page.component] ?? page.component.toLowerCase()
        const routeSlug = (pageRouteByComponent[page.component] ?? page.component).replace(/^\//, '')
        const snapshotPath = path.join(outputPageSnapshotDir, `${articleId}-${routeSlug}.bundle.txt`)
        const decodedChunk = unescapeBundleString(page.chunk) ?? page.chunk
        await writeFile(snapshotPath, `${decodedChunk}\n`, 'utf8')
      }),
  )
}

function buildImportDrafts(primaryPages: PrimaryPageRecord[], pageChunks: ReturnType<typeof extractPageChunks>, relatedRoutes: RelatedRouteRecord[]) {
  const relatedRouteMap = new Map(relatedRoutes.map((route) => [route.route, route]))

  return primaryPages.map((page) => {
    const articleId = pageArticleIdByComponent[page.component]
    if (!articleId) {
      throw new Error(`No canonical article mapping is defined for recovered component ${page.component}`)
    }

    const categoryConfig = articleCategoryMap[articleId]
    if (!categoryConfig) {
      throw new Error(`No taxonomy mapping is defined for canonical article ${articleId}`)
    }

    const chunk = pageChunks.find((candidate) => candidate.component === page.component)?.chunk ?? ''
    const textBlocks = extractTextBlocks(chunk)
    const routeSlug = (page.route ?? page.component).replace(/^\//, '')
    const snapshotPath = `src/content/recovered/analzy-pages/${articleId}-${routeSlug}.bundle.txt`

    return {
      articleId,
      canonicalSlug: `thema-${articleId}`,
      component: page.component,
      recoveredRoute: page.route,
      title: page.title,
      subtitle: page.subtitle,
      categoryId: categoryConfig.categoryId,
      taxonomyPath: getTaxonomyPath(categoryConfig.categoryId).map((node) => node.label),
      keywords: categoryConfig.keywords,
      leadCandidate: textBlocks[0],
      sectionHeadings: extractSectionHeadings(chunk),
      textBlocks,
      definitions: extractDefinitions(chunk),
      citations: extractCitations(chunk),
      images: page.imageAssets.map((assetName) => ({
        assetName,
        publicSrc: `/recovered/analzy/${assetName}`,
      })),
      relatedRoutes: page.relatedRoutes.map((route) => relatedRouteMap.get(route) ?? { route, label: null }),
      sourceSnapshotPath: snapshotPath,
    } satisfies AnalzyImportDraft
  })
}

async function main() {
  const deployDir = await findSubdirectory((name) => /deployment_v2/i.test(name))
  const researchRoot = await findSubdirectory((name) => /app/i.test(name))
  const researchDir = path.join(researchRoot, 'research')
  const assetsDir = path.join(deployDir, 'assets')
  const bundleFileName = (await readdir(assetsDir)).find((fileName) => /^index-.*\.js$/i.test(fileName))

  if (!bundleFileName) {
    throw new Error('Recovered deploy bundle was not found in analzy assets.')
  }

  const bundlePath = path.join(assetsDir, bundleFileName)
  const bundle = await readFile(bundlePath, 'utf8')
  const pageChunks = extractPageChunks(bundle)
  const primaryPages = extractPrimaryPages(bundle)
  const relatedRoutes = extractRelatedRoutes(bundle)
  const importDrafts = buildImportDrafts(primaryPages, pageChunks, relatedRoutes)
  const conceptAuthoringDrafts = buildConceptAuthoringDrafts(importDrafts, relatedRoutes, bundlePath)
  const authoringDrafts = authoringDraftCollectionSchema.parse({
    schemaVersion: '1.0.0',
    corpusId: 'analzy-deployment-v2',
    drafts: [...buildAuthoringDrafts(importDrafts, bundlePath), ...conceptAuthoringDrafts],
  })
  const imageAssets = (await readdir(deployDir))
    .filter((fileName) => /^(?:hero-bg|illu-[a-z0-9-]+)\.png$/i.test(fileName))
    .sort()
  const researchFiles = await extractResearchFiles(researchDir)

  const manifest: AnalzyCorpusManifest = {
    corpusId: 'analzy-deployment-v2',
    sourceRoot: analzyDir,
    extractedFrom: {
      deployDir,
      bundlePath,
      researchDir,
    },
    primaryPages,
    relatedRoutes,
    imageAssets,
    researchFiles,
  }

  const manifestJson = `${JSON.stringify(manifest, null, 2)}\n`
  const draftManifestJson = `${JSON.stringify(
    {
      corpusId: manifest.corpusId,
      drafts: importDrafts,
    } satisfies AnalzyImportDraftManifest,
    null,
    2,
  )}\n`
  const authoringDraftManifestJson = `${JSON.stringify(authoringDrafts, null, 2)}\n`

  if (!shouldWrite) {
    console.log(
      JSON.stringify(
        {
          manifest,
          drafts: importDrafts,
          authoringDrafts,
        },
        null,
        2,
      ),
    )
    return
  }

  await mkdir(path.dirname(outputJsonPath), { recursive: true })
  await writeFile(outputJsonPath, manifestJson, 'utf8')
  await writeFile(outputDraftJsonPath, draftManifestJson, 'utf8')
  await writeFile(outputAuthoringDraftJsonPath, authoringDraftManifestJson, 'utf8')
  await writePageSnapshots(pageChunks)
  await copyRecoveredAssets(deployDir, imageAssets)

  console.log(`Wrote ${outputJsonPath}`)
  console.log(`Wrote ${outputDraftJsonPath}`)
  console.log(`Wrote ${outputAuthoringDraftJsonPath}`)
  console.log(`Copied ${imageAssets.length} recovered image assets to ${outputAssetDir}`)
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error)
  console.error(message)
  process.exitCode = 1
})
