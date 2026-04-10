"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./Component/ui/SplashScreen";
import { PageLoaderProvider } from "./Component/ui/PageLoader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLoaderProvider>
      <SplashScreen isVisible={loading} />
      {!loading && children}
    </PageLoaderProvider>
  );
}