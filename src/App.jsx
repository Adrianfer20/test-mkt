import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Hooks
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import HomePages from './pages/HomePages';
import LoginPages from './pages/LoginPages';
import NotFoundPage from './pages/NotFoundPage';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Styles
import './output.css';
import RegisterPages from './pages/RegisterPages';
import UpdateUserPages from './pages/UpdateUserPages';

const styles = {
  container: 'h-screen flex flex-col md:flex-row justify-between bg-slate-200 overflow-hidden',
  main: 'w-full min-h-screen flex flex-col justify-between overflow-y-auto'
}

function App() {

  return (
    <Router>
      <div className={styles.container}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className={styles.main}>
          <Routes>
            <Route path='/login' element={<LoginPages />} />
            <Route path='/registro' element={<RegisterPages/>} />
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<HomePages />} />
              <Route path='/update-user' element={<UpdateUserPages />} />
            </Route>
            <Route path='/*' element={<NotFoundPage />} /> {/* 404 Route */}
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;

