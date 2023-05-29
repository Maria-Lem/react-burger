import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../loader/loader";
import { getCurrentUser } from "../../services/actions/user";

export default function ProtectedRouteElement({ element }) {
  const { user, isAuthenticated, verifyAuthorizationSuccess } = useSelector(store => ({
    user: store.user.user,
    isAuthenticated: store.user.user,
    verifyAuthorizationSuccess: store.user.verifyAuthorizationSuccess,
  }));

  // if (!isAuthenticated) {
  //   return (
  //   <Loader />
  //   );
  // }
  
  return user ? element : <Navigate to="/login" replace />;
}