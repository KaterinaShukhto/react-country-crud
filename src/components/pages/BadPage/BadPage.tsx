import React from "react";
import { Navigate } from "react-router-dom";

const BadPage: React.FC = () => {
  return <Navigate to="/" />;
};
export default BadPage;
