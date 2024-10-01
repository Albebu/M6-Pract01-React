const Input = ({ type, placeholder, id, onChange, disabled }) => {
    return (
        <input type={type} placeholder={placeholder} id={id} onChange={onChange} disabled={disabled}/>
    );
}

export default Input