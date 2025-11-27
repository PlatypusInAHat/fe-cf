"use client"

import { useState } from "react"
import { ArrowLeft, Plus, Edit2, Trash2 } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const MOCK_PROMOTIONS = [
  {
    id: 1,
    name: "Coffee 20% OFF",
    discount: "20%",
    type: "percentage",
    startDate: "2025-10-01",
    endDate: "2025-10-31",
    status: "Active",
    views: 342,
  },
  {
    id: 2,
    name: "Pastry Bundle Deal",
    discount: "¥500",
    type: "fixed",
    startDate: "2025-10-15",
    endDate: "2025-11-15",
    status: "Scheduled",
    views: 0,
  },
]

export default function CafePromotionsPage({ params }) {
  const [promotions, setPromotions] = useState(MOCK_PROMOTIONS)

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this promotion?")) {
      setPromotions(promotions.filter((p) => p.id !== id))
    }
  }

  const getStatusColor = (status) => {
    if (status === "Active") return "bg-green-100 text-green-800"
    if (status === "Scheduled") return "bg-blue-100 text-blue-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href={`/owner/cafes/${params.id}`}>
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Promotions</h1>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Add New Promotion
          </Button>
        </div>

        {/* Promotions List */}
        <div className="space-y-4">
          {promotions.length === 0 ? (
            <Card className="p-12 text-center bg-card">
              <p className="text-muted-foreground">No promotions yet. Create one to attract more customers!</p>
            </Card>
          ) : (
            promotions.map((promo) => (
              <Card key={promo.id} className="p-6 bg-card hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{promo.name}</h3>
                    <div
                      className={`inline-block px-3 py-1 rounded text-sm font-medium ${getStatusColor(promo.status)}`}
                    >
                      {promo.status}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">Discount</div>
                    <div className="text-xl font-bold text-primary">{promo.discount}</div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">Period</div>
                    <div className="text-sm text-foreground">
                      {promo.startDate} ~ {promo.endDate}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">Views</div>
                    <div className="text-xl font-bold text-foreground">{promo.views}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:text-destructive bg-transparent"
                      onClick={() => handleDelete(promo.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
