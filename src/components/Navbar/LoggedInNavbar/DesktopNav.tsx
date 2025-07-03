import { Link } from "react-router-dom";
import Button from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import useLogout from "@/hooks/auth/useLogout";

const DesktopNav = () => {
    const logout = useLogout();
    
  return (
    <div className="flex items-center gap-6">
      <Link
        to="#dashboard"
        className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium"
      >
        Dashboard
      </Link>
      <Link
        to="#project"
        className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium"
      >
        Project
      </Link>
      <Link
        to="#rank"
        className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium"
      >
        Rank
      </Link>
      <Link
        to="#certifications"
        className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium"
      >
        Certifications
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200"
          >
            <User className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
           <DropdownMenuItem onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>  
    </div>
  );
};

export default DesktopNav;
