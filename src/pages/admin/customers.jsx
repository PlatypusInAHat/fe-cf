"use client"

import { AdminLayout } from "@/components/layouts/admin-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Edit2, Trash2 } from "lucide-react"
import { useState } from "react"

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const customers = [
    { id: 1, name: "山田太郎", email: "yamada@example.com", joinDate: "2025/01/10", status: "active" },
    { id: 2, name: "佐藤花子", email: "sato@example.com", joinDate: "2025/01/08", status: "active" },
    { id: 3, name: "鈴木次郎", email: "suzuki@example.com", joinDate: "2025/01/05", status: "locked" },
    { id: 4, name: "田中美咲", email: "tanaka@example.com", joinDate: "2025/01/02", status: "active" },
    { id: 5, name: "伊藤健太", email: "ito@example.com", joinDate: "2024/12/28", status: "active" },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">顧客管理</h1>

        {/* Search */}
        <Card className="p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="氏名またはメールで検索"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Count */}
        <p className="text-muted-foreground">顧客リスト：全 {customers.length} 件表示</p>

        {/* Table */}
        <Card className="overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted">
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">氏名</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">メール</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">登録日</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">ステータス</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">アクション</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-3 text-sm text-foreground">{customer.id}</td>
                  <td className="px-6 py-3 text-sm text-foreground font-medium">{customer.name}</td>
                  <td className="px-6 py-3 text-sm text-muted-foreground">{customer.email}</td>
                  <td className="px-6 py-3 text-sm text-muted-foreground">{customer.joinDate}</td>
                  <td className="px-6 py-3 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${customer.status === "active" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"}`}
                    >
                      {customer.status === "active" ? "有効" : "ロック"}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
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
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">1 - 5 件を表示</p>
          <div className="flex gap-2">
            <Button variant="outline">前へ</Button>
            <Button>1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">次へ</Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
