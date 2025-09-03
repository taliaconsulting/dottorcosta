import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getContactInfo } from "@/lib/sanity.client";

export default async function ServicesLayout({ children }: { children: React.ReactNode }) {
  const contact = await getContactInfo();
  return (
    <div className="relative bg-slate-200 flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter contact={contact} />
    </div>
  );
}
