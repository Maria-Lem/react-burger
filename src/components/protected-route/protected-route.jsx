import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../loader/loader";
import { getCurrentUser } from "../../services/actions/user";

export default function ProtectedRouteElement({ element }) {
  const dispatch = useDispatch();
  const { user, isAuthenticated, accessToken, verifyAuthorizationSuccess } = useSelector(store => ({
    user: store.user.user,
    isAuthenticated: store.user.user,
    accessToken: store.user.accessToken,
    verifyAuthorizationSuccess: store.user.verifyAuthorizationSuccess,
  }));
  console.log('isAuthenticated: ', isAuthenticated);

  const [isUserLoaded, setUserLoaded] = useState(false);

  // const init = () => {
  //   if (accessToken) {
  //     dispatch(getCurrentUser(accessToken));
  //     setUserLoaded(true);
  //   }
  // };
  // console.log('user: ', user);

  // useEffect(() => {
  //   init();
  // }, []);

  if (!isAuthenticated) {
    return (
    <Loader />
    );
  }
  
  return user && isAuthenticated ? element : <Navigate to="/login" replace />;
}