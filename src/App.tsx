import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './styles/index.scss';

import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>главная</Link>
      <Link to={'/about'}>about</Link>
      <button onClick={toggleTheme}>Change Theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />}></Route>
          <Route path={'/about'} element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
