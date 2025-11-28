"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Coffee } from "lucide-react"
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors= {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^"']{8,}$/

    if (!formData.name) newErrors.name = "氏名が必要です"
    if (!formData.email) newErrors.email = "メールアドレスが必要です"
    else if (!emailRegex.test(formData.email)) newErrors.email = "有効なメールアドレスを入力してください"

    if (!formData.phone) newErrors.phone = "電話番号が必要です"
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "形式: 090-1234-5678"

    if (!formData.password) newErrors.password = "パスワードが必要です"
    else if (formData.password.length < 8) newErrors.password = "パスワードは8文字以上である必要があります"

    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "パスワードが一致しません"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Registration attempt:", formData)
      // TODO: Implement actual registration logic
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Cafe Finder</h1>
          </div>
          <p className="text-muted-foreground">新しいアカウントを作成</p>
        </div>

        {/* Register Form */}
        <Card className="p-8">
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">氏名</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="山田 太郎"
                className={`w-full px-4 py-2 rounded-lg border ${errors.name ? "border-destructive bg-destructive/5" : "border-border"} bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">メールアドレス</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className={`w-full px-4 py-2 rounded-lg border ${errors.email ? "border-destructive bg-destructive/5" : "border-border"} bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">電話番号</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="090-1234-5678"
                className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? "border-destructive bg-destructive/5" : "border-border"} bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">パスワード</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className={`w-full px-4 py-2 rounded-lg border ${errors.password ? "border-destructive bg-destructive/5" : "border-border"} bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.password && <p className="text-destructive text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">パスワード確認</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="••••••••"
                className={`w-full px-4 py-2 rounded-lg border ${errors.confirmPassword ? "border-destructive bg-destructive/5" : "border-border"} bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.confirmPassword && <p className="text-destructive text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              登録
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            すでにアカウントをお持ちの方は
            <Link to="/auth/login" className="text-primary hover:underline ml-1">
              ログイン
            </Link>
          </p>
        </Card>
      </div>
    </div>
  )
}
