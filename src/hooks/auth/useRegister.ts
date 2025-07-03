import { registerUser } from "@/api/auth";
import { db } from "@/firebase/config";
import { setUser } from "@/redux/sessionSlice";
import type { RegisterInput } from "@/utils/validation";
import { useMutation } from "@tanstack/react-query";
import { collection, doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


export function useRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: RegisterInput) => {
      const user = await registerUser(data); // Firebase auth logic

      // Save user info to Firestore
      const userRef = doc(collection(db, "users"), user.uid);
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        firstName: data.firstName,
        lastName: data.lastName,
        linkedin: data.linkedin || null,
        createdAt: new Date().toISOString(),
      });
  
      return user;
    },
    onSuccess: (user) => {
      dispatch(setUser({
        uid: user.uid,
        email: user.email!,
        displayName: user.displayName || "",
      }));
        toast.success("Registration in successfully!");
      navigate("/sign-in");
    },
  });
}