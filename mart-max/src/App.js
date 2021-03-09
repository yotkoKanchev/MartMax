import './App.css';
import React from "react";

import { AuthProvider } from "./components/auth/Auth";
import AppRouter from './components/AppRouter';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

export default function App() {

  return (
    <AuthProvider >
      <Header />
      <AppRouter />
      <Footer />
    </AuthProvider >
  );
}
