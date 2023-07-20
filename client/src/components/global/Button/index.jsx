import React from "react";

import style from "./style.module.scss";

const Button = (props) => {
  const { className, children, ...rest } = props;

  const newClassName = `${style.buttonBase} ${className}`;
  return (
    <button
      className={newClassName}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
