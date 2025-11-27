"use client"

import { UserLayout } from "@/components/layouts/user-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Camera } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "山田 太郎",
    email: "yamada@example.com",
    avatar: "/user-avatar.jpg",
  })

  return (
    <UserLayout>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/user/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">プロフィール</h1>
        </div>

        <div className="space-y-6">
          {/* Avatar */}
          <Card className="p-6 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <img
                  src={profile.avatar || "/placeholder.svg"}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />
                <button className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">名前</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">メール（読み取り専用）</label>
                <input
                  type="email"
                  value={profile.email}
                  disabled
                  className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-muted-foreground"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">保存</Button>
              <Button variant="outline">私のレビューを見る</Button>
            </div>
          </Card>
        </div>
      </div>
    </UserLayout>
  )
}
