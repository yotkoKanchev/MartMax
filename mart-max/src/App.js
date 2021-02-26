import './App.css';
import React from "react";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import AppRouter from './components/AppRouter';

import { AuthProvider } from "./components/auth/Auth";
import Contacts from './demo/Contacts';

export default function App() {


  return (
    <AuthProvider >
      <Header />
      <AppRouter />
      <Footer />
    </AuthProvider >

    // <div className='row'>
    //   <div className='col-md-8 offset-md-2'>
    //     <Contacts />
    //   </div>
    // </div>
  );
}
