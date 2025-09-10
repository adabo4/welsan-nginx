import "./kurzy.css";
import pumpkin from "./pumpkin.png";
import autumn from "./autumn.png";
import "./kurzyheadline.css"

export default function KurzyHeadline() {
    return (
        <>
            <div className="kurzy-headline">
                <img src={autumn} alt="Autumn" className='autumn-img' />
                <div>  {/*tuto bol div style inline-block */}
                    <div className="small-circle"></div>
                    <h3>KURZY 2025 - Autumn term</h3>
                    <hr className="line" />
                    <hr className="thin" /> </div>
                <img src={pumpkin} alt="Pumpkin" className="pumpkin-img" />
            </div>
        </>
    )
}