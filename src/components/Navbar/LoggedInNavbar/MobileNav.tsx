import Button from "@/components/ui/button";
import useLogout from "@/hooks/auth/useLogout";
import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const logout = useLogout();

  return (
    <div className="my-6 flex flex-col gap-6">
      <div className="space-y-4">
        <Link
          to="#dashboard"
          className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2"
        >
          Dashboard
        </Link>
        <Link
          to="#project"
          className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2"
        >
          Project
        </Link>
        <Link
          to="#rank"
          className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2"
        >
          Rank
        </Link>
        <Link
          to="#certifications"
          className="block text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium py-2"
        >
          Certifications
        </Link>
      </div>
      <div className="flex flex-col gap-3 border-t pt-4">
        <Button asChild variant="outline" className="justify-start">
          <Link to="#profile" className="font-sora">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </Button>
        <Button
        onClick={logout}
          asChild
          variant="ghost"
          className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Link to="#logout" className="font-sora">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;
