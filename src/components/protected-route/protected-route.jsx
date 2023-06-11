import {  useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRouteElement({ element }) {
  const { user } = useSelector(store => ({
    user: store.user.user,
  }));

  const location = useLocation();
  
  return user ? element : <Navigate to='/react-burger/login' state={{ from: location }} />;
}