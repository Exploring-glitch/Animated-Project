import { createContext, useState } from 'react';
export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavContext.Provider value={[ navOpen, setNavOpen ]}> {/*we are passing these two as values*/}
      {children}
    </NavContext.Provider>
  );
};
