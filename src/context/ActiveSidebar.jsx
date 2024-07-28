import { createContext, useState } from "react";

const ActiveSidebarContext = createContext();

const ActiveSidebarContextProvider = ({ children }) => {
  const [activeSidebar, setActiveSidebar] = useState("home");

  return (
    <ActiveSidebarContext.Provider value={{ activeSidebar, setActiveSidebar }}>
      {children}
    </ActiveSidebarContext.Provider>
  );
};

export const ActiveSidebar = ActiveSidebarContext;
export default ActiveSidebarContextProvider;
