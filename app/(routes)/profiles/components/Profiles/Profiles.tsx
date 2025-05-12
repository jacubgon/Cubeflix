"use client"
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types";
import { AddProfile } from "./AddProfile";

export default function Profiles(props: ProfilesProps) {
    const { users } = props;
    console.log(users);
  return (
    <div>
      <div>Usuarios de perfiles...

      <AddProfile />
      </div>
      

      <div className="mt-16 flex items-center justify-center">
        <Button
        variant={"outline"}
        size={"lg"}
        className="text-gray-500 border-gray-500"
        onClick={() => console.log('click')}
        > Administrar perfiles 

        </Button>
      </div>
    </div>
  )
}
