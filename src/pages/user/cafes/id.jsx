"use client";

import { UserLayout } from "@/components/layouts/user-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  MapPin,
  Clock,
  Globe,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function CafeDetailPage() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    "/cafe-interior-1.jpg",
    "/cafe-interior-2.jpg",
    "/cafe-interior-3.jpg",
  ];

  const cafeData = {
    name: "カフェ モダン",
    status: "営業中",
    address: "東京都渋谷区1-2-3 モダンビル1F",
    phone: "090-1234-5678",
    hours: "9:00 - 20:00",
    description:
      "落ち着いた雰囲気の中で、上質なコーヒーと手作りスイーツをお楽しみいただけます。",
    rating: 4.2,
    reviews: 48,
    wifi: true,
    outlet: true,
  };

  const ratingDistribution = [
    { name: "5★", value: 15 },
    { name: "4★", value: 20 },
    { name: "3★", value: 8 },
    { name: "2★", value: 3 },
    { name: "1★", value: 2 },
  ];

  const weeklyVisitors = [
    { day: "月", visitors: 120 },
    { day: "火", visitors: 150 },
    { day: "水", visitors: 145 },
    { day: "木", visitors: 160 },
    { day: "金", visitors: 200 },
    { day: "土", visitors: 250 },
    { day: "日", visitors: 180 },
  ];

  const reviews = [
    {
      author: "山田太郎",
      rating: 5,
      date: "2025/01/15",
      comment: "素晴らしいコーヒーと親切なスタッフ。また来ます！",
    },
    {
      author: "佐藤花子",
      rating: 4,
      date: "2025/01/12",
      comment: "雰囲気が良く、落ち着いて過ごせました。",
    },
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        {/* PHOTO GALLERY — FIXED COMPLETELY */}
        <Card className="overflow-hidden">
          <div className="relative">
            <img
              src={photos[currentPhotoIndex] || "/placeholder.svg"}
              alt="cafe"
              className="w-full h-96 object-cover"
            />

            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPhotoIndex(idx)}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentPhotoIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* BASIC INFO */}
        <Card className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-bold text-foreground">
                  {cafeData.name}
                </h1>
                <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs font-semibold">
                  {cafeData.status}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="text-lg font-semibold text-foreground">
                    {cafeData.rating} / 5.0
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({cafeData.reviews}件)
                  </span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`gap-2 ${
                isFavorited
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`}
              />
              お気に入り
            </Button>
          </div>

          <div className="space-y-3 text-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">住所</p>
                <p>{cafeData.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">営業時間</p>
                <p>{cafeData.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">電話番号</p>
                <p>{cafeData.phone}</p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mt-4">{cafeData.description}</p>

          <div className="flex gap-3 mt-6">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              予約
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              レビューを書く
            </Button>
          </div>
        </Card>

        {/* CHARTS */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 text-foreground">
              評価の分布
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ratingDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {ratingDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={[
                        "#8B6F47",
                        "#D4A574",
                        "#A0826D",
                        "#C9956F",
                        "#E5B8A1",
                      ][index]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4 text-foreground">
              週間訪問者数
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyVisitors}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visitors" fill="#8B6F47" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* REVIEWS */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4 text-foreground">レビュー</h3>
          <div className="space-y-4">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="pb-4 border-b border-border last:border-b-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">
                      {review.author}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-accent text-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>

                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </UserLayout>
  );
}
