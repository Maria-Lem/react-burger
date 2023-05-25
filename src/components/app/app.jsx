import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { getBurgerIngredients } from '../../services/actions/ingredients';

import AppHeader from '../app-header/app-header';

import styles from './app.module.css';
import Homepage from '../../pages/home/home';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Ingredient from '../../pages/ingredient/ingredient';
import Profile from '../../pages/profile/profile';
import Layout from '../layout/layout';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import Modal from '../modals/modal/modal';
import IngredientDetails from '../modals/ingredient-details/ingredient-details';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getBurgerIngredients());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    navigate(-1);
  };
  
  return (
    <div className={styles.app}>
        <AppHeader />
        <Routes location={background || location}>
          <Route path="/" element={<Homepage />}/>
            <Route element={<Layout />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/ingredients/:id" element={<Ingredient />} />
            </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
          {
            background &&
            (
            <Routes>
            <Route 
              path="ingredients/:id" 
              element={
                <Modal openModal={true} closeModal={handleClose}>
                  <IngredientDetails />
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
