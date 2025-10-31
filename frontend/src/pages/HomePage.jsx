import { Link } from "@tanstack/react-router"
import Video from "../components/home/Video"
import HomeTopText from "../components/home/HomeTopText"
import HomeBottomText from "../components/home/HomeBottomText"

const HomePage = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between overflow-hidden">
        <HomeTopText />
        <HomeBottomText />
      </div>


    </div>
  )
}

export default HomePage