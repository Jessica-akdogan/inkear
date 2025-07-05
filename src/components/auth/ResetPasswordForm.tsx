
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetPassword } from "@/hooks/auth/useResetPassword";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { resetPasswordSchema, type ResetPasswordData } from "@/utils/validation";

const ResetPasswordForm = () => {
  const [params] = useSearchParams();
  const oobCode = params.get("oobCode");
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
  });

   const mutation = useResetPassword();

  const onSubmit = (data: ResetPasswordData) => {
    if (!oobCode) return alert("Invalid or missing reset code.");
    mutation.mutate({ oobCode, newPassword: data.password }, {
      onSuccess: () => navigate("/sign-in"),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input type="password" placeholder="New password" {...register("password")} />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <Input type="password" placeholder="Confirm password" {...register("confirmPassword")} />
      {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

      <Button type="submit" disabled={mutation.status === "pending"} className="w-full bg-green-600 text-white">
        {mutation.status === "pending" ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
