import React from "react";
import SocialLinks from "../social-links/social-links";
import Navigation from "../navigation/navigation";
import Profile from "../profile/profile";
import cx from "classnames";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu () {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  render() {
    const leftHeaderClasses = cx('masthead', {'toggle-for-mobile': this.state.isMenuOpen })
    return (
      <React.Fragment>
        <div className="header-main-mobile">
          <span onClick={() => this.toggleMenu()}>
            {!this.state.isMenuOpen && <i className="fas fa-bars"> </i>}
            {this.state.isMenuOpen && <i class="fas fa-times"></i>}
          </span>
          <span>Trapti Rahangdale</span>
        </div>
        <header className={leftHeaderClasses}>
          <Profile />
          <Navigation />
          <SocialLinks />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
