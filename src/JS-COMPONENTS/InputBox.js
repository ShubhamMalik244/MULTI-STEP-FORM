function InputBox({
  label,
  placeholder,
  type,
  isEmpty,
  isInvalide = false,
  pattern,
  inputvalue
}) {
  return (
    <div className="Input-Box">
      <label>
        {label}
        {isEmpty && <span>This field is required</span>}
        {isInvalide && <span>Invalide input</span>}
      </label>
      <input type={type} placeholder={placeholder} defaultValue={inputvalue} pattern={pattern}></input>
    </div>
  );
}

export default InputBox;
