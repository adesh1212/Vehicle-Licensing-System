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

function App() {
  return (
    <div>
      <StickyNavbar />
      <Routes>
        {/* <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/add-owner" element={<OwnerManagement />} />
        <Route path="/add-license" element={<LicenseManagement />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register-vehicle" element={<VehicleRegistration />} />
        <Route path="/owners" element={<OwnerList />} />
        <Route path="/licenses" element={<LicenseList />} />
      </Routes>
    </div>
  );
}

export default App
