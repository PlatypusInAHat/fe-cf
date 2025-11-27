"use client"

import { useState } from "react"
import { Search, Edit2, Trash2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const MOCK_OWNERS = [
  {
    id: 1,
    name: "Owner A",
    email: "owner1@cafe.com",
    managedCafes: 3,
    status: "Active",
    joinDate: "2025-01-15",
  },
  {
    id: 2,
    name: "Owner B",
    email: "owner2@cafe.com",
    managedCafes: 1,
    status: "Active",
    joinDate: "2025-02-20",
  },
  {
    id: 3,
    name: "Owner C",
    email: "owner3@cafe.com",
    managedCafes: 5,
    status: "Locked",
    joinDate: "2024-12-10",
  },
]

export default function OwnersManagementPage() {
  const [owners, setOwners] = useState(MOCK_OWNERS)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredOwners = owners.filter(
    (owner) =>
      owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      owner.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredOwners.length / itemsPerPage)
  const paginatedOwners = filteredOwners.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this owner?")) {
      setOwners(owners.filter((o) => o.id !== id))
    }
  }

  const getStatusColor = (status) => {
    if (status === "Active") return "bg-green-100 text-green-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <Card className="p-4 bg-card">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Search</Button>
        </div>
      </Card>

      {/* Owners Count */}
      <div className="text-sm text-muted-foreground">Owner List - Total: {owners.length} owners</div>

      {/* Table */}
      <Card className="p-6 bg-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-input">
            <tr className="text-foreground font-semibold">
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">Owner Name</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Managed Cafes</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-foreground">
            {paginatedOwners.map((owner) => (
              <tr key={owner.id} className="border-b border-input hover:bg-muted/50">
                <td className="py-3 px-4">{owner.id}</td>
                <td className="py-3 px-4">{owner.name}</td>
                <td className="py-3 px-4">{owner.email}</td>
                <td className="py-3 px-4">{owner.managedCafes}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded text-xs font-medium ${getStatusColor(owner.status)}`}
                  >
                    {owner.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:text-destructive bg-transparent"
                      onClick={() => handleDelete(owner.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {paginatedOwners.length > 0
            ? `${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(currentPage * itemsPerPage, filteredOwners.length)} of ${filteredOwners.length} owners`
            : "No data"}
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
