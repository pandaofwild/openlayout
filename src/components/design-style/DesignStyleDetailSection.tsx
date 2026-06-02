import type { ReactNode } from "react";

export function DesignStyleDetailSection({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section className="border border-[#1E1E1E]/18 bg-[#F0EEE8] p-5">
      <h2 className="raw-label text-[#DB4A2B]">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-[#1E1E1E]/70">{children}</div>
    </section>
  );
}
