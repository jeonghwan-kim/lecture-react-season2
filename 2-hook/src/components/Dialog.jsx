import React from "react";

const Dialog = ({ header, children, footer }) => {
  const footerRef = React.useRef(null);

  React.useEffect(() => {
    if (!footerRef.current) return;

    const buttons = Array.from(footerRef.current.querySelectorAll("button"));
    if (buttons.length === 0) return;

    const activeButton = buttons[buttons.length - 1];
    activeButton.focus();
  }, [footerRef.current]);

  return (
    <div className="Dialog">
      {header && <header>{header}</header>}
      <main>{children}</main>
      {footer && <footer ref={footerRef}>{footer}</footer>}
    </div>
  );
};

export default Dialog;
