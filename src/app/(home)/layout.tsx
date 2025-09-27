import { SiteFooter } from "@/components/global/site-footer";
import { SiteHeader } from "@/components/global/site-header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-svh flex-col bg-background px-4">
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
}
