import './button.scss'
function Button({title ='', onClick = () => {}}) {
    return (
        <a className='btn-primary' onClick={onClick}>{title}</a>
    )
}

export default Button
