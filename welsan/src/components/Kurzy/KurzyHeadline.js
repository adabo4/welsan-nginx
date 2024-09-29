import "./kurzy.css";
import butterfly from '../Kurzy/butterfly.webp';
import flower from "../Kurzy/flower.webp";
import "./kurzyheadline.css"

export default function KurzyHeadline() {
    return (
        <>
            <div className="kurzy-headline">
                {/* <img src="./img/autumn.png" alt="butterfly-img" className='butterfly-img' /> */}
                {/* <img src="./img/tree.png" alt="butterfly-img" className='tree-img' />
                <img src="./img/snowman.png" alt="butterfly-img" className='snowman-img' /> */}
                <img src={butterfly} alt="butterfly-img" className='butterfly-img' />
                <div>  {/*tuto bol div style inline-block */}
                    <div className="small-circle"></div>
                    <h3>KURZY 2024 - Spring term</h3>
                    <hr className="line" />
                    <hr className="thin" /> </div>
                <img src={flower} alt="flower-img" className="flower-img" />


                {/* <img src="./img/pumpkin.png" alt="flower-img" className='flower-img' /> */}
                {/* <img src="./img/snowflake.png" alt="flower-img" className='snowflake-img' /> */}


            </div>
        </>
    )
}