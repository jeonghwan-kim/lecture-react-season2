const Button = ({ styleType, block, ...rest }) => {
  let className = "Button";
  if (styleType) className += ` ${styleType}`;
  if (block) className += " block";

  return <button {...rest} className={className} />;
};

export default Button;
