import './App.css';
import React from "react";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import AppRouter from './components/AppRouter';
import Contacts from './demo/Contacts';

export default function App() {
  return (
    // <div>
    //   <Header />
    //   <AppRouter />
    //   <Footer />
    // </div >

    <div className='row'>
      <div className='col-md-8 offset-md-2'>
        <Contacts />
      </div>
    </div>
  );
}
