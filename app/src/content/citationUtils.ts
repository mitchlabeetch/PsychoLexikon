export function buildShortCitation(citation: string) {
  const yearMatch = citation.match(/\((\d{4})\)/)
  const year = yearMatch?.[1] ?? 'o. J.'
  const authorChunk = citation.split('(')[0]?.trim() ?? 'Quelle'
  const authors = authorChunk
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)

  const firstAuthor = authors[0]?.replace(/\.$/, '') ?? 'Quelle'
  if (authors.length >= 3) {
    return `${firstAuthor} et al. (${year})`
  }

  if (authors.length === 2) {
    return `${authors[0]} & ${authors[1]} (${year})`
  }

  return `${firstAuthor} (${year})`
}

export function extractDoi(citation: string) {
  const doiMatch = citation.match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i)
  return doiMatch?.[0]
}
