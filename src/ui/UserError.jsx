function UserError({ children }) {
  return (
    <p
      className="text-red-500 text-center absolute right-[-20px]
     bottom-2"
    >
      {children}
    </p>
  );
}

export default UserError;
