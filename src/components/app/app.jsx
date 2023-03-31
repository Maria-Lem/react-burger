import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { getBurgerIngredients } from '../../services/actions/ingredients';

import AppHeader from '../app-header/app-header';
// import BurgerConstructor from '../burger-constructor/burger-constructor';
// import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import styles from './app.module.css';
import Homepage from '../../pages/home/home';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Ingredient from '../../pages/ingredient/ingredient';
import Profile from '../../pages/profile/profile';
import Layout from '../layout/layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className={styles.app}>
      <Router>
        <AppHeader />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/ingredients/:id" element={<Ingredient />} />
          </Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      {/* <Ingredient/> */}
      {/* <ResetPassword /> */}
      {/* <ForgotPassword></ForgotPassword> */}
      {/* <Login></Login> */}
        {/* <Register></Register> */}
      {/* <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main> */}
    </div>
  );
}

export default App;
