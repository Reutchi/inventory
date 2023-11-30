import './base-avatar.scss'
import NoAvatar from '../../assets/NoAvatar.svg'
import {useState} from "react";
const BaseAvatar = ({name = '', }) => {

    const [avatar,setAvatar] = useState(NoAvatar)
    const handleChangeAvatar = (ev) => {
        if (ev.target.files && ev.target.files[0]){
            setAvatar(URL.createObjectURL(event.target.files[0]))
        }
    }

    return (
        <label className="custom-file-upload">
            <input
                name={name}
                onInput={ev => handleChangeAvatar(ev)}
                type="file"
                accept="image/*" />
            <img className='avatar' src={avatar} alt="avatar"/>
        </label>
    )
}
export default BaseAvatar
