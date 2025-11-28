"use client"

import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Cafe Finder</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/auth/login" className="text-foreground hover:text-primary transition">
              ログイン
            </Link>
            <Link to="/auth/register" className="text-foreground hover:text-primary transition">
              登録
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-foreground">あなたの完璧なカフェを見つける</h1>
          <p className="text-xl text-muted-foreground mb-8">
            カフェを探索、レビュー、ブックマーク。カフェオーナーと管理者向けのプラットフォーム。
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="/auth/login">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                ログイン
              </Button>
            </Link>
            <Link to="/auth/register">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                新規登録
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-card p-8 rounded-lg border border-border">
            <Coffee className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">カフェを発見</h3>
            <p className="text-muted-foreground">あなたの地域のおすすめカフェを検索して探索します。</p>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <Coffee className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">レビュー投稿</h3>
            <p className="text-muted-foreground">あなたのカフェ体験を共有し、他のコーヒー愛好家を助けます。</p>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <Coffee className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">ビジネス管理</h3>
            <p className="text-muted-foreground">カフェオーナーはビジネスを効率的に管理できます。</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between text-sm text-muted-foreground">
          <div className="flex gap-6">
            <Link to="#terms" className="hover:text-primary transition">
              利用規約
            </Link>
            <Link to="#contact" className="hover:text-primary transition">
              お問い合わせ
            </Link>
          </div>
          <p>© 2025 Cafe Finder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
