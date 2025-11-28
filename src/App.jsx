import React from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout } from "@/components/layouts/user-layout";
import { OwnerLayout } from "@/components/layouts/owner-layout";
import { AdminLayout } from "@/components/layouts/admin-layout";

import HomePage from "./pages/index";
import AuthLoginPage from "./pages/auth/login";
import AuthRegisterPage from "./pages/auth/register";
import AuthForgotPasswordPage from "./pages/auth/forgot-password";
import AuthVerifyOTPPage from "./pages/auth/verify-otp";
import AuthResetPasswordPage from "./pages/auth/reset-password";

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
      {/* Public pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<AuthLoginPage />} />
      <Route path="/auth/register" element={<AuthRegisterPage />} />
      <Route path="/auth/forgot-password" element={<AuthForgotPasswordPage />} />
      <Route path="/auth/verify-otp" element={<AuthVerifyOTPPage />} />
      <Route path="/auth/reset-password" element={<AuthResetPasswordPage />} />

      {/* USER */}
      <Route element={<UserLayout />}>
        <Route path="/user/dashboard" element={<UserDashboardPage />} />
        <Route path="/user/cafes/search" element={<UserCafesSearchPage />} />
        <Route path="/user/cafes/:id" element={<UserCafesIdPage />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
        <Route path="/user/reviews" element={<UserReviewsPage />} />
        <Route path="/user/favorites" element={<UserFavoritesPage />} />
        <Route path="/user/promotions" element={<UserPromotionsPage />} />
        <Route path="/user/nearby" element={<UserNearbyPage />} />
      </Route>

      {/* OWNER */}
      <Route element={<OwnerLayout />}>
        <Route path="/owner/dashboard" element={<OwnerDashboardPage />} />
        <Route path="/owner/cafes/new" element={<OwnerCafesNewPage />} />
        <Route path="/owner/cafes/:id" element={<OwnerCafesIdPage />} />
        <Route path="/owner/cafes/:id/promotions" element={<OwnerCafesIdPromotionsPage />} />
        <Route path="/owner/cafes/:id/edit" element={<OwnerCafesIdEditPage />} />
      </Route>

      {/* ADMIN */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/customers" element={<AdminCustomersPage />} />
        <Route path="/admin/cafes" element={<AdminCafesPage />} />
        <Route path="/admin/cafes/:id" element={<AdminCafesIdPage />} />
        <Route path="/admin/cafes/:id/register" element={<AdminCafesIdRegisterPage />} />
        <Route path="/admin/owners" element={<AdminOwnersPage />} />
        <Route path="/admin/terms" element={<AdminTermsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
