import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();

  const login = () => {
    if (user) {
      signOut(auth);
    }
  };

  return (
    <>
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt=""
          />
        </Link>

        {/* the search bar*/}
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        {/* the nav links*/}
        <div className="header__nav">
          <Link className="header__link" to={!user && "/login"}>
            <div onClick={login} className="header__option">
              <span className="header__optionLineOne">
                Hello, {user?.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign out" : "Sign in"}
              </span>
            </div>
          </Link>

          <Link className="header__link" to="/">
            <div className="header__option">
              <span className="header__optionLineOne">Return</span>
              <span className="header__optionLineTwo">& Order</span>
            </div>
          </Link>

          <Link className="header__link" to="/">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__optionBasket">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
