"use client";
import Button from "../components/Button";
export default function Dashboard(){
  return (
    <main className="max-w-3xl">
      <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-slate-600">Próxima sesión: Mentoría con Ana — Vie 10:30</p>
        <div className="mt-3">
          <Button variant="secondary" onClick={()=>history.back()}>Continuar plan</Button>
        </div>
      </div>
    </main>
  );
}
