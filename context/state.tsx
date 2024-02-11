import { originalColors } from "@/utils/gradient";
import { PAGE_TRANSITION_DURATION } from "@/utils/motion";
import { NextRouter, useRouter } from "next/router";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Context = {
  router: NextRouter | null;
  enroute: (path: string, options: {}) => void;
  gradientTheme: string[];
  setGradientTheme: Dispatch<SetStateAction<string[]>>;
  isEntryComplete: boolean;
  completeEntry: () => void;
};

// @Desc: Create Context for app-wide state handling:
const AppContext = createContext<Context>({
  router: null,
  enroute: (path: string, options: {}) => null,
  gradientTheme: originalColors,
  setGradientTheme: () => null,
  isEntryComplete: false,
  completeEntry: () => null,
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
  const router = useRouter();
  const [isRouting, setIsRouting] = useState(false);
  const [gradientTheme, setGradientTheme] = useState(originalColors);
  const [isEntryComplete, setIsEntryComplete] = useState(false);

  const completeEntry: () => void = () => {
    setIsEntryComplete(true);
  };

  function enroute(path: string, options: {}) {
    if (!isRouting) {
      setIsRouting(true);
      router.push(path, path, options);
      setTimeout(
        () => {
          setIsRouting(false);
        },
        PAGE_TRANSITION_DURATION * 1000 * 1.5,
      ); // a little bit of buffer to prevent changing route too fast
    }
  }

  return {
    router,
    enroute,
    gradientTheme,
    setGradientTheme,
    isEntryComplete,
    completeEntry,
  };
}
