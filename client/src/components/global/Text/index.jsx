import React from "react";

import style from "./style.module.scss";

const Text = (props) => {
  const { className, children, size, ...rest } = props;
  let newSize = "md";
  if (size) newSize = size;

  const newClassName = `${style.titleBase} ${style[newSize]} ${className}`;
  return (
    <p
      className={newClassName}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
