import { colors } from "@/utils/gradient";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Context = {
  gradientTheme: string[];
  setGradientTheme: Dispatch<SetStateAction<string[]>>;
};

// @Desc: Create Context for app-wide state handling:
const AppContext = createContext<Context>({
  gradientTheme: colors.slice(0, 2),
  setGradientTheme: () => null,
});

// @Desc: For _app.js to wrap around all child components to enable access to React Context states:
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const appState = provideAppState();
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

// @Desc: To be use in components to access app-wide context
export function useAppContext(): Context {
  return useContext(AppContext);
}

// @Desc: Overall Function to handle all states required for context and return it back to AppWrapper
function provideAppState(): Context {
  const [gradientTheme, setGradientTheme] = useState(colors.slice(0, 2));

  return {
    gradientTheme,
    setGradientTheme,
  };
}
