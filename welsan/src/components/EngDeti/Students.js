

export default function Students(props) {
    return (
        <>
            <div className="card-cont">
                <div className="course-card">
                    <h3 className="card-headline pink">{props.title}</h3>
                    <p>{props.desc}</p>
                    <p>{props.price}</p>
                </div>
                <div className="img-card">
                    <img src="./img/kid.png" alt="" />
                </div>

            </div>

            <div className="card-text-cont">
                <div className="card-text">
                    <p>{props.box1}
                    </p>
                </div>
                <div className="card-text right">
                    <p><span>{props.box2}</span>

                    </p>
                </div>
                <div className="card-text right ">
                    <p><span>Ako to prebieha: </span>na prvom stretnutí si vypíšeme dotazník s informáciami o Vašom dieťati. Spolu si odkomunikujeme, čo od kurzu očakávame a aké sú realistické ciele v našom prípade (vývoj, logopedické schopnosti, motorické zručnosti, atď.)  Zoznámim sa s dieťatkom a po úvodnom zvyknutí si na seba sa začíname hrať, teda vlastne učiť. :)</p>
                </div>

                <div className="card-text">
                    <p><span>Výhody:</span> dieťaťu venujem nepretržitú pozornosť počas celej hodiny, čo mi umožňuje vybudovať si blízky vzťah a dôveru. Máte tak istotu, že je v dobrých rukách a celých 50 minút sa prispôsobujeme jeho tempu. Keďže si uvedomujeme, že niektoré dni bývajú detičky uplakané, nevyspaté, alebo skrátka len nemajú svoj deň, aktivity vieme prispôsobiť potrebám dieťatka a nemusí sa nasilu zapájať do skupinovej aktivity, ako vo veľkých škôlkach. </p>
                </div>
            </div>
        </>
    )
}