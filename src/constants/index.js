// Application constants

export const AREAS = [
  "Shibuya",
  "Shinjuku",
  "Minato",
  "Chiyoda",
  "Chuo",
  "Taito",
  "Sumida",
  "Koto",
  "Bunkyo",
  "Toshima",
  "Kita",
  "Arakawa",
]

export const PRICE_RANGES = [
  { label: "~ ¥500", value: "0-500" },
  { label: "¥500 - ¥1,000", value: "500-1000" },
  { label: "¥1,000 - ¥2,000", value: "1000-2000" },
  { label: "¥2,000 ~", value: "2000-999999" },
]

export const AMENITIES = [
  { id: "wifi", label: "Free WiFi" },
  { id: "outlet", label: "Power Outlet" },
  { id: "pet", label: "Pet Friendly" },
  { id: "smoking", label: "Smoking Area" },
  { id: "parking", label: "Parking" },
  { id: "wheelchair", label: "Wheelchair Access" },
]

export const DISTANCE_OPTIONS = [
  { label: "1km", value: 1000 },
  { label: "2km", value: 2000 },
  { label: "5km", value: 5000 },
  { label: "10km", value: 10000 },
]

export const DISCOUNT_TYPES = [
  { label: "Percentage OFF", value: "percentage" },
  { label: "Fixed Amount OFF", value: "fixed" },
  { label: "Free Service", value: "free" },
]

export const CAFE_STATUSES = [
  { label: "Operating", value: "operating" },
  { label: "Closed", value: "closed" },
]

export const USER_STATUSES = [
  { label: "Active", value: "active" },
  { label: "Locked", value: "locked" },
]

export const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Rating High to Low", value: "rating-high" },
  { label: "Rating Low to High", value: "rating-low" },
  { label: "Name A-Z", value: "name-asc" },
  { label: "Name Z-A", value: "name-desc" },
]

export const ITEMS_PER_PAGE = 10
export const DEFAULT_LOCALE = "ja"
