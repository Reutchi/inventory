import './base-avatar.scss'
import {useDispatch, useSelector} from "react-redux";
// import {SET_AVATAR} from "../../store/modules/auth";
import NoAvatar  from '../../assets/NoAvatar.svg'
const BaseAvatar = ({name = '', }) => {

    const dispatch = useDispatch()
    const handleChangeAvatar = (ev) => {
        const files = ev.target.files
        const imageFile = files[0]
        // dispatch(SET_AVATAR(imageFile))
    }

    const {avatar} = useSelector((state) => state.auth)

    return (
        <label className="custom-file-upload">
            <input
                name={name}
                onInput={ev => handleChangeAvatar(ev)}
                type="file"
                accept="image/*" />
            <img className='avatar' src={avatar === null ? NoAvatar : avatar } alt="avatar"/>
        </label>
    )
}
export default BaseAvatar
