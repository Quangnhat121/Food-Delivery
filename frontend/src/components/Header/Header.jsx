import React from "react";
import "./Header.css";
const Header = () => {
  return (
    //đây là header
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Discover the joy of delicious meals delivered straight to your door.
          From savory snacks to sweet treats, satisfy your cravings with just a
          few clicks and enjoy the flavors you love, anytime, anywhere.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
