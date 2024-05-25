import { ProfileComponent } from "@/components/ProfileComponent";
import SessionWrapper from "@/components/SessionWrapper";

export default function Profile() {
  return (
    <SessionWrapper>
      <ProfileComponent />
    </SessionWrapper>
  );
}
