"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Coffee, ArrowLeft, CheckCircle } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"

export default function ResetPasswordPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email || ""

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^"']{8,}$/

    if (!formData.password) {
      newErrors.password = "パスワードが必要です"
    } else if (formData.password.length < 8) {
      newErrors.password = "パスワードは8文字以上である必要があります"
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "パスワードは英字、数字、特殊文字を含む必要があります"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "パスワードが一致しません"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/auth/login")
      }, 2000)
    }, 1500)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              パスワードがリセットされました
            </h2>
            <p className="text-muted-foreground mb-6">
              新しいパスワードでログインしてください
            </p>
            <p className="text-sm text-muted-foreground">
              ログインページにリダイレクト中...
            </p>
          </Card>
        </div>
      </div>
    )
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
          <p className="text-muted-foreground">新しいパスワードを設定</p>
        </div>

        {/* Reset Form */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                新しいパスワード
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="••••••••"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.password ? "border-destructive bg-destructive/5" : "border-border"
                } bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.password && (
                <p className="text-destructive text-sm mt-1">{errors.password}</p>
              )}
              <p className="text-xs text-muted-foreground mt-2">
                英字、数字、特殊文字を含む8文字以上
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                パスワード確認
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                placeholder="••••••••"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.confirmPassword
                    ? "border-destructive bg-destructive/5"
                    : "border-border"
                } bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.confirmPassword && (
                <p className="text-destructive text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
            >
              {loading ? "処理中..." : "パスワードをリセット"}
            </Button>
          </form>

          {/* Back */}
          <div className="mt-6 text-center">
            <Link
              to="/auth/forgot-password"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              戻る
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
