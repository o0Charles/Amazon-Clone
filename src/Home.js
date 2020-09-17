import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
  	    <div className="home__warning">
        <alert>ATTENTION!! THIS PAGE IS AN AMAZON CLONE MADE ONLY FOR PERSONAL EDUCATIONAL PURPOSES
        </alert>
        </div>

        <div className="home__row">
          <Product
            id={1001}
            title="Los pilares de la tierra"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91FU2wSBo5L.jpg"
            rating={5}
          />
          <Product
            id={1002}
            title="Nintendo Switch Lite - Yellow - Standard Edition"
            price={270.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71q4BBqaNvL._AC_SX569_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={1003}
            title="Music Alley MA-34-PNK - Acoustic Guitar Package, Natural"
            image="https://images-na.ssl-images-amazon.com/images/I/81tQhEEtiEL._AC_SL1500_.jpg"
            price={49.99}
            rating={4}
          />
          <Product
            id={1004}
            title="Piano Yamaha Disklavier Enspire DGB1"
            price={230000.0}
            image="data:image/jpeg;base64,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"
            rating={5}
          />
          <Product
            id={1005}
            title="La Sevillana DLX-LSV44 Violín, 81 x 25 x 14 cm"
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71RaJuNWSdL._AC_SY879_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={1006}
            title="Apple iPad Pro (12,9, Wi-Fi, 256GB) - Gray (4th Gen)"
            price={1099.00}
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg"
            rating={5}
          />
        </div>
        <div class="navFooter">
          <p>September</p>
          <p>2020</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
