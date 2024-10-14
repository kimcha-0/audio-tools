import SideNav from "@/app/ui/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-4">
            <div className="col-span-1 row-span-4">
                <SideNav />
            </div>
            <div className="col-span-3 row-span-4">
                {children}               
            </div>
        </div>

    );
}
