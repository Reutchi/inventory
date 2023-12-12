import './base-avatar.scss'
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_AVATAR} from "../../store/modules/auth";

const BaseAvatar = ({name = '', }) => {

    const handleChangeAvatar = (ev) => {
        const files = ev.target.files
        const imageFile = files[0]

        dispatch(CHANGE_AVATAR({imageFile}))
    }
    const dispatch = useDispatch()

    const {avatarUrl} = useSelector((state) => state.auth)
    console.log(avatarUrl)

    return (
        <label className="custom-file-upload">
            <input
                name={name}
                onInput={ev => handleChangeAvatar(ev)}
                type="file"
                accept="image/*" />
            <img className='avatar' src={avatarUrl} alt="avatar"/>
        </label>
    )
}
export default BaseAvatar
