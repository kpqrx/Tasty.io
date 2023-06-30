import type { PropsWithChildren } from "react";

const Button = (props: PropsWithChildren) => {
  const { children, ...restProps } = props;
  return (
    <button
      className="rounded-lg bg-accent hover:bg-accent-darker transition px-6 py-2"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
