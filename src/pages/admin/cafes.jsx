"use client"

import { AdminLayout } from "@/components/layouts/admin-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Plus, Eye, Trash2 } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function CafesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const cafes = [
    {
      id: 1,
      name: "モダンカフェ",
      owner: "山田太郎",
      address: "東京都渋谷区1-2-3",
      status: "operating",
    },
    {
      id: 2,
      name: "スターライトカフェ",
      owner: "佐藤花子",
      address: "東京都新宿区4-5-6",
      status: "operating",
    },
    {
      id: 3,
      name: "ブルームーンカフェ",
      owner: "田中美咲",
      address: "東京都東京1-2-3",
      status: "locked",
    },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">カフェ管理</h1>

        {/* Search and Add */}
        <Card className="p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="店舗名またはIDで検索"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Search className="w-4 h-4" />
            </Button>
            <Link href="/admin/cafes/new">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                新規作成
              </Button>
            </Link>
          </div>
        </Card>

        {/* Count */}
        <p className="text-muted-foreground">カフェリスト：全 {cafes.length} 件のカフェ</p>

        {/* Table */}
        <Card className="overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted">
              <tr className="border-b border-border">
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">店舗ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">店舗名</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">オーナー名</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">住所</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">ステータス</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">アクション</th>
              </tr>
            </thead>
            <tbody>
              {cafes.map((cafe) => (
                <tr key={cafe.id} className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-3 text-sm text-foreground">{cafe.id}</td>
                  <td className="px-6 py-3 text-sm text-foreground font-medium">{cafe.name}</td>
                  <td className="px-6 py-3 text-sm text-muted-foreground">{cafe.owner}</td>
                  <td className="px-6 py-3 text-sm text-muted-foreground">{cafe.address}</td>
                  <td className="px-6 py-3 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${cafe.status === "operating" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"}`}
                    >
                      {cafe.status === "operating" ? "営業中" : "ロック"}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
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
          <p className="text-sm text-muted-foreground">1 - 10 / 全 {cafes.length} 件を表示</p>
          <div className="flex gap-2">
            <Button variant="outline">前へ</Button>
            <Button>1</Button>
            <Button variant="outline">次へ</Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
