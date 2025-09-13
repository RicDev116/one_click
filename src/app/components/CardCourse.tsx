import React from "react";
import Button from "./Button";
type Course={ title:string; hours:number; provider:string; };
export default function CardCourse({c}:{c:Course}){
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-baseline justify-between">
        <h3 className="font-semibold">{c.title}</h3>
        <span className="text-xs text-[var(--muted)]">{c.hours} h · {c.provider}</span>
      </div>
      <div className="mt-3 flex gap-2">
        <Button variant="secondary">Agregar a mi plan</Button>
        <Button variant="secondary" onClick={()=>window.open("https://google.com","_blank")}>Abrir recurso</Button>
      </div>
    </div>
  );
}
