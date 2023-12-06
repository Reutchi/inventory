import './button.scss'
function Button({title ='', onClick = () => {},type = ''}) {
    return (
        <button className='btn-primary' onClick={onClick}>{title}</button>
    )
}

export default Button
