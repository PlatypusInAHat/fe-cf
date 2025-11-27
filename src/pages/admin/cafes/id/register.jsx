"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const MOCK_REQUESTS= [
  {
    id: 1,
    cafeName: "New Modern Cafe",
    ownerName: "Owner D",
    address: "Tokyo, Chiyoda Ward",
    requestDate: "2025-10-18",
    status: "pending",
  },
  {
    id: 2,
    cafeName: "Sunset Cafe",
    ownerName: "Owner E",
    address: "Tokyo, Minato Ward",
    requestDate: "2025-10-15",
    status: "pending",
  },
]

const TABS = ["Manual Registration", "Approval Requests"]

export default function CafeRegistrationPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [requests, setRequests] = useState(MOCK_REQUESTS)
  const [formData, setFormData] = useState({
    storeName: "",
    owner: "",
    address: "",
    openTime: "",
    closeTime: "",
    description: "",
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Submitting cafe registration:", formData)
    alert("Cafe registered successfully!")
    setFormData({
      storeName: "",
      owner: "",
      address: "",
      openTime: "",
      closeTime: "",
      description: "",
    })
  }

  const handleApprove = (id) => {
    setRequests(requests.filter((r) => r.id !== id))
    alert("Request approved and cafe registered!")
  }

  const handleReject = (id) => {
    setRequests(requests.filter((r) => r.id !== id))
    alert("Request rejected. Owner will be notified.")
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-input">
        {TABS.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === index
                ? "border-b-primary text-primary"
                : "border-b-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
            {index === 1 && requests.length > 0 && (
              <span className="ml-2 inline-block px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                {requests.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Manual Registration Tab */}
      {activeTab === 0 && (
        <Card className="p-8 bg-card">
          <h2 className="text-2xl font-bold text-foreground mb-6">Register New Cafe</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Store Name *</label>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Owner *</label>
                <select
                  name="owner"
                  value={formData.owner}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Owner</option>
                  <option value="Owner A">Owner A</option>
                  <option value="Owner B">Owner B</option>
                  <option value="Owner C">Owner C</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Opening Time</label>
                <input
                  type="time"
                  name="openTime"
                  value={formData.openTime}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Closing Time</label>
                <input
                  type="time"
                  name="closeTime"
                  value={formData.closeTime}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 bg-transparent">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Save
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Approval Requests Tab */}
      {activeTab === 1 && (
        <div className="space-y-4">
          {requests.length === 0 ? (
            <Card className="p-12 text-center bg-card">
              <p className="text-muted-foreground">No pending requests.</p>
            </Card>
          ) : (
            requests.map((request) => (
              <Card key={request.id} className="p-6 bg-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div className="col-span-2">
                    <p className="font-semibold text-foreground">{request.caféName}</p>
                    <p className="text-sm text-muted-foreground">{request.ownerName}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      /* View details logic */
                    }}
                  >
                    View Details
                  </Button>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => handleApprove(request.id)}
                  >
                    Approve
                  </Button>
                  <Button variant="destructive" className="flex-1" onClick={() => handleReject(request.id)}>
                    Reject
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  )
}
