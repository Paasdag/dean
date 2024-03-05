import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import "./css/stylesheet.css"
import "./css/rainbowtext.css"



export default function Home() {
  return (
    <main>
        <div className="infocontainer">
          <Avatar>
            <AvatarImage src="https://cdn.discordapp.com/avatars/624861181311451137/2f361a44259edf650f4cc8af7c2787c0?size=1024" className="pfp"/>
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
          <div className="name rainbow">Dean</div>
        </div>
    </main>
  );
}
