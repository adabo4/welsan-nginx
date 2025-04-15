import "./kurzy.css";
import butterfly from '../Kurzy/butterfly.webp';
import flower from "../Kurzy/flower.webp";
import "./kurzyheadline.css"

export default function KurzyHeadlineSpring() {
    return (
        <>
            <div className="kurzy-headline">
                <img src={butterfly} alt="butterfly-img" className='butterfly-img' />
                <div className="shapes">
                    <div className="small-circle"></div>
                    <h3>KURZY 2025 - Spring term</h3>
                    <hr className="line" />
                    <hr className="thin" />
                </div>
                <img src={flower} alt="flower-img" className='flower-img' />
            </div>
        </>
    )
}