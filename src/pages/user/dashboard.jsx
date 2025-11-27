"use client"

import { UserLayout } from "@/components/layouts/user-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageSquare, MapPin, ChevronRight } from "lucide-react"

export default function UserDashboard() {
  // Mock data
  const stats = [
    { label: "あなたのお気に入り", value: 8, icon: Heart },
    { label: "レビュー数", value: 5, icon: MessageSquare },
    { label: "訪問済みカフェ数", value: 12, icon: MapPin },
  ]

  const recommendedCafes = [
    { id: 1, name: "モダンカフェ", rating: 4.5, area: "渋谷", image: "/modern-cafe.jpg" },
    { id: 2, name: "スターライトカフェ", rating: 4.8, area: "新宿", image: "/starlight-cafe.jpg" },
    { id: 3, name: "ブルームーンカフェ", rating: 4.2, area: "東京", image: "/blue-moon-cafe.jpg" },
  ]

  const recentActivities = [
    { date: "2025/01/15", action: "モダンカフェをレビューしました", icon: MessageSquare },
    { date: "2025/01/14", action: "スターライトカフェをお気に入りに追加", icon: Heart },
    { date: "2025/01/12", action: "ブルームーンカフェを訪問しました", icon: MapPin },
  ]

  return (
    <UserLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-primary mt-2">{stat.value}</p>
                </div>
                <Icon className="w-12 h-12 text-primary/30" />
              </div>
            </Card>
            )
          })}
        </div>

        {/* Search Button */}
        <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">近くのカフェを探す</h3>
              <p className="text-muted-foreground text-sm">現在地情報をもとに周辺カフェを検索</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">検索</Button>
          </div>
        </Card>

        {/* Recommended Cafes */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">おすすめカフェ</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {recommendedCafes.map((cafe) => (
              <Card key={cafe.id} className="overflow-hidden hover:shadow-lg transition">
                <img src={cafe.image || "/placeholder.svg"} alt={cafe.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{cafe.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1">
                      <span className="text-accent">★</span>
                      <span className="text-sm text-foreground">{cafe.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{cafe.area}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-3 text-xs bg-transparent">
                    詳細へ
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">最近の活動</h2>
          <Card className="divide-y divide-border">
            {recentActivities.map((activity, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <activity.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            ))}
          </Card>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">お知らせ</h2>
          <Card className="p-4 bg-secondary/10 border border-secondary/30">
            <p className="text-sm text-foreground">
              新しいカフェが追加されました。プロモーション更新、システムメンテナンスなど、最新の通知をここで確認できます。
            </p>
          </Card>
        </div>
      </div>
    </UserLayout>
  )
}
