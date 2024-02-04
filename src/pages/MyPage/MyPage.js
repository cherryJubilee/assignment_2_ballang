import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../store/reducers/profileSlice";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import styles from "./MyPage.module.scss";

function MyPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  // 로그인 정보 가져오기
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [isLoggedIn, navigate]);

  const handleProfileSave = (updatedProfile) => {
    dispatch(setProfile(updatedProfile));
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.input}>
        <h1>마이페이지</h1>
        <ProfileForm profile={profile} onSave={handleProfileSave} />
      </section>
      <section className={styles.info}>
        <div className={styles.change}>
          <img src="/user.jpeg"></img>
        </div>
        <div className={styles.change}>{profile?.nickname}</div>
        <div className={styles.change}>{profile?.age}</div>
        <div className={styles.change}>{profile?.preferenceStyle}</div>
      </section>
    </div>
  );
}
export default MyPage;
