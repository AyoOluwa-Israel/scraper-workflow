import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import DesktopSidebar from "@/components/Sidebar";
import { ModeToggle } from "@/components/ThemeModeToggle";

import { Separator } from "@/components/ui/separator";
import { RedirectToSignIn, SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { isSignedIn } = useUser();


  if (!isSignedIn) {
    return <RedirectToSignIn signInFallbackRedirectUrl={"/auth/signin"} />;
  }



  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadcrumbHeader />
          <div className="gap-1 flex items-center">
            <ModeToggle />

            <SignedIn>
              <UserButton/>
            </SignedIn>
          </div>
        </header>
        <Separator />

        <div className="overflow-auto">
          <div className="flex-1 container p-4 text-accent-foreground">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
