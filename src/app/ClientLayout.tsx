"use client";

import { useEffect, useState } from "react";
import Loading from "./Component/ui/loading"; 

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return <>{children}</>;
}
