import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


import "./css/stylesheet.css"
import "./css/rainbowtext.css"




export default function Home() {
  return (
    <main>
        <div className="infocontainer">
          <div><center><img src="https://cdn.discordapp.com/avatars/624861181311451137/2f361a44259edf650f4cc8af7c2787c0?size=1024" className="pfp"/></center></div>
          <div className="name rainbow">Dean</div>
          <center><Badge className="badge">Coder & Managment</Badge></center>
          <center><Button className="discord-button hover:bg-zinc-700"><img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" width={30}/></Button></center>
          <a href="https://github.com/Paasdag"><center><Button className="github-button bg-indigo-600 hover:bg-gray-800"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={30} /></Button></center></a>
        </div>
    </main>
  );
}
