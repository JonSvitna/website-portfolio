"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ConstructionProgressContextValue = {
  progress: number;
  setProgress: (value: number) => void;
  progressRef: React.MutableRefObject<number>;
};

const ConstructionProgressContext =
  createContext<ConstructionProgressContextValue | null>(null);

export function ConstructionProgressProvider({ children }: { children: ReactNode }) {
  const progressRef = useRef(0.12);
  const [progress, setProgressState] = useState(0.12);

  const setProgress = useCallback((value: number) => {
    const clamped = Math.min(1, Math.max(0, value));
    progressRef.current = clamped;
    setProgressState(clamped);
  }, []);

  const value = useMemo(
    () => ({ progress, setProgress, progressRef }),
    [progress, setProgress],
  );

  return (
    <ConstructionProgressContext.Provider value={value}>
      {children}
    </ConstructionProgressContext.Provider>
  );
}

export function useConstructionProgress() {
  const ctx = useContext(ConstructionProgressContext);
  if (!ctx) {
    throw new Error(
      "useConstructionProgress must be used within ConstructionProgressProvider",
    );
  }
  return ctx;
}
