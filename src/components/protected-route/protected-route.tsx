import { FC, ReactElement } from 'react';
import {  useSelector } from "../../services/types/hooks";
import { Navigate, useLocation } from "react-router-dom";

interface IProps {
  element: ReactElement;
}

const ProtectedRouteElement: FC<IProps> = ({ element }) => {
  const { user } = useSelector(store => ({
    user: store.user.user,
  }));

  const location = useLocation();
  
  return user ? element : <Navigate to='/login' state={{ from: location }} />;
};

export default ProtectedRouteElement;