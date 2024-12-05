import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "./ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";
import { MobileSidebar } from "./Sidebar";

const BreadcrumbHeader = () => {
  const location = useLocation();
  const paths =
    location.pathname === "/" ? [""] : location.pathname?.split("/");
  return (
    <div className="flex items-center">
      <MobileSidebar/>
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink className="Capitalize" href={`/${path}`}>
                  {path === "" ? "Home" : path}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHeader;
