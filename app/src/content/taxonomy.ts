export interface Category {
  id: string
  slug: string
  label: string
  description: string
  color: string
  order: number
  articleIds: string[]
  metadata: {
    curriculumArea: string
    keywords: string[]
    crmSegment: string
  }
}

export interface TaxonomyNode {
  id: string
  slug: string
  label: string
  parentId: string | null
  description: string
  metadata: {
    curriculumArea: string
    keywords: string[]
    crmSegment: string
  }
  color: string
  order: number
}

export const categories: Category[] = [
  {
    id: 'biological-psychology',
    slug: 'biologische-psychologie',
    label: 'Biologische Psychologie',
    description: 'Neuronale und neurobiologische Grundlagen psychischer Prozesse.',
    color: '#98d4bb',
    order: 1,
    articleIds: ['01'],
    metadata: {
      curriculumArea: 'Biologische Grundlagen',
      keywords: ['neuropsychologie', 'synapse', 'aktionspotential'],
      crmSegment: 'bio-psych',
    },
  },
  {
    id: 'perception-and-cognition',
    slug: 'wahrnehmung-und-kognition',
    label: 'Wahrnehmung & Kognition',
    description: 'Organisation und Interpretation sensorischer Reize sowie grundlegende Modelle der Kognition.',
    color: '#c7b8ea',
    order: 2,
    articleIds: ['02', '03'],
    metadata: {
      curriculumArea: 'Kognition',
      keywords: ['gestalt', 'praegnanz', 'arbeitsgedaechtnis'],
      crmSegment: 'perception-cognition',
    },
  },
  {
    id: 'learning-and-development',
    slug: 'lernen-und-entwicklung',
    label: 'Lernen & Entwicklung',
    description: 'Klassische Lernprinzipien und Modelle der kognitiven Entwicklung.',
    color: '#f4b8c5',
    order: 3,
    articleIds: ['04', '06', '20', '21', '22'],
    metadata: {
      curriculumArea: 'Lernen und Entwicklung',
      keywords: ['konditionierung', 'entwicklung', 'piaget'],
      crmSegment: 'learning-development',
    },
  },
  {
    id: 'differential-and-personality',
    slug: 'differentielle-und-persoenlichkeitspsychologie',
    label: 'Differentielle & Persönlichkeitspsychologie',
    description: 'Individuelle Unterschiede, Intelligenzmodelle und Persönlichkeitsstrukturen.',
    color: '#a8d8ea',
    order: 4,
    articleIds: ['05', '08', '13', '14', '15', '16', '17'],
    metadata: {
      curriculumArea: 'Diagnostik und Persönlichkeit',
      keywords: ['intelligenz', 'traits', 'big five'],
      crmSegment: 'differential-personality',
    },
  },
  {
    id: 'social-psychology',
    slug: 'sozialpsychologie',
    label: 'Sozialpsychologie',
    description: 'Soziale Kognition, Attribution und motivationale Bewertungen im sozialen Kontext.',
    color: '#b7d7f5',
    order: 5,
    articleIds: ['07', '26'],
    metadata: {
      curriculumArea: 'Soziales Erleben',
      keywords: ['attribution', 'heider', 'weiner'],
      crmSegment: 'social',
    },
  },
  {
    id: 'research-methods',
    slug: 'forschungsmethoden',
    label: 'Forschungsmethoden',
    description: 'Versuchsplanung, Validität und methodische Schlusslogik.',
    color: '#ffe6a7',
    order: 6,
    articleIds: ['09'],
    metadata: {
      curriculumArea: 'Methoden',
      keywords: ['validitaet', 'experiment', 'design'],
      crmSegment: 'methods',
    },
  },
  {
    id: 'statistics-and-psychometrics',
    slug: 'statistik-und-psychometrie',
    label: 'Statistik & Psychometrie',
    description: 'Signifikanztestung, Fehlerarten und psychometrische Gütekriterien.',
    color: '#f2c6a0',
    order: 7,
    articleIds: ['10', '11', '18', '19'],
    metadata: {
      curriculumArea: 'Methoden und Diagnostik',
      keywords: ['p-wert', 'reliabilitaet', 'validitaet'],
      crmSegment: 'stats-psychometrics',
    },
  },
  {
    id: 'motivation-and-emotion',
    slug: 'motivation-und-emotion',
    label: 'Motivation & Emotion',
    description: 'Theorien zu motivationalen Prozessen und emotionalen Bewertungen.',
    color: '#d4a8a8',
    order: 8,
    articleIds: ['12', '23', '24', '25'],
    metadata: {
      curriculumArea: 'Motivation',
      keywords: ['emotion', 'motivation', 'appraisal'],
      crmSegment: 'motivation',
    },
  },
]

export const taxonomyNodes: TaxonomyNode[] = categories.map((category) => ({
  id: category.id,
  slug: category.slug,
  label: category.label,
  parentId: null,
  description: category.description,
  metadata: category.metadata,
  color: category.color,
  order: category.order,
}))

