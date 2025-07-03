import { Link } from "react-router-dom";
import  Button from "@/components/ui/button";

const DesktopNav = () => (
  <div className="flex items-center gap-6">
    <Link
      to="#how-it-works"
      className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium"
    >
      How It Works
    </Link>
    <Link
      to="#certification"
      className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium"
    >
      Certification
    </Link>
    <Button
      asChild
      variant="ghost"
      className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200 font-sora font-medium"
    >
      <Link to="/sign-in">Sign In</Link>
    </Button>
    <Button
      asChild
      className="bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
    >
      <Link to="/sign-up">Get Started</Link>
    </Button>
  </div>
);

export default DesktopNav;
