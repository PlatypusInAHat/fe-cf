"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemCount,
  itemsPerPage,
  totalItems,
}) {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  return (
    <div className="flex items-center justify-between text-sm text-muted-foreground">
      {itemCount !== undefined && itemsPerPage !== undefined && totalItems !== undefined && (
        <span>
          {Math.max(1, (currentPage - 1) * itemsPerPage + 1)} - {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
          {totalItems} items
        </span>
      )}

      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => onPageChange(currentPage - 1)} disabled={isFirstPage}>
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1
          // Show first, last, current, and adjacent pages
          const shouldShow =
            pageNum === 1 || pageNum === totalPages || pageNum === currentPage || Math.abs(pageNum - currentPage) <= 1

          if (!shouldShow && i > 0 && i < totalPages - 1 && pageNum === 2) {
            return (
              <span key="dots-start" className="px-2 py-1">
                ...
              </span>
            )
          }

          if (
            !shouldShow &&
            i > 0 &&
            i < totalPages - 1 &&
            pageNum === totalPages - 1 &&
            currentPage < totalPages - 2
          ) {
            return (
              <span key="dots-end" className="px-2 py-1">
                ...
              </span>
            )
          }

          if (!shouldShow) return null

          return (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "default" : "outline"}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </Button>
          )
        })}

        <Button variant="outline" size="sm" onClick={() => onPageChange(currentPage + 1)} disabled={isLastPage}>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
