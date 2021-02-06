import React, { useState } from "react";
import MenuContext from "contexts/Menu/MenuContext";

const MenuProvider = ({children}) => {
  const [isActive, setIsActive] = useState(false);

  const openMenu = () => {
    setIsActive(!isActive);
  }

  return (
    <MenuContext.Provider
      value={{
        isActive,
        openMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;