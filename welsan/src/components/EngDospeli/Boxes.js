import './boxes.css'

export default function Boxes(props){

    return(
        <>
        
                <div className="box" style={{backgroundColor: props.style}}>
                    <div className="box-text">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    </div>
                </div>
            
        </>
    )
}