import React from "react";

import style from "./style.module.scss";

const Title = (props) => {
  const { className, children, size, ...rest } = props;
  let newSize = "md";
  if (size) newSize = size;

  const newClassName = `${style.titleBase} ${style[newSize]} ${className}`;
  return (
    <h3
      className={newClassName}
      {...rest}
    >
      {children}
    </h3>
  );
};

export default Title;
