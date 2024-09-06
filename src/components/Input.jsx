function input({placeholder,type,name,handleChange}){
    return(
        <input className="bg-slate-200 border rounded-sm
            focus- outline-none
            px-2
            placeholder:capitalize
            "placeholder={placeholder}
            type={type}
            name={name}
            onChange={handleChange}></input>
    )
}
export default input