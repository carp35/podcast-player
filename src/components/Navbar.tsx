import React from 'react';
//import '../css/NavBar.css';

interface UserProfile {
  username: string;
  avatar: string;
}

interface NavbarData {
  menuButton: string;
  logoImage: string;
}

interface NavbarProps {
  profile: UserProfile;
  navbarData: NavbarData;
}

const Navbar: React.FC<NavbarProps> = ({ profile, navbarData }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={navbarData.menuButton} alt="Menu" className="menu-button" />
        <img src={navbarData.logoImage} alt="Logo" className="logo-image" />
      </div>

      <div className="navbar-center">
        <input type="text" placeholder="🔍 Search" className="search-input" />
      </div>

      <div className="navbar-right">
        <img src={profile.avatar} alt={profile.username} className="user-avatar" />
      </div>
    </header>
  );
};

export default Navbar;

