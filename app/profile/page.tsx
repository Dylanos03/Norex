import ProfileCoins from "@/components/profile/coinList";
import ProfileInfo from "@/components/profile/profileInfo";

function Profile() {
  return (
    <div className="my-16 flex flex-col items-center">
      <ProfileInfo />
      <ProfileCoins />
    </div>
  );
}

export default Profile;
