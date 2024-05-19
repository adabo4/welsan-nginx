import Navbar from "../Navbar/Navbar"
import Slider3 from "./Slider3"
import { logoSlider } from "../../logoSlider"
import SmallSlider from "../SmallSlider/SmallSlider"

export default function Blog(){
    return(
        <div>
          <div className="blog-container">
            <Navbar />
            <div>
               {/* <logoSlider /> */}
               <SmallSlider></SmallSlider>
            </div>
          </div>
        </div>
    )
}