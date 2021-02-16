import './App.css';
import React from "react";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import AppRouter from './components/AppRouter';

export default function App() {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div >
  );
}
