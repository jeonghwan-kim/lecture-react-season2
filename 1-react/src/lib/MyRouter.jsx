export const Link = ({ to, ...rest }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return <a {...rest} href={to} onClick={handleClick} />;
};
