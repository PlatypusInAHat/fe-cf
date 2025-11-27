"use client";

import { UserLayout } from "@/components/layouts/user-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function CafeSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");

  const cafes = [
    {
      id: 1,
      name: "モダンカフェ",
      rating: 4.5,
      reviews: 48,
      address: "東京都渋谷区1-2-3",
      hours: "9:00 - 20:00",
      image: "/modern-cafe.jpg",
    },
    {
      id: 2,
      name: "スターライトカフェ",
      rating: 4.8,
      reviews: 156,
      address: "東京都新宿区4-5-6",
      hours: "8:00 - 22:00",
      image: "/starlight-cafe.jpg",
    },
    {
      id: 3,
      name: "ブルームーンカフェ",
      rating: 4.2,
      reviews: 92,
      address: "東京都東京1-2-3",
      hours: "10:00 - 19:00",
      image: "/blue-moon-cafe.jpg",
    },
  ];

  return (
    <UserLayout>
      <div className="space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold mb-6 text-foreground">カフェ検索</h1>

          {/* Search Filters */}
          <Card className="p-6 mb-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  キーワード
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="カフェ名で検索"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Select Area */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  エリア
                </label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">すべて</option>
                  <option value="shibuya">渋谷</option>
                  <option value="shinjuku">新宿</option>
                  <option value="tokyo">東京</option>
                </select>
              </div>

              {/* Condition Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  条件
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>すべて</option>
                  <option>Wi-Fi有り</option>
                  <option>電源有り</option>
                  <option>禁煙</option>
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  価格帯
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>すべて</option>
                  <option>〜500円</option>
                  <option>500〜1000円</option>
                  <option>1000円〜</option>
                </select>
              </div>
            </div>

            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              検索
            </Button>
          </Card>

          {/* Results Count */}
          <p className="text-muted-foreground mb-4">{cafes.length}件の結果</p>

          {/* Cafe List */}
          <div className="space-y-4">
            {cafes.map((cafe) => (
              <Card
                key={cafe.id}
                className="overflow-hidden hover:shadow-lg transition flex"
              >
                <img
                  src={cafe.image || "/placeholder.svg"}
                  alt={cafe.name}
                  className="w-48 h-48 object-cover"
                />

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {cafe.name}
                    </h3>

                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span>{cafe.rating}</span>
                        <span>({cafe.reviews}件)</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{cafe.address}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{cafe.hours}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-24 mt-4 bg-transparent">
                    詳細
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
