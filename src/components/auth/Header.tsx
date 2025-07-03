import { Link } from "react-router-dom";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { logoDark } from "@/assets";

const Header = () => (
  <CardHeader className="text-center space-y-4">
    <div className="flex justify-center">
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logoDark}
          alt="Inkaer"
          loading="lazy"
          className="h-8 w-auto"
        />
      </Link>
    </div>
    <CardTitle className="section-title">Create Account</CardTitle>
    <p className="section-subtitle">Join Inkaer and showcase your skills</p>
  </CardHeader>
);

export default Header;
