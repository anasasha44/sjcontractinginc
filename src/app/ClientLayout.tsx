"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./Component/ui/SplashScreen";

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
    <>
      <SplashScreen isVisible={loading} />
      {!loading && children}
    </>
  );
}