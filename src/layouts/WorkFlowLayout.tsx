import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ThemeModeToggle";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";

const WorkFlowLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Outlet />

      <Separator />
      <footer className="flex items-center justify-between p-2">
        <Logo iconSize={16} fontSize="text-xl" />
        <ModeToggle/>
      </footer>
    </div>
  );
};

export default WorkFlowLayout;
