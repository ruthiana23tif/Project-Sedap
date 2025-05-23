import React, { Suspense } from "react";
import "./assets/tailwind.css";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import HeroSection from "./components/guest/HeroSection";
const Loading = React.lazy(() => import("./components/Loading"));
const AddCustomer = React.lazy(() => import("./pages/AddCustomer"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Homepage = React.lazy(() => import("./pages/guest/Homepage"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/AddCustomer" element={<AddCustomer />} />
          <Route path="/user" element={<UserList />} />
        </Route>
        <Route path="/error401" element={<Error401 />} />
        <Route path="/error403" element={<Error403 />} />
        <Route path="/*" element={<Error403 />} />
        <Route path="/error400" element={<Error400 />} />

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
        <Route element={<GuestLayout/>}>
        <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
