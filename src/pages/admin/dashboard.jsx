
import { AdminLayout } from "@/components/layouts/admin-layout"
import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function AdminDashboard() {
  const stats = [
    { label: "総顧客数", value: "2,837", change: "+12% 前月比", icon: "👥" },
    { label: "オーナー数", value: "145", change: "+8% 前月比", icon: "🏢" },
    { label: "登録カフェ数", value: "487", change: "+15% 前月比", icon: "☕" },
    { label: "レビュー数", value: "5,234", change: "+24% 前月比", icon: "⭐" },
  ]

  const chartData = [
    { month: "1月", customers: 400, owners: 30, cafes: 50 },
    { month: "2月", customers: 500, owners: 40, cafes: 65 },
    { month: "3月", customers: 650, owners: 50, cafes: 85 },
    { month: "4月", customers: 800, owners: 65, cafes: 110 },
    { month: "5月", customers: 1000, owners: 80, cafes: 140 },
    { month: "6月", customers: 1200, owners: 95, cafes: 170 },
  ]

  const notifications = [
    { id: 1, message: "新規顧客登録", date: "2025/01/15 14:30", type: "success" },
    { id: 2, message: "新規カフェ承認待ち", date: "2025/01/15 10:15", type: "warning" },
    { id: 3, message: "システムエラー: API接続エラー", date: "2025/01/14 09:45", type: "error" },
    { id: 4, message: "オーナー登録申請", date: "2025/01/14 08:20", type: "info" },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2 text-primary">{stat.value}</p>
                  <p className="text-xs text-green-600 mt-2">{stat.change}</p>
                </div>
                <span className="text-3xl">{stat.icon}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* System Development Graph */}
          <Card className="md:col-span-2 p-6">
            <h3 className="text-lg font-bold mb-4 text-foreground">システム成長推移 (2025年)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="customers" stroke="#8B6F47" strokeWidth={2} name="顧客" />
                <Line type="monotone" dataKey="owners" stroke="#D4A574" strokeWidth={2} name="オーナー" />
                <Line type="monotone" dataKey="cafes" stroke="#A0826D" strokeWidth={2} name="カフェ" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Notifications */}
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 text-foreground">通知エリア</h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {notifications.map((notif) => (
                <div key={notif.id} className="p-3 bg-muted rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-foreground">{notif.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notif.date}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Monthly Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4 text-foreground">月別登録数</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="customers" fill="#8B6F47" name="顧客" />
              <Bar dataKey="owners" fill="#D4A574" name="オーナー" />
              <Bar dataKey="cafes" fill="#A0826D" name="カフェ" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </AdminLayout>
  )
}
