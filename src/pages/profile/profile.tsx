import styles from "./profile.module.css";

import ProfileForm from "../../components/profile-form/profile-form";
import ProfileMenu from "../../components/profile-menu/profile-menu";

function Profile() {
  return (
    <main className={`${styles.profileContent} pt-30`}>
      <ProfileMenu />
      <ProfileForm />
    </main>
  );
}

export default Profile;