import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgotPassword } from "@/hooks/auth/useForgotPassword";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { forgotPasswordSchema, type ForgotPasswordData } from "@/utils/validation";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const mutation = useForgotPassword();

  const onSubmit = (data: ForgotPasswordData) => {
    mutation.mutate(data.email, {
      onSuccess: () => setEmailSent(true),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {emailSent && (
        <p className="text-green-600 font-medium text-sm">
          Password reset link sent! Check your email.
        </p>
      )}

      <Input
        placeholder="Enter your email"
        {...register("email")}
        className="-mt-0 xs:-mt-6"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

    <div className="w-full flex flex-col xs:flex-row gap-4">
        <Button
        type="submit"
        disabled={mutation.status === "pending"}
        className="w-full bg-blue-600 text-white"
      >
        {mutation.status === "pending" ? "Sending..." : "Send Reset Email"}
      </Button>

      <Button
        type="button"
        onClick={() => navigate("/")}
        variant="outline"
        className="w-full"
      >
        Cancel
      </Button>
    </div>
    </form>
  );
};

export default ForgotPasswordForm;