const legacyCategoryIdMap = new Map<string, string>([
  ['biological-psychology', 'biological-psychology'],
  ['perception', 'perception-and-cognition'],
  ['memory-and-cognition', 'perception-and-cognition'],
  ['learning-and-behavior', 'learning-and-development'],
  ['developmental-psychology', 'learning-and-development'],
  ['differential-psychology', 'differential-and-personality'],
  ['personality-psychology', 'differential-and-personality'],
  ['social-psychology', 'social-psychology'],
  ['research-methods', 'research-methods'],
  ['statistics', 'statistics-and-psychometrics'],
  ['psychometrics', 'statistics-and-psychometrics'],
  ['motivation-and-emotion', 'motivation-and-emotion'],
])

export const articleCategoryMap: Record<string, { categoryId: string; keywords: string[] }> = {
  '01': { categoryId: 'biological-psychology', keywords: ['aktionspotential', 'synapse', 'neurotransmitter'] },
  '02': { categoryId: 'perception-and-cognition', keywords: ['gestaltgesetze', 'praegnanz', 'figur-grund'] },
  '03': { categoryId: 'perception-and-cognition', keywords: ['arbeitsgedaechtnis', 'phonologische schleife', 'zentrale exekutive'] },
  '04': { categoryId: 'learning-and-development', keywords: ['konditionierung', 'verstaerkung', 'lernen'] },
  '05': { categoryId: 'differential-and-personality', keywords: ['bis', 'intelligenzstruktur', 'jaeger'] },
  '06': { categoryId: 'learning-and-development', keywords: ['piaget', 'kognitive entwicklung', 'stadien'] },
  '07': { categoryId: 'social-psychology', keywords: ['attribution', 'heider', 'weiner'] },
  '08': { categoryId: 'differential-and-personality', keywords: ['big five', 'traits', 'persoenlichkeit'] },
  '09': { categoryId: 'research-methods', keywords: ['validitaet', 'experiment', 'kontrolle'] },
  '10': { categoryId: 'statistics-and-psychometrics', keywords: ['p-wert', 'alpha-fehler', 'beta-fehler'] },
  '11': { categoryId: 'statistics-and-psychometrics', keywords: ['objektivitaet', 'reliabilitaet', 'validitaet'] },
  '12': { categoryId: 'motivation-and-emotion', keywords: ['motivation', 'emotion', 'theorie'] },
  '13': { categoryId: 'differential-and-personality', keywords: ['hexaco', 'persoenlichkeit', 'traits'] },
  '14': { categoryId: 'differential-and-personality', keywords: ['mischel', 'person-situation', 'persoenlichkeit'] },
  '15': { categoryId: 'differential-and-personality', keywords: ['persoenlichkeitstests', 'diagnostik', 'traits'] },
  '16': { categoryId: 'differential-and-personality', keywords: ['persoenlichkeitsstoerungen', 'klinisch', 'persoenlichkeit'] },
  '17': { categoryId: 'differential-and-personality', keywords: ['intelligenz', 'theorien', 'diagnostik'] },
  '18': { categoryId: 'statistics-and-psychometrics', keywords: ['faktorenanalyse', 'psychometrie', 'statistik'] },
  '19': { categoryId: 'statistics-and-psychometrics', keywords: ['iq-tests', 'diagnostik', 'intelligenz'] },
  '20': { categoryId: 'learning-and-development', keywords: ['vygotsky', 'soziale entwicklung', 'lernen'] },
  '21': { categoryId: 'learning-and-development', keywords: ['sprachentwicklung', 'entwicklung', 'kindheit'] },
  '22': { categoryId: 'learning-and-development', keywords: ['core knowledge', 'entwicklung', 'kindheit'] },
  '23': { categoryId: 'motivation-and-emotion', keywords: ['selbstwirksamkeit', 'bandura', 'motivation'] },
  '24': { categoryId: 'motivation-and-emotion', keywords: ['leistungsmotivation', 'motivation', 'zielorientierung'] },
  '25': { categoryId: 'motivation-and-emotion', keywords: ['gelernte hilflosigkeit', 'motivation', 'attribution'] },
  '26': { categoryId: 'social-psychology', keywords: ['soziale kognition', 'soziales denken', 'attribution'] },
}

const categoryMap = new Map(categories.map((category) => [category.id, category]))
const categoryBySlugMap = new Map(categories.map((category) => [category.slug, category]))
const taxonomyMap = new Map(taxonomyNodes.map((node) => [node.id, node]))

export function listCategories() {
  return [...categories].sort((left, right) => left.order - right.order)
}

export function getCanonicalCategoryId(categoryId: string) {
  return categoryMap.has(categoryId) ? categoryId : legacyCategoryIdMap.get(categoryId)
}

export function getCategoryById(categoryId: string) {
  const canonicalCategoryId = getCanonicalCategoryId(categoryId)
  return canonicalCategoryId ? categoryMap.get(canonicalCategoryId) : undefined
}

export function getCategoryBySlug(slug: string) {
  return categoryBySlugMap.get(slug)
}

export function getTaxonomyNode(categoryId: string) {
  const canonicalCategoryId = getCanonicalCategoryId(categoryId)
  return canonicalCategoryId ? taxonomyMap.get(canonicalCategoryId) : undefined
}

export function getTaxonomyPath(categoryId: string) {
  const taxonomyNode = getTaxonomyNode(categoryId)
  return taxonomyNode ? [taxonomyNode] : []
}
