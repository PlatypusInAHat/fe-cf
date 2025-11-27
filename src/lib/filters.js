// Search and filter utilities

export function filterBySearch(items, query, searchFields) {
  if (!query) return items

  const lowerQuery = query.toLowerCase()
  return items.filter((item) =>
    searchFields.some((field) =>
      String(item[field] || "")
        .toLowerCase()
        .includes(lowerQuery),
    ),
  )
}

export function filterByStatus(items, status) {
  if (!status) return items

  const statuses = Array.isArray(status) ? status : [status]
  return items.filter((item) => statuses.includes(item.status || ""))
}

export function filterByDateRange(items, startDate, endDate) {
  return items.filter((item) => {
    if (!item.date) return false

    const itemDate = new Date(item.date)
    if (startDate && itemDate < startDate) return false
    if (endDate && itemDate > endDate) return false

    return true
  })
}

export function sortByField(items, field, order = "asc") {
  return [...items].sort((a, b) => {
    const aVal = a[field]
    const bVal = b[field]

    if (aVal < bVal) return order === "asc" ? -1 : 1
    if (aVal > bVal) return order === "asc" ? 1 : -1
    return 0
  })
}

export function paginateItems(items, page, itemsPerPage) {
  const totalPages = Math.ceil(items.length / itemsPerPage)
  const start = (page - 1) * itemsPerPage
  const end = start + itemsPerPage

  return {
    items: items.slice(start, end),
    totalPages,
  }
}
