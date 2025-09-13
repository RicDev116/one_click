"use client";
import React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"secondary" };
export default function Button({variant="primary", className="", ...props}:Props){
  const base = "rounded-2xl px-5 py-3 text-lg font-medium transition";
  const styles = variant==="primary"
    ? "bg-[var(--p)] text-white hover:opacity-90"
    : "bg-white text-[var(--text)] border border-slate-200 hover:bg-slate-50";
  return <button {...props} className={`${base} ${styles} ${className}`} />;
}
