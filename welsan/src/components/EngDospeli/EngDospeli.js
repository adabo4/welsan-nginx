import Lines from "../Lines/Lines";
import "./engdospeli.css"
import Accordion from "./Accordion";
import Boxes from "./Boxes";
import Footer from "../Footer/Footer"
import KurzCard from "../EngDeti/KurzCard";
import kurzinfo from "../EngDeti/kurzinfo";
import MobileNavbar from "../Navbar/MobileNavbar";
import EmailJSForm from "../EmailJSForm";

export default function EngDospeli() {

    const databoxes = [
        {
            title: "1 na 1",
            text: "V pohodlí našej učebne, bez ostychu, celých 50 minút je len pre Vás.",
            color: "#F2BF5E"
        },
        {
            title: "Flexibilita",
            text: "Rozvrh zostavujeme spolu, lepšie povedané ho 'zladíme.'",
            color: "#FF6161"
        },
        {
            title: "Parkovanie",
            text: "Pred budovou je zabezpečené parkovanie zdarma. K  WELSANu je jednoduchý prístup po obchvate, cestujete teda mimo zápchy.",
            color: "#536EB7"
        },
        {
            title: "Vlastné materiály",
            text: "Moje materiály sú Vám k dispozícii. Zabudnite na knihy za stovky EUR.",
            color: "#75CBA8"
        }

    ]

    return (
        <>
            <section className="english-adults">
                <MobileNavbar />
                <div className="eng-adults-container">
                    <div className="headline-box">
                        <div className='ponuka-headline'>
                            Angličtina dospelí
                        </div>
                        <Lines ></Lines>
                    </div>
                    <h2 className="detailed-title">Detailný popis kurzov</h2>
                    <div className="card-cont" id="dospeli">
                        {kurzinfo.map((item, i) => {
                            return <KurzCard title={item.title} desc={item.desc} price={item.price} color={item.color} />

                        })}
                    </div>
                    <p className="course-text">Zabudnite na fixné rozvrhy, domáce úlohy či stresujúce testy. V mojom polointenzívnom kurze pre dospelých sa nájdu všetky úrovne. </p>
                    <div className="accordion-container">
                        <Accordion />
                    </div>
                    <div className="boxes-container">
                        {databoxes.map((databox, i) => {
                            return (
                                <Boxes key={i}
                                    title={databox.title}
                                    text={databox.text}
                                    style={databox.color} />
                            )
                        })}
                    </div>
                    <h2 className="detailed-title">Máte otázku? Pýtajte sa:</h2>
                    <EmailJSForm />
                </div>
                <Footer />
            </section>
        </>
    )
}