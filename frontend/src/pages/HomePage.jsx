import { Link } from "@tanstack/react-router"
import Video from "../components/home/Video"
import HomeTopText from "../components/home/HomeTopText"
import HomeBottomText from "../components/home/HomeBottomText"
import HomeMidText from "../components/home/HomeMidText"

const HomePage = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between overflow-hidden">
        <HomeTopText />
        <HomeMidText />
        <HomeBottomText />
      </div>


    </div>
  )
}

export default HomePage