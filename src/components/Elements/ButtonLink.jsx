const ButtonLink = (props) => {
  const {
    children,
    href,
    variant = "bg-blue-600 text-gray-50",
    target = "_self",
  } = props;
  return (
    <div>
      <a
        className={`flex items-center gap-2 px-6 py-2 border border-blue-600 tracking-wider font-medium ${variant} rounded-full w-fit`}
        href={href}
        target={target}
      >
        {children}
      </a>
    </div>
  );
};

export default ButtonLink;
