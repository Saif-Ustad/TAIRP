import "./PostShare.scss";

import PhotoIcon from "../../../images/icons/photo.svg";
import VideoIcon from "../../../images/icons/video.svg";
import LocationIcon from "../../../images/icons/location.svg";
import SheduleIcon from "../../../images/icons/shedule.svg";

import { GrFormClose } from "react-icons/gr";

import { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { uploadImage, uploadPost } from "../../../Action/UploadActions";


function PostShare() {

    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const desc = useRef();

    const dispatch = useDispatch();
    const uploading = useSelector((state)=>state.postReducer.uploading);

    const { user } = useSelector((state) => state.authReducer.authData);
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    const onChangeImge = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        };
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (image) {
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName);
            data.append("file", image);
            newPost.image = fileName;
            console.log(newPost);

            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }

        dispatch(uploadPost(newPost));
        reset();
    }

    const reset =() => {
        setImage(null)
        desc.current.value=""
    }

    return (
        <div className="postShare">
            <img className="profile-img-sm" src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="profile-img" />
            <div className="post-options">
                <input ref={desc} required type="text" placeholder="What's happining?" />
                <div className="post-option-icons">
                    <div className="icon" onClick={() => imageRef.current.click()}>
                        <img src={PhotoIcon} alt="icon" />
                        <h4>Photo</h4>
                    </div>
                    <div className="icon">
                        <img src={VideoIcon} alt="icon" />
                        <h4>Video</h4>
                    </div>
                    <div className="icon">
                        <img src={LocationIcon} alt="icon" />
                        <h4>Location</h4>
                    </div>
                    <div className="icon">
                        <img src={SheduleIcon} alt="icon" />
                        <h4>Shedule</h4>
                    </div>

                    <div className="shareBtn">
                        <button onClick={handleSubmit}>{uploading? "Uploading...": "Share"} </button>
                    </div>

                    <div className="media-input" style={{ display: "none" }}>
                        <input type="file" name="myfile" ref={imageRef} onChange={onChangeImge} />
                    </div>
                </div>
                {image && <div className="preview-img">
                    <GrFormClose onClick={() => setImage(null)} />
                    <img src={URL.createObjectURL(image)} alt="preview-img" />
                </div>}
            </div>

        </div>
    );
}

export default PostShare;