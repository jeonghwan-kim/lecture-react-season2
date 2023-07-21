const FormControl = ({ label, htmlFor, required, error, children }) => (
  <div className="FormControl">
    <label htmlFor={htmlFor}>
      {label}
      {required && <span className="required">*</span>}
    </label>
    {children}
    {error && <div className="error">{error}</div>}
  </div>
);

export default FormControl;
