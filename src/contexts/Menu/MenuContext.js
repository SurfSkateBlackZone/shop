import { createContext } from "react";

const MenuContext = createContext({
  isActive: false,
  openMenu: () => {},
});

MenuContext.displayName = "MenuContext";

export default MenuContext;
