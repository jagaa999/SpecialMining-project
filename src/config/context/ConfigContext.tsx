"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { useDomain } from "./DomainContext";

const ConfigContext = createContext<any>(null);

export const useConfig = () => useContext(ConfigContext);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const { domain } = useDomain();

  const [localConfig, updateLocalConfig] = useState({
    username: "",
    theme: "light",
    isLoggedIn: false,
  });

  const [storedState, setStoredState] = useLocalStorage(
    `${domain}-config`,
    localConfig
  );

  useEffect(() => {
    if (storedState) {
      updateLocalConfig(storedState);
    }
  }, [storedState]);

  const setLocalConfig = (newState: any) => {
    updateLocalConfig(newState);
    setStoredState(newState);
  };

  return (
    <ConfigContext.Provider value={{ localConfig, setLocalConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}
