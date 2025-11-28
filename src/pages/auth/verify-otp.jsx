"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Coffee, ArrowLeft } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"

export default function VerifyOTPPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email || ""

  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!otp) {
      setError("確認コードが必要です")
      return
    }
    if (otp.length !== 6) {
      setError("確認コードは6桁である必要があります")
      return
    }

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      // Redirect to reset password page
      navigate("/auth/reset-password", { state: { email, otp } })
    }, 1500)
  }

  const handleResendOTP = () => {
    setOtp("")
    setError("")
    // Simulate resend API call
    alert("新しい確認コードが送信されました")
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
          <p className="text-muted-foreground">確認コードを入力</p>
        </div>

        {/* OTP Form */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                確認コード
              </label>
              <p className="text-sm text-muted-foreground mb-4">
                {email}に送信された6桁のコードを入力してください
              </p>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="000000"
                maxLength="6"
                className={`w-full px-4 py-2 rounded-lg border text-center text-2xl tracking-widest font-bold ${
                  error ? "border-destructive bg-destructive/5" : "border-border"
                } bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {error && <p className="text-destructive text-sm mt-1">{error}</p>}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
            >
              {loading ? "検証中..." : "確認"}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleResendOTP}
              className="w-full"
            >
              コードを再送信
            </Button>
          </form>

          {/* Back to Forgot Password */}
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
