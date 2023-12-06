import './base-avatar.scss'
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_AVATAR} from "../../store/modules/auth";

const BaseAvatar = ({name = '', }) => {

    const handleChangeAvatar = (ev) => {
        const files = ev.target.files
        const imageFile = files[0]
        const imageURL = URL.createObjectURL(imageFile)

        dispatch(CHANGE_AVATAR({imageURL, imageFile}))
    }

    const dispatch = useDispatch()
    const {avatar} = useSelector((state) => state.auth)

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
