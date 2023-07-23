import React from 'react';
import PersonalDetails from '../Components/PersonalDetails';
import ProductDetails from '../Components/ProductDetails';
import './HomePage.css'; // Import the custom CSS for HomePage

const HomePage = () => {
  return (
    <div className="container mt-5">
      
      <div className="heading">Confirm and pay</div>
      <div className="row">
      
        {/* Left side: 2 of 3 columns (Order 1 on small screens) */}
        <div className="col-md-8 with-vertical-line order-2 order-md-1">
         <PersonalDetails></PersonalDetails>
        </div>
        {/* Right side: 1 of 3 columns (Order 2 on small screens) */}
        <div className="col-md-4 order-1 order-md-2">
         <ProductDetails></ProductDetails>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
