"use client"

import { Card } from "@/components/ui/card"

export function EmptyState({ icon, title, description, action }) {
  return (
    <Card className="p-12 text-center bg-card">
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      {description && <p className="text-muted-foreground mb-6">{description}</p>}
      {action && <div>{action}</div>}
    </Card>
  )
}
