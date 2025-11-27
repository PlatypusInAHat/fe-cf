import React from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout } from "@/components/layouts/user-layout";
import { OwnerLayout } from "@/components/layouts/owner-layout";
import { AdminLayout } from "@/components/layouts/admin-layout";

import HomePage from "./pages/index";
import AuthLoginPage from "./pages/auth/login";
import AuthRegisterPage from "./pages/auth/register";
import UserDashboardPage from "./pages/user/dashboard";
import UserCafesSearchPage from "./pages/user/cafes/search";
import UserCafesIdPage from "./pages/user/cafes/id";
import UserProfilePage from "./pages/user/profile";
import UserReviewsPage from "./pages/user/reviews";
import UserFavoritesPage from "./pages/user/favorites";
import UserPromotionsPage from "./pages/user/promotions";
import UserNearbyPage from "./pages/user/nearby";
import OwnerDashboardPage from "./pages/owner/dashboard";
import OwnerCafesNewPage from "./pages/owner/cafes/new";
import OwnerCafesIdPage from "./pages/owner/cafes/id";
import OwnerCafesIdPromotionsPage from "./pages/owner/cafes/id/promotions";
import OwnerCafesIdEditPage from "./pages/owner/cafes/id/edit";
import AdminDashboardPage from "./pages/admin/dashboard";
import AdminCustomersPage from "./pages/admin/customers";
import AdminCafesPage from "./pages/admin/cafes";
import AdminCafesIdPage from "./pages/admin/cafes/id";
import AdminCafesIdRegisterPage from "./pages/admin/cafes/id/register";
import AdminOwnersPage from "./pages/admin/owners";
import AdminTermsPage from "./pages/admin/terms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<AuthLoginPage />} />
      <Route path="/auth/register" element={<AuthRegisterPage />} />
      <Route path="/user/dashboard" element={<UserLayout><UserDashboardPage /></UserLayout>} />
      <Route path="/user/cafes/search" element={<UserLayout><UserCafesSearchPage /></UserLayout>} />
      <Route path="/user/cafes/:id" element={<UserLayout><UserCafesIdPage /></UserLayout>} />
      <Route path="/user/profile" element={<UserLayout><UserProfilePage /></UserLayout>} />
      <Route path="/user/reviews" element={<UserLayout><UserReviewsPage /></UserLayout>} />
      <Route path="/user/favorites" element={<UserLayout><UserFavoritesPage /></UserLayout>} />
      <Route path="/user/promotions" element={<UserLayout><UserPromotionsPage /></UserLayout>} />
      <Route path="/user/nearby" element={<UserLayout><UserNearbyPage /></UserLayout>} />
      <Route path="/owner/dashboard" element={<OwnerLayout><OwnerDashboardPage /></OwnerLayout>} />
      <Route path="/owner/cafes/new" element={<OwnerLayout><OwnerCafesNewPage /></OwnerLayout>} />
      <Route path="/owner/cafes/:id" element={<OwnerLayout><OwnerCafesIdPage /></OwnerLayout>} />
      <Route path="/owner/cafes/:id/promotions" element={<OwnerLayout><OwnerCafesIdPromotionsPage /></OwnerLayout>} />
      <Route path="/owner/cafes/:id/edit" element={<OwnerLayout><OwnerCafesIdEditPage /></OwnerLayout>} />
      <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
      <Route path="/admin/customers" element={<AdminLayout><AdminCustomersPage /></AdminLayout>} />
      <Route path="/admin/cafes" element={<AdminLayout><AdminCafesPage /></AdminLayout>} />
      <Route path="/admin/cafes/:id" element={<AdminLayout><AdminCafesIdPage /></AdminLayout>} />
      <Route path="/admin/cafes/:id/register" element={<AdminLayout><AdminCafesIdRegisterPage /></AdminLayout>} />
      <Route path="/admin/owners" element={<AdminLayout><AdminOwnersPage /></AdminLayout>} />
      <Route path="/admin/terms" element={<AdminLayout><AdminTermsPage /></AdminLayout>} />
    </Routes>
  );
}

export default App;
