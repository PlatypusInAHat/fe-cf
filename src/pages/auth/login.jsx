"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Coffee } from "lucide-react"
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})   // ✅ FIXED

  const validateForm = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) newErrors.email = "メールアドレスが必要です"
    else if (!emailRegex.test(email)) newErrors.email = "有効なメールアドレスを入力してください"

    if (!password) newErrors.password = "パスワードが必要です"
    else if (password.length < 8) newErrors.password = "パスワードは8文字以上である必要があります"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Login attempt:", { email, password })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="w-10 h-10 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Cafe Finder</h1>
          </div>
          <p className="text-muted-foreground">あなたのアカウントにログイン</p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">メールアドレス</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.email ? "border-destructive bg-destructive/5" : "border-border"
                } bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">パスワード</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.password ? "border-destructive bg-destructive/5" : "border-border"
                } bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.password && <p className="text-destructive text-sm mt-1">{errors.password}</p>}
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              ログイン
            </Button>
          </form>

          <div className="mt-6 space-y-3 text-center text-sm">
            <Link to="/auth/forgot-password" className="block text-primary hover:underline">
              パスワードを忘れた方はこちら
            </Link>
            <p className="text-muted-foreground">
              アカウントをお持ちでない方は
              <Link to="/auth/register" className="text-primary hover:underline ml-1">
                ここから登録
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
