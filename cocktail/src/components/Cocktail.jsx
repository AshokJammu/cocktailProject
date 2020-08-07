import React from "react";
import "../styles.css";
import axios from "axios";
import DisplayCocktail from "./DisplayCocktail";
import CocktailCarousal from "./CocktailCarousal";
import FooterCocktail from "./FooterCocktail";
import FooterPage from "./FooterPage";
class Cocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pageArr: [],
      search: "",
      typeOfCocktail: "",
      length: 0,
      initPage: 1,
      flagHome: false
    };
  }

  searchBtn = e => {
    // console.log(this.state.search);
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
          this.state.search
      )
      .then(res =>
        this.setState(
          {
            data: res.data.drinks,
            length: res.data.drinks.length,
            pageArr: [],
            flagHome: true
          },
          console.log(res.data, this.state.length)
        )
      )
      .catch(error => alert("search with Correct name"));
  };

  selectCocktail = e => {
    console.log(e.target.value);

    // const { name, value } = e.target;
    // this.setState({ [name]: value });
    // console.log(this.state.typeOfCocktail);
    if (e.target.value === "alcoholic") {
      console.log("nansss");
      axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
        )
        .then(res =>
          this.setState(
            {
              data: res.data.drinks,
              length: res.data.drinks.length,
              pageArr: [],
              flagHome: true
            },
            console.log(res.data, this.state.length)
          )
        );
    } else if (e.target.value === "nonalcholic") {
      console.log("nan");
      axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        )
        .then(res =>
          this.setState(
            {
              data: res.data.drinks,
              length: res.data.drinks.length,
              pageArr: [],
              flagHome: true
            },
            console.log(res.data, this.state.length)
          )
        );
    } else if (e.target.value === "cocktailglass") {
      console.log("nan");
      axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
        )
        .then(res =>
          this.setState(
            {
              data: res.data.drinks,
              length: res.data.drinks.length,
              pageArr: [],
              flagHome: true
            },
            console.log(res.data, this.state.length)
          )
        );
    } else if (e.target.value === "champagneflute") {
      console.log("nan");
      axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute"
        )
        .then(res =>
          this.setState(
            {
              data: res.data.drinks,
              length: res.data.drinks.length,
              pageArr: [],
              flagHome: true
            },
            console.log(res.data, this.state.length)
          )
        );
    } else if (e.target.value === "ordinarydrink") {
      console.log("nan");
      axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
        )
        .then(res =>
          this.setState(
            {
              data: res.data.drinks,
              length: res.data.drinks.length,
              pageArr: [],
              flagHome: true
            },
            console.log(res.data, this.state.length)
          )
        );
    } else if (e.target.value === "cocktail") {
      console.log("nan");
      axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
        )
        .then(res =>
          this.setState(
            {
              data: res.data.drinks,
              length: res.data.drinks.length,
              pageArr: [],
              flagHome: true
            },
            console.log(res.data, this.state.length)
          )
        );
    }
  };

  homeBtn = () => {
    this.setState({
      flagHome: false
    });
  };
  pageBtn = e => {
    console.log(e.target.textContent);
    this.setState({
      initPage: e.target.textContent
    });
  };

  render() {
    // console.log(this.state.length);
    let total = this.state.length;
    // let low = 0,pageObj[c] = [perPage*(c-1),perPage*c]
    let page = Math.ceil(total / 12);
    console.log(page);
    // let perPage= page*()
    let low = 12 * (this.state.initPage - 1);
    let high = 12 * this.state.initPage;
    console.log(low, high, "pagination", this.state.initPage);
    if (this.state.pageArr.length === 0) {
      for (let i = 1; i <= page; i++) {
        this.state.pageArr.push(i);
      }
      console.log(this.state.pageArr);
    }

    return (
      <>
        <nav className="navbar navbar-light bg-dark justify-content-between">
          <button className="btn btn-outline-success" onClick={this.homeBtn}>
            HOME
          </button>
          <button className="btn btn-outline-success">RANDOM</button>
          <select
            className="btn btn-outline-success"
            name="typeCocktail"
            // value={this.state.typeOfCocktail}
            onChange={this.selectCocktail}
          >
            <option value="all">ALL</option>
            <option value="alcoholic">ALCOHOLIC</option>
            <option value="nonalcholic">NON_ALCOHOLIC</option>
          </select>
          <select
            className="btn btn-outline-success"
            name="typeCocktail"
            // value={this.state.typeCockta}
            onChange={this.selectCocktail}
          >
            <option value="chooseglass">CHOOSE_GLASS</option>
            <option value="cocktailglass">COCKTAIL_GLASS</option>
            <option value="champagneflute">CHAMPAGNE_FLUTE</option>
            <option value="ordinarydrink">ORDINARY_DRINK</option>
            <option value="cocktail">COCKTAIL</option>
          </select>

          {/* <select
            className="btn btn-outline-success"
            name="typeCocktail"
            // value={this.state.typeCockail}
            onChange={this.selectCocktail}
          >
            <option value="alcoholic">CHOOSE_CATEGORY</option>
            <option value="nonalcholic">ORDINARY_DRINK</option>
            <option value="nonalcholic">COCKTAIL</option>
          </select> */}
          <div className="form-inline">
            <input
              className="form-control mr-sm-2"
              // type="search"
              placeholder="Cocktail by name"
              value={this.state.search}
              onChange={e =>
                this.setState(
                  {
                    search: e.target.value
                  }
                  //console.log(this.state.search)
                )
              }
              aria-label="Search"
            />
            <button
              onClick={this.searchBtn}
              className="btn btn-outline-success my-2 my-sm-0"
              // type="submit"
            >
              Search
            </button>
          </div>
        </nav>
        {/* {!this.state.data
          
             <CocktailCarousal />
          
        }      */}
        <CocktailCarousal />
        {this.state.flagHome ? (
          <div>
            <div className="row row-cols-1 row-cols-md-4">
              {this.state.data &&
                this.state.data
                  .filter((item, index) => index >= low && index < high)
                  .map(item => (
                    <div key={item.idDrink}>
                      <DisplayCocktail
                        title={item.strDrink}
                        image={item.strDrinkThumb}
                        instruction={item.strInstructions}
                      />
                    </div>
                  ))}
            </div>
            <div>
              {this.state.pageArr.map((item, index) => (
                <button
                  onClick={this.pageBtn}
                  className={
                    this.state.initPage === item ? "btn-primary" : "btn-dark"
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <FooterPage />
        )}
        <FooterCocktail />
      </>
    );
  }
}

export default Cocktail;
