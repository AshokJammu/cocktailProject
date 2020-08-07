import React from "react";
import "../styles.css";
// import FooterPage from "./FooterPage";
function FooterCocktail(props) {
  return (
    // <nav className="navbar navbar-light bg-dark justify-content-between">
    <>
      <footer className="page-footer font-small bg-secondary pt-4 mt-4">
        <div className="container text-center text-md-left">
          <div class="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">COCKTAIL</h5>
              <p>
                We have hundreds and hundreds of delicious cocktail recipes from
                expert bartenders around the world. No matter if you're looking
                for a classic cocktail, a punch for a party or an original
                concoction, we have a cocktail recipe for every taste and
                occasion, just a shake, stir or pour away.
              </p>
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-3"> */}

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!"> Recipes</a>
                </li>
                <li>
                  <a href="#!">Spirits</a>
                </li>
                <li>
                  <a href="#!">Beer & Wine</a>
                </li>
                <li>
                  <a href="#!">The Bsics</a>
                </li>
                <li>
                  <a href="#!">Behind the Bar</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Terms of Use</a>
                </li>
                <li>
                  <a href="#!">Editorial</a>
                </li>
                <li>
                  <a href="#!">Cookies</a>
                </li>
                <li>
                  <a href="#!">Contact</a>
                </li>
              </ul>
            </div>

            {/* <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Advertise</a>
                </li>
                <li>
                  <a href="#!">Careers</a>
                </li>
                <li>
                  <a href="#!">Privacy</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbotstrap.com/bootstrap-tutorial/">
            {" "}
            ashokkumarnaidu999@gmail.com
          </a>
        </div>

        {/* <div {style="background-color: #6351ce;"}> */}
      </footer>
      {/* // </nav> */}
    </>
  );
}

export default FooterCocktail;
