import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

// github: https://github.com/darbyluv2code/fullstack-react-and-springboot/tree/main/source-code/fullstack-library-app
export const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <HomePage /> */}
      <SearchBooksPage/>
      <Footer />
    </div>
  );
}
