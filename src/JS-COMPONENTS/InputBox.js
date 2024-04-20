function InputBox({label, placeholder, type, isEmpty, isInvalide = false, pattern}){
    return(
       <div className="Input-Box">
       <label>{label}{(isEmpty || isInvalide) && <span>This field is required</span>}</label>
       <input type={type} placeholder={placeholder} pattern={pattern}></input>
       </div>
    )
}

export default InputBox;