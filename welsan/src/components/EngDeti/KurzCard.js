
export default function KurzCard(props) {
    return (
        <>
            <div className="course-card">
                <h3 className="card-headline" style={{ color: props.color }}>{props.title}</h3>
                <p>{props.desc}</p>
                <p>{props.price}</p>
            </div>
        </>
    )

}