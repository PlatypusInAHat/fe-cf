"use client"

import { Coffee, Menu, X, LayoutDashboard, Search, MessageSquare, Heart, Tag, User, LogOut } from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function UserLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} bg-sidebar text-sidebar-foreground transition-all duration-300 flex flex-col border-r`}
      >
        <div className="flex items-center justify-between p-4">
          <Coffee className="w-6 h-6" />
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-sidebar-accent rounded">
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: "ダッシュボード", href: "/user/dashboard" },
            { icon: Search, label: "カフェ検索", href: "/user/cafes/search" },
            { icon: Heart, label: "お気に入り", href: "/user/favorites" },
            { icon: MessageSquare, label: "レビュー", href: "/user/reviews" },
            { icon: Tag, label: "プロモーション", href: "/user/promotions" },
            { icon: User, label: "プロフィール", href: "/user/profile" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition">
                <item.icon className="w-5 h-5" />
                {sidebarOpen && <span className="text-sm">{item.label}</span>}
              </button>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:bg-destructive/10">
            <LogOut className="w-5 h-5" />
            {sidebarOpen && "ログアウト"}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Cafe Finder</h1>
            <input
              type="text"
              placeholder="カフェを検索..."
              className="px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
