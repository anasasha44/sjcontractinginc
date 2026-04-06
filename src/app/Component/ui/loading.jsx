"use client";
import { ImSpinner2 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <ImSpinner2 className="animate-spin text-primary" size={60} />
    </div>
  );
}
