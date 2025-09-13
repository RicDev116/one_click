import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talento Latam – One Click",
  description: "Tu acompañante de carrera con IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-[var(--bg)] text-[var(--text)]">
        <div className="max-w-[1100px] mx-auto px-4 py-6">{children}</div>
      </body>
    </html>
  );
}
