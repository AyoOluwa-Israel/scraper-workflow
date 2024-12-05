import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = ({
  fontSize = "text-2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) => {
  return (
    <div>
      <Link
        to={"/"}
        className={cn(
          "text-2xl font-extrabold flex items-center gap-2",
          fontSize
        )}
      >
        <div className="rounded-xl bg-gradient-to-t from-blue-500 to-blue-600 p-2">
          <SquareDashedMousePointer size={iconSize} className="stroke-white" />
        </div>

        <div>
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Ayo
          </span>
          <span className="text-stone-700 dark:text-stone-300">Scrape</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
