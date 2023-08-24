import "./ProfileEdit.scss";

import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../Action/UploadActions";
import { updateUser } from "../../Action/UserAction";
// import { uploadImage } from "../../actions/UploadAction";
// import { updateUser } from "../../actions/UserAction";

function ProfileEdit({modelOpen, setModelOpen, data}) {
  const theme = useMantineTheme();

  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();

  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onImageChange = (event) => {
   
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }

  };

  // form submission
  const handleSubmit = (e) => {
    
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModelOpen(false);
  };


  return (
    
    <>
      <Modal
        opened={modelOpen}
        onClose={()=> setModelOpen(false)}
        size="60%"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <form className="profile-edit-section" onSubmit={handleSubmit}>
            <h3>Your Info</h3>
            <div className="profile-Details">
                <div className="name">
                    <input type="text" value={formData.firstname} name="firstname" placeholder="First Name" onChange={handleChange} />
                    <input type="text" value={formData.lastname} name="lastname" placeholder="Last Name"  onChange={handleChange}/>
                </div>
                <input  type="text" name="worksAt" value={formData.worksAt}  placeholder="Work at " onChange={handleChange} />
                <div className="other_info">
                    <input type="text" name="livesIn"  value={formData.livesIn} placeholder="Live in" onChange={handleChange}/>
                    <input type="text" name="country" value={formData.country} placeholder="Country" onChange={handleChange}/>
                </div>
                <input  className="username"  value={formData.relationship} type="text" name="relationship" placeholder="Relationship Status "onChange={handleChange} />
                
            </div>
            <div className="img-input">
                <div className="profile-img">
                    <span>Profile Image</span>
                    <input type="file" name="profileImage" onChange={onImageChange}/>
                </div>
                <div className="cover-img">
                    <span>Cover Image</span>
                    <input type="file" name="coverImage" onChange={onImageChange}/>
                </div>
            </div>
            <div className="submit-btn">
                <button type="submit">Update</button>
            </div>
        </form>     
        
      </Modal>
    </>
  );
}

export default ProfileEdit;