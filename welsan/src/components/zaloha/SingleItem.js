import React from 'react'

const SingleItem = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        setIsActive(value => !value);
        props.onClick(e);
    }


    return (
        <>

            <button onClick={handleClick} className={`home-white ${isActive ? 'home' : null}`}>
            </button>



        </>
    )
}

export default SingleItem
