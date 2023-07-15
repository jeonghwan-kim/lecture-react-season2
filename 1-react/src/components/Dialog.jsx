const Dialog = ({ header, children, footer }) => (
  <div className="Dialog">
    {header && <header>{header}</header>}
    <main>{children}</main>
    {footer && <footer>{footer}</footer>}
  </div>
);

export default Dialog;
