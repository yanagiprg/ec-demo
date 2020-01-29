import React from "react";
// import { Link } from "react-router-dom";

import './header.scss'

import HeaderButton from "../organisms/header-button/header-button";

const Header = () => (
  <div className='header'>
    <div className='options'>
      {/* <Link>
      </Link> */}
    </div>
    <HeaderButton />
  </div>
)

export default Header