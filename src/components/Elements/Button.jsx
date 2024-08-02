const Button = (props) => {
  const { children, variant = "bg-blue-600 text-gray-50" } = props;
  return (
    <div
      className={`flex items-center gap-2 px-6 py-2 border border-blue-600 tracking-wider cursor-pointer font-medium ${variant} rounded-full w-fit`}
    >
      {children}
    </div>
  );
};

export default Button;
