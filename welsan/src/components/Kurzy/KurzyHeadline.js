import "./kurzy.css";
import pumpkin from "./pumpkin.png";
import autumn from "./autumn.png";
import "./kurzyheadline.css"

export default function KurzyHeadline() {
    return (
        <>
            <div className="kurzy-headline">
                {/* <img src="./img/autumn.png" alt="butterfly-img" className='butterfly-img' /> */}
                {/* <img src="./img/tree.png" alt="butterfly-img" className='tree-img' />
                <img src="./img/snowman.png" alt="butterfly-img" className='snowman-img' /> */}
                <img src={autumn} alt="Autumn" className='autumn-img' />
                <div>  {/*tuto bol div style inline-block */}
                    <div className="small-circle"></div>
                    <h3>KURZY 2024 - Autumn term</h3>
                    <hr className="line" />
                    <hr className="thin" /> </div>
                <img src={pumpkin} alt="Pumpkin" className="pumpkin-img" />
                {/* <img src="./img/snowflake.png" alt="flower-img" className='snowflake-img' /> */}


            </div>
        </>
    )
}