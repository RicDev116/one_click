import React from "react";
export default function Chip({children}:{children:React.ReactNode}){
  return <span className="inline-block rounded-full bg-indigo-50 text-indigo-700 text-xs px-3 py-1">{children}</span>;
}
