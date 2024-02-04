import React, { useEffect, useState } from "react";
import styles from "./ProfileForm.module.scss";

function ProfileForm({ profile, onSave }) {
  const defaultProfile = { nickname: "", age: "", preferenceStyle: "" };
  const [editableProfile, setEditableProfile] = useState(
    profile || defaultProfile
  );

  useEffect(() => {
    setEditableProfile(profile || defaultProfile);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile({ ...editableProfile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editableProfile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputInfo}>
        <h3>닉네임</h3>
        <input
          name="nickname"
          value={editableProfile.nickname}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputInfo}>
        <h3>나이</h3>
        <input
          name="age"
          value={editableProfile.age}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.inputInfo}>
        <h3>선호하는 스타일</h3>
        <input
          name="preferenceStyle"
          value={editableProfile.preferenceStyle}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button className={styles.btn} type="submit">
          저장하기
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
