"use client"

import { OwnerLayout } from "@/components/layouts/owner-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { useState } from "react"

export default function NewCafePage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    openTime: "09:00",
    closeTime: "20:00",
    wifi: false,
    outlet: false,
  })
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Save cafe:", { formData, image })
    // TODO: Implement save logic
  }

  return (
    <OwnerLayout>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-foreground">新規カフェ作成</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 text-foreground">基本情報</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">カフェ名</label>
                <input
                  type="text"
                  placeholder="カフェ モダン"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">住所</label>
                <input
                  type="text"
                  placeholder="東京都渋谷区1-2-3"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">説明文</label>
                <textarea
                  placeholder="カフェの説明を入力してください"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">開店時間</label>
                  <input
                    type="time"
                    value={formData.openTime}
                    onChange={(e) => setFormData({ ...formData, openTime: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">閉店時間</label>
                  <input
                    type="time"
                    value={formData.closeTime}
                    onChange={(e) => setFormData({ ...formData, closeTime: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Services */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 text-foreground">設備・サービス</h2>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.wifi}
                  onChange={(e) => setFormData({ ...formData, wifi: e.target.checked })}
                  className="w-4 h-4 rounded border-border"
                />
                <span className="text-foreground">無料Wi-Fiが利用可能</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.outlet}
                  onChange={(e) => setFormData({ ...formData, outlet: e.target.checked })}
                  className="w-4 h-4 rounded border-border"
                />
                <span className="text-foreground">コンセントが利用可能</span>
              </label>
            </div>
          </Card>

          {/* Photo Upload */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 text-foreground">写真アップロード</h2>

            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-muted/50 transition cursor-pointer">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-foreground font-medium">クリックまたはドラッグ&ドロップで画像をアップロード</p>
              <p className="text-muted-foreground text-sm">PNG, JPG, WEBP (最大 5MB)</p>
              <input type="file" className="hidden" accept="image/*" />
            </div>
          </Card>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              保存
            </Button>
            <Button type="button" variant="outline" className="flex-1 bg-transparent">
              キャンセル
            </Button>
          </div>
        </form>
      </div>
    </OwnerLayout>
  )
}
