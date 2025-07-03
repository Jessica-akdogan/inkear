import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "@/components/ui/button";
import { Link } from "react-router-dom";
import { logoDark } from "@/assets";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Logo from "../Logo";



const GuestNavbar = () => {
  return (
    <section className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-2">
      <div className="px-[1rem] xs:px-[2rem]">
        {/* Desktop Navigation */}
        <nav className="hidden justify-between md:flex">
          <Logo />
          <DesktopNav />
        </nav>

        {/* Mobile Navigation */}
        <div className="block md:hidden">
          <div className="flex items-center gap-6 justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoDark} className="h-8 w-auto" alt="Inkaer" loading="lazy" />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                   <Logo />
                  </SheetTitle>
                      <SheetDescription className="sr-only" />
                </SheetHeader>
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestNavbar;