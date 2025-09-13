"use client";
import React from "react";
type Tab = { key:string; label:string };
export default function Tabs({tabs, value, onChange}:{tabs:Tab[]; value:string; onChange:(k:string)=>void;}){
  return (
    <div className="flex gap-2">
      {tabs.map(t=>(
        <button key={t.key}
          onClick={()=>onChange(t.key)}
          className={`px-4 py-2 rounded-xl text-sm border ${value===t.key ? "bg-[var(--p)] text-white border-transparent":"bg-white border-slate-200"}`}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

