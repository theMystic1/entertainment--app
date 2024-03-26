import { Link } from "react-router-dom";

function Button({ children, to, type, disabled }) {
  if (to)
    return (
      <Link className="text-accent text-lg sm:text-xl" to={to}>
        {children}
      </Link>
    );
  return (
    <button
      className={`bg-accent text-sm sm:text-xl cursor-pointer text-secondary h-16 rounded-xl transition-all  hover:bg-secondary duration-500 hover:text-primary font-bold ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
