import React from "react";
import "../styles.css";

function CocktailCarousal(props) {
  // let { title, image, instruction } = props;
  return (
    <div>
      <div className="container">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner view overlay z-depth-1-half">
            <div className="carousel-item active ht">
              <img
                src="cocktails-promo.jpg"
                className="d-block w-100 img-fluid "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="cocktailsubs-internal-header.jpg"
                className="d-block w-80 "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="sp_img04_sake_blossom.jpg"
                className="d-block w-80"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container footer">
        <div className="text-center">
          <i className="fas fa-chevron-circle-left" />
          <i className="fab fa-facebook text-secondary mx-2" />
          <i className="fab fa-twitter text-secondary mx-2" />
          <i className="fab fa-instagram text-secondary mx-2" />
          <i className="fas fa-chevron-circle-right" />
        </div>
      </div>
    </div>
  );
}

export default CocktailCarousal;
