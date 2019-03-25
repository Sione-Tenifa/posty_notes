import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu inverted>
    <Menu.Item>
      <NavLink exact to="/">
        Home
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink exact to="/notes">
        Notes
      </NavLink>
    </Menu.Item>
  </Menu>
);

export default Navbar;
