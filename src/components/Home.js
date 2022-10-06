import React from "react";
import Header from "./Header";
import "./Home.css";
import Products from "./Products";


function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home banner"
        />

        {/* Product id, title, price, rating, image */}
        <div className="home_row">
          <Products
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          />
          <Products
            id="12321351"
            title="SAMSUNG Galaxy Tab A7 Lite 8.7, 32GB Android Tablet w/Compact, Slim Design, Sturdy Metal Frame, Long Lasting Battery, Gray"
            price={129.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/819hAP4xoGS._AC_UL320_.jpg"
          />
        </div>
        <div className="home_row">
          <Products
            id="12321331"
            title="2022 New HP 15 Laptop, 15.6, HD LED Display, 16GB RAM, 1TB SSD"
            price={499.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71rmymgVWVL._AC_UL320_.jpg"
          />
          <Products
            id="12322341"
            title="DecoBros Kitchen Counter and Cabinet Pan Organizer Shelf Rack, Bronze"
            price={19.87}
            rating={4}
            image="https://m.media-amazon.com/images/I/51W2oPrwa7L._AC_SY200_.jpg"
          />
          <Products
            id="12321444"
            title="Parker Baby Diaper Caddy - Nursery Storage Bin and Car Organizer for Diapers and Baby Wipes - Grey"
            price={19.85}
            rating={3}
            image="https://m.media-amazon.com/images/I/91JbF0J+5wL._AC_SY200_.jpg"
          />
        </div>
        <div className="home_row">
        <Products
            id="3223134"
            title="TCL 32-inch 3-Series 720p Roku Smart TV - 32S335, 2021 Model"
            price={148.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/61--xSgNcQL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
