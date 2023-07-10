const Button = ({ styleType, block, children, onClick }) => {
  let className = "Button";
  if (styleType) className += ` ${styleType}`;
  if (block) className += " block";

  return (
    <button className="Button brand" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
