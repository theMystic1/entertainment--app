import { useMutation } from "@tanstack/react-query";
import { signupApi } from "../../services/supabase/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ email, password }) => signupApi({ email, password }),
    onSuccess: (user) => {
      toast.success("Signup successful");
      navigate("/login", { replace: true });
    },
  });

  return { signup, isPending };
}
