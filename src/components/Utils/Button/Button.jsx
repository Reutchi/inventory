import './button.scss'
function Button({title ='', onClick = () => {},type = '',className}) {
    return (
        <button className={className} onClick={onClick}>{title}</button>
    )
}

export default Button
