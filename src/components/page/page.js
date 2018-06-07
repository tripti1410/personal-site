import React from 'react';
import Header from "../header/header";
import "./page.css";

const Page = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Page;