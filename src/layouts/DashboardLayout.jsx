/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h2>this Is Dash Board</h2>
      <div className="w-[20%] bg-green-300">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/editProfile">Edit Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
