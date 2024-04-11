import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/supabase/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate("/home", { replace: true });
      toast.success("Login successful");
    },
    onError: (error) => {
      console.error("ERROR", error);
      toast.error("Provided email or password incorrect");
    },
  });

  return { isPending, login };
}
