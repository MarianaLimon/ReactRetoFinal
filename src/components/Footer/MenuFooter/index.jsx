import React from "react";

import "./styles.css";

class MenuFooter extends React.Component {
  render() {
    return (
      <main>
        <ul className="d-flex justify-content-center">
          <li>Home</li>
          <li>Listings</li>
          <li>Podcast</li>
          <li>Videos</li>
          <li>Tags</li>
          <li>Code of Conduct</li>
          <li>FAQ</li>
          <li>DEV Shop</li>
          <li>Sponsors</li>
        </ul>
        <ul className="d-flex justify-content-center">
          <li>About</li>
          <li>Privacy Policy</li>
          <li>Terms of use</li>
          <li>Contact</li>
          <li>
            <b>Sign In/Up</b>
          </li>
        </ul>
      </main>
    );
  }
}

export default MenuFooter;
