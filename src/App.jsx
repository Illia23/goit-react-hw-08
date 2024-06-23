import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { lazy, Suspense, useEffect } from 'react';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

import Loader from './components/Loader/Loader';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

import { useDispatch, useSelector } from 'react-redux';

const App = () => {
const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch()
  
useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<Loader />) : (
    <Layout>
      <Suspense fallback={<Loader />}>
     <Routes>
      <Route path='/' element={<HomePage />} />
        <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegistrationPage />} redirectTo="/" />
            }
          />
        <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
            }
        />
        <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
        </Suspense>
    </Layout>
   
      
  );
};

export default App;
