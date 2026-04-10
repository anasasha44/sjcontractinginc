"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ImSpinner2 } from "react-icons/im";

type LoaderContextType = {
  startLoading: () => void;
  stopLoading: () => void;
};

const LoaderContext = createContext<LoaderContextType | null>(null);

export function PageLoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setLoading(false);
  }, []);

  const value = useMemo(
    () => ({ startLoading, stopLoading }),
    [startLoading, stopLoading]
  );

  return (
    <LoaderContext.Provider value={value}>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <ImSpinner2 className="animate-spin text-primary" size={60} />
        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
}

export function usePageLoader() {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("usePageLoader must be used within PageLoaderProvider");
  }

  return context;
}