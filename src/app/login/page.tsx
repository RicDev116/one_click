"use client";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function Login(){
  const r = useRouter();
  return (
    <main className="min-h-[70dvh] grid place-items-center">
      <div className="max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">Inicia con Google</h2>
        <p className="text-slate-600 text-sm mt-1">Solo demo, no guardamos datos reales.</p>
        <div className="mt-6">
          <Button onClick={()=>r.push("/onboarding")}>Continuar con Google</Button>
        </div>
      </div>
    </main>
  );
}
