import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FlightBooking from "../pages/FlightBooking";
import CityList from "../pages/CityList";
import HotelList from "../pages/HotelList";
import UserCenter from "../pages/UserCenter";
import HotelDetail from "../pages/HotelDetail";
import CityDetail from "../pages/CityDetails";
import Login from "../pages/Login";
import OrderManagement from "../pages/OrderManagement";
import TravelPlan from "../pages/TravelPlan";
import FavoriteCenter from "../pages/FavoriteCenter";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<FlightBooking />} />
      <Route path="/city" element={<CityList />} />
      <Route path="/citydetail" element={<CityDetail />} />
      <Route path="/hote" element={<HotelList />} />
      <Route path="/hotel/:id" element={<HotelDetail />} />
      <Route path="/user" element={<UserCenter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order" element={<OrderManagement />} />
      <Route path="/travel" element={<TravelPlan />} />
      <Route path="/favorites" element={<FavoriteCenter />} />
    </Routes>
  );
};

export default AppRoutes;
