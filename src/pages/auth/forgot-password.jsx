"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Coffee, ArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      setError("メールアドレスが必要です")
      return
    }
    if (!emailRegex.test(email)) {
      setError("有効なメールアドレスを入力してください")
      return
    }

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      // Redirect to verify OTP page with email as state
      navigate("/auth/verify-otp", { state: { email } })
    }, 1500)
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
          <p className="text-muted-foreground">パスワードをリセット</p>
        </div>

        {/* Reset Form */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                登録済みのメールアドレスを入力してください
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={`w-full px-4 py-2 rounded-lg border ${
                  error ? "border-destructive bg-destructive/5" : "border-border"
                } bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {error && <p className="text-destructive text-sm mt-1">{error}</p>}
            </div>

            <p className="text-sm text-muted-foreground">
              確認コードがメールで送信されます。
            </p>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
            >
              {loading ? "送信中..." : "確認コードを送信"}
            </Button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <Link
              to="/auth/login"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              ログインに戻る
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
