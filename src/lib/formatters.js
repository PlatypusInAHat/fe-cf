// Data formatting utilities

export function formatDate(date, locale) {
  const d = typeof date === "string" ? new Date(date) : date

  if (locale === "ja") {
    return d.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function formatDateTime(date, locale) {
  const d = typeof date === "string" ? new Date(date) : date

  if (locale === "ja") {
    return d.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function formatTime(time) {
  // Assumes time format is HH:MM
  return time
}

export function formatCurrency(amount, currency) {
  if (currency === "JPY") {
    return `¥${amount.toLocaleString("ja-JP")}`
  }
  return `$${amount.toLocaleString("en-US")}`
}

export function formatDistance(meters) {
  if (meters < 1000) {
    return `${meters}m`
  }
  return `${(meters / 1000).toFixed(1)}km`
}

export function formatRating(rating) {
  return rating.toFixed(1)
}

export function formatReviewCount(count) {
  return count.toLocaleString()
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

export function capitalizeFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}
