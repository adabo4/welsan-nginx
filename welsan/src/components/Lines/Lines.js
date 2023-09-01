import { useEffect, useState } from "react";
import styled from "styled-components";
import "./lines.css"

function Lines(){

    //     const style = {
    //         // width:  "170%",
    //         // maxWidth: "300%",

    //         // margin: "-8px -310px 0",
    //         alignSelf: "center",
    //         zIndex: 1,
    // }
    return(
        
        <div className="line-container" >
            <hr className="line"/>
            <hr className="thin"/>
            <hr className="line-dotted" />
        </div>
        
    )
}

export default Lines;