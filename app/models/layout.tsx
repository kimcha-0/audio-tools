import SideNav from "@/app/ui/sidenav";
import { TopNav } from "@/app/ui/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-5">
      <div className="p-5 col-span-3 row-span-3">{children}</div>
    </div>
  );
}
