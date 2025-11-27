"use client";

import { useState } from "react";
import { Star, Edit2, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const MOCK_REVIEWS = [
  {
    id: 1,
    cafeName: "Modern Cafe",
    rating: 5,
    comment: "Great coffee and cozy atmosphere. Highly recommended!",
    date: "2025-10-15",
  },
  {
    id: 2,
    cafeName: "Starlight Cafe",
    rating: 4,
    comment: "Good pastries but a bit crowded. Nice view though.",
    date: "2025-10-10",
  },
  {
    id: 3,
    cafeName: "Blue Moon Cafe",
    rating: 3,
    comment: "Average coffee, decent place to work.",
    date: "2025-10-05",
  },
];

export default function MyReviewsPage() {
  const [reviews, setReviews] = useState(MOCK_REVIEWS);
  const [searchCafe, setSearchCafe] = useState("");
  const [filterRating, setFilterRating] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredReviews = reviews
    .filter(
      (r) =>
        searchCafe === "" ||
        r.cafeName.toLowerCase().includes(searchCafe.toLowerCase())
    )
    .filter(
      (r) => filterRating === "" || r.rating === Number.parseInt(filterRating)
    )
    .sort((a, b) => {
      if (sortBy === "newest")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === "oldest")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === "rating-high") return b.rating - a.rating;
      if (sortBy === "rating-low") return a.rating - b.rating;
      return 0;
    });

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this review?")) {
      setReviews(reviews.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/user/dashboard">
            <Button variant="outline" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">My Reviews</h1>
        </div>

        {/* Search & Filter */}
        <Card className="p-6 mb-6 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search café */}
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Search café
              </label>
              <input
                type="text"
                value={searchCafe}
                onChange={(e) => setSearchCafe(e.target.value)}
                placeholder="Search by café name"
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filter rating */}
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Filter by Rating
              </label>
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All ratings</option>
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="rating-high">Highest Rating</option>
                <option value="rating-low">Lowest Rating</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Review List */}
        <div className="space-y-4">
          {filteredReviews.length === 0 ? (
            <Card className="p-8 text-center bg-card">
              <p className="text-muted-foreground">
                {searchCafe || filterRating
                  ? "No reviews match your filters."
                  : "No reviews yet."}
              </p>
            </Card>
          ) : (
            filteredReviews.map((review) => (
              <Card
                key={review.id}
                className="p-6 bg-card hover:bg-muted/40 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {review.cafeName}
                  </h3>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit2 className="w-4 h-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(review.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-foreground">{review.comment}</p>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
