import { ProfilesProps } from "./Profiles.types";

export default function Profiles(props: ProfilesProps) {
    const { users } = props;
    console.log(users);
  return (
    <div>Usuarios de perfiles...</div>
  )
}
