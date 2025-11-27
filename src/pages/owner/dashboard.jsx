"use client";

import { OwnerLayout } from "@/components/layouts/owner-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function OwnerDashboard() {
  const stats = [
    { label: "総カフェ数", value: 3, color: "text-primary" },
    { label: "稼働中カフェ数", value: 2, color: "text-green-600" },
    { label: "レビュー数", value: 24, color: "text-accent" },
  ];

  const cafes = [
    {
      id: 1,
      name: "モダンカフェ",
      address: "東京都渋谷区1-2-3",
      status: "operating",
      statusLabel: "営業中",
    },
    {
      id: 2,
      name: "スターライトカフェ",
      address: "東京都新宿区4-5-6",
      status: "closed",
      statusLabel: "休止中",
    },
    {
      id: 3,
      name: "ブルームーンカフェ",
      address: "東京都東京1-2-3",
      status: "operating",
      statusLabel: "営業中",
    },
  ];

  return (
    <OwnerLayout>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <p className="text-muted-foreground text-sm">{stat.label}</p>
              <p className={`text-4xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Search and Add */}
        <Card className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                placeholder="カフェ名で検索"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="outline">
                <Search className="w-4 h-4" />
              </Button>
            </div>

            <Link to="/owner/cafes/new">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="w-4 h-4 mr-2" />
                新規カフェ作成
              </Button>
            </Link>
          </div>
        </Card>

        {/* Cafe List */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">カフェ一覧</h2>
          <Card className="overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr className="border-b border-border">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">カフェID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">カフェ名</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">住所</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">ステータス</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">操作</th>
                </tr>
              </thead>

              <tbody>
                {cafes.map((cafe) => (
                  <tr key={cafe.id} className="border-b border-border hover:bg-muted/50">
                    <td className="px-6 py-3 text-sm text-foreground">{cafe.id}</td>
                    <td className="px-6 py-3 text-sm text-foreground font-medium">{cafe.name}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">{cafe.address}</td>
                    <td className="px-6 py-3 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cafe.status === "operating"
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {cafe.statusLabel}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          詳細
                        </Button>
                        <Button variant="ghost" size="sm">
                          編集
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                        >
                          削除
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </OwnerLayout>
  );
}