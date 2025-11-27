"use client"

export function StatusBadge({ status, text, size = "md" }) {
  const statusStyles = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-gray-100 text-gray-800",
    pending: "bg-yellow-100 text-yellow-800",
    locked: "bg-red-100 text-red-800",
    operating: "bg-green-100 text-green-800",
    closed: "bg-red-100 text-red-800",
  }

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 rounded text-sm",
    lg: "px-4 py-2 text-base",
  }

  const statusText = text || status.charAt(0).toUpperCase() + status.slice(1)

  return (
    <span className={`inline-block font-medium rounded ${statusStyles[status]} ${sizeClasses[size]}`}>
      {statusText}
    </span>
  )
}
