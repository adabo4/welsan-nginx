
function Kurz(props) {
    return (
        <>
        <div className="course-types">
                    <div className="courses-box">
                    <h4>Pre:{props.name}</h4>
                    <p>Pre {props.for}</p>
                    <p>Trvanie{props.length}</p>
                    <p>Priebeh kurzu{props.time}</p>

                    <button>Viac info...</button>

                    {props.length}

                    </div>
                    </div>

                </>
      
    )
}

export default Kurz;