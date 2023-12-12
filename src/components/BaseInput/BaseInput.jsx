
const BaseInput = ({required,length,label = '',id, name,type = '',placeholder = '',onInput = () => {}}) => {
    const handleInput = (value) => {
        onInput({key:name,value})
    }

    return (
        <label htmlFor={id || name}>
            <span>{label}</span>
            <input
                required
                minLength={length}
                onInput={ev => handleInput(ev.target.value)}
                placeholder={placeholder}
                type={type || 'text'} />
        </label>
    )
}
export default BaseInput
