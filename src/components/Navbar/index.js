import React from "react";
import MenuProvider from "../../providers/Menu/MenuProvider";
import NavbarLayout from "./NavbarLayout";

const Navbar = () => {
  return (
    <MenuProvider>
      <NavbarLayout />
    </MenuProvider>
  );
};

export default Navbar;
