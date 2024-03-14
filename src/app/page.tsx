import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import {Tooltip} from "@nextui-org/react";
import { Separator } from "@/components/ui/separator"



import "./css/stylesheet.css"
import "./css/rainbowtext.css"




export default function Home() {
  return (
    <main>
        <div className="infocontainer">
          <div><center><img src="https://cdn.discordapp.com/avatars/624861181311451137/2f361a44259edf650f4cc8af7c2787c0?size=1024" className="pfp"/></center></div>
          <div className="name rainbow">Dean</div>
          <center><Badge className="badge">Coder & Managment</Badge></center>
          <Tooltip content="My discord is 'Dean.n.'" className="discord-button-tooltip">
            <Button className="discord-button hover:bg-zinc-700">
              <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" width={30}/>
            </Button>
          </Tooltip>
          <a href="https://github.com/Paasdag"><center><Button className="github-button bg-indigo-600 hover:bg-gray-800"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={30} />
          </Button></center></a>
        </div>
        <div className="About-me">
          <div>
            <h1 className="text-about-me">About me!</h1>
          </div>
          <Separator className="my-2"/>
        <div>
          <h2 className="about-text">
            Hello!, i am Dean, A self taught programmer. Theres a few languages i&apos;d like to learn like Java and get great at React, Html, Css to make websites like this one or even better!
          </h2>
          <Separator className="my-2"/>
          <h1 className="text-about-me">Hobbies</h1>
          <Separator className="my-2"/>
          <h2 className="about-text"> 
            I have a few hobbies for example Programming, Gaming, Cooking/Baking. I love cooking with my mother, If i had to say which my favorite thing is to make i&apos;d say Brigadeiros they&apos;re from bazil and i love making these for special occasions like parties, gifts basically for anything!
          </h2>
        </div>
        </div>
    </main>
  );
}
