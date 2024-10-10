import { useState } from 'react'
import {  Routes, Route } from "react-router-dom";
import VehicleRegistration from './components/vehicleReg';
import "./index.css";
import OwnerManagement from './components/ownerMgmt';
import LicenseManagement from './components/licenseMgmt';
import { StickyNavbar } from './components/navbar';
import OwnerList from './components/owners';
import LicenseList from './components/licenses';
import HomePage from './components/home';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const stripePromise = loadStripe(
  "pk_test_51Q8NoCLW3AQlV0sEdJMlPcUNyQod3de8p1iLzkb8q0Yr4yzs3aK6K5I0qtQgOjnRW8ysWKv7L2LkhUZBSsHFLSGF00L008DyYn"
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <div>
        <StickyNavbar />
        <ToastContainer />
        <Routes>
          <Route path="/add-owner" element={<OwnerManagement />} />
          <Route path="/add-license" element={<LicenseManagement />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/register-vehicle" element={<VehicleRegistration />} />
          <Route path="/owners" element={<OwnerList />} />
          <Route path="/licenses" element={<LicenseList />} />
        </Routes>
      </div>
    </Elements>
  );
}

export default App
