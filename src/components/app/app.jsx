import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { getBurgerIngredients } from '../../services/actions/ingredients';
import { resetBurger } from '../../services/actions/burgerConstructor';
import { getCurrentUser } from '../../services/actions/user';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import Homepage from '../../pages/home/home';
import Layout from '../layout/layout';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Ingredient from '../../pages/ingredient/ingredient';
import Profile from '../../pages/profile/profile';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import Modal from '../modals/modal/modal';
import IngredientDetails from '../modals/ingredient-details/ingredient-details';
import ProtectedRouteElement from '../protected-route/protected-route';
import OrderLibrary from '../../pages/order-library/order-library';
import Feed from '../../pages/feed/feed';
import OrderDetails from '../modals/order-details/order-details';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const { logInSuccess } = useSelector(store => ({
    logInSuccess: store.user.logInSuccess,
  }));

  useEffect(() => {
    dispatch(getBurgerIngredients());
    if (logInSuccess) {
      dispatch(getCurrentUser());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleClose = () => {
    navigate(-1);
  };

  window.onbeforeunload = () => {
    dispatch(resetBurger());
  };
  
  return (
    <div className={styles.app}>
        <AppHeader />
        <Routes location={background || location}>
          <Route path="/react-burger" element={<Homepage />}/>
          <Route path="/react-burger/feed" element={<Feed />} />
          <Route element={<Layout />}>
            <Route path="/react-burger/login" element={<Login />} />
            <Route path="/react-burger/register" element={<Register />} />
            <Route path="/react-burger/forgot-password" element={<ForgotPassword />} />
            <Route path="/react-burger/reset-password" element={<ResetPassword />} />
            <Route path="/react-burger/ingredients/:id" element={<Ingredient />} />
            <Route path="/react-burger/feed/:id" element={<OrderDetails />} />
            <Route path="/react-burger/profile/orders/:id" element={<OrderDetails />} />
          </Route>
          <Route path="/react-burger/profile" element={<ProtectedRouteElement element={<Profile />} />} />
          <Route path="/react-burger/profile/orders" element={<ProtectedRouteElement element={<OrderLibrary />} />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        {
          background && (
          <Routes>
            <Route 
              path="ingredients/:id" 
              element={
                <Modal openModal={true} closeModal={handleClose}>
                  <IngredientDetails />
                </Modal>
              }
            />
            <Route
              path="react-burger/feed/:id"
              element={
                <Modal openModal={true} closeModal={handleClose}>
                  <OrderDetails />
                </Modal>
              }
            />
            <Route
              path="react-burger/profile/orders/:id"
              element={
                <Modal openModal={true} closeModal={handleClose}>
                  <OrderDetails />
                </Modal>
              }
            />
          </Routes>
          )
        }
    </div>
  );
}

export default App;
