import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="text-secondary p-8 h-screen flex items-center justify-center flex-col gap-8">
      <h1 className="text-[32px] font-bold mb-8 ">Something went wrong</h1>

      <p className="text-4xl my-8 ">{error.data || error.message}</p>

      <button
        onClick={() => navigate(-1)}
        className="px-2 py-3 text-3xl border border-secondary flex items-center font-bold "
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
