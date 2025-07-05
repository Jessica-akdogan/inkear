import { Link } from "react-router-dom";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { logoDark } from "@/assets";

type HeaderProps = {
  mode: "sign-in" | "sign-up" | "forgot-password" | "reset-password";
};

const Header = ({ mode }: HeaderProps) => {
  const renderContent = () => {
    switch (mode) {
      case "sign-up":
        return (
          <>
            <CardTitle className="section-title">Create Account</CardTitle>
            <p className="section-subtitle">
              Join Inkaer and showcase your skills
            </p>
          </>
        );
      case "forgot-password":
        return (  
          <>
            <CardTitle className="text-3xl font-sora font-bold text-gray-900">
              Forgot Password?
            </CardTitle>
            <p className="text-gray-600 font-sora">
              Please enter your email address, and we will send a password reset link to this email.
            </p>
          </>
        );
          case "reset-password":
        return (  
          <>
            <CardTitle className="text-3xl font-sora font-bold text-gray-900">
            Reset Password
            </CardTitle>
            <p className="text-gray-600 font-sora">
            Enter your new password below.
            </p>
          </>
        );
      case "sign-in":
      default:
        return (
          <>
            <CardTitle className="text-3xl font-sora font-bold text-gray-900">
              Welcome Back
            </CardTitle>
            <p className="text-gray-600 font-sora">
              Sign in to your Inkaer account
            </p>
          </>
        );
    }
  };

  return (
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
      {renderContent()}
    </CardHeader>
  );
};

export default Header;
