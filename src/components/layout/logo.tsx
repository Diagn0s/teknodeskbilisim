import { Cable } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Cable className="size-5" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          Tekno Desk
        </span>
        <span className="text-[11px] font-medium tracking-widest text-primary uppercase">
          Bilişim
        </span>
      </span>
    </span>
  );
}
