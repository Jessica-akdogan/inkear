

import  Button  from '@/components/ui/button';
import { Menu} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Logo from '../Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const LoggedInNavbar = () => {
  return (
    <section className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-2">
      <div className="px-[1rem] xs:px-[2rem]">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center">
          <Logo />
          </div>
         <DesktopNav />
        </nav>
        <div className="block  lg:hidden">
          <div className="flex items-center  justify-between">
           <Logo />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto" aria-describedby="mobile nav">
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

export default LoggedInNavbar;
