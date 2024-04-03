function InputBox({label, placeholder}){
    return(
       <div className="Input-Box">
       <label>{label}</label>
       <input type="text" placeholder={placeholder}></input>
       </div>
    )
}

export default InputBox;