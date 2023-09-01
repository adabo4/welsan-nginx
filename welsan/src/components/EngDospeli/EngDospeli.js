import { useEffect } from "react";
import { useState } from "react";
import Lines from "../Lines/Lines";
import Navbar from "../Navbar/Navbar";
import "./engdospeli.css"
import { useRef } from 'react';
import Accordion from "./Accordion";
import Boxes from "./Boxes";
import Footer from "../Footer/Footer"
import Input from "./Input";
import KurzCard from "../EngDeti/KurzCard";
import kurzinfo from "../EngDeti/kurzinfo";
import Form from "../Form";
import RefactoredForm from "../RefactoredForm";

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



    const paragraphStyles = {
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        display: '-webkit-box',

    }

    const [isOpen, setIsOpen] = useState(false);

    const [showReadMoreButton, setShowReadMoreButton] = useState(false);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            setShowReadMoreButton(
                ref.current.scrollHeight !== ref.current.clientHeight
            )
        }
    }, [])

    return (
        <>
            <section className="english-adults">
                <Navbar />
                <div className="eng-adults-container">


                    <div className="headline-box">
                        <div className='ponuka-headline'>
                            Angličtina dospelí
                        </div>
                        <Lines ></Lines>
                    </div>


                    <h2 className="detailed-title">Detailný popis kurzov</h2>


                    {/* <div className="card-cont">
                        <div className="course-card">
                            <h3 className="card-headline pink">Polointenzívny kurz</h3>
                            <p>Pre zaneprázdnených študentov, ktorí chcú začať svojím tempom. Minimálne 1 hodina týždenne vo Vami vybranom čase. </p>
                            <p>Cena: 250 EUR -  10 x 50 min.</p>
                        </div>

                        <div className="course-card">
                            <h3 className="card-headline green">Intenzívny kurz</h3>
                            <p>Pre tých, ktorí sa chcú jazyku venovať intenzívnejšie a za krátky čas tak spraviť veľký pokrok. Minimálne 2 hodiny týždenne vo Vami vybranom čase. </p>
                            <p>Cena: 250 EUR -  10 x 50 min.</p>
                        </div>
                    </div> */}

                    <div className="card-cont" id="dospeli">
                        
                            {kurzinfo.map((item, i) => {
                                return <KurzCard title={item.title} desc={item.desc} price={item.price} color={item.color} />
                                
                            })}
                            
                    
                    </div>



                    <p className="course-text">Zabudnite na fixné rozvrhy, domáce úlohy či stresujúce testy. V mojom polointenzívnom kurze pre dospelých sa nájdu všetky úrovne. </p>
                    {/* <p className="beginner" style={isOpen ? null : paragraphStyles} 
                   ref={ref}>
                    Začiatočník: angličtinu ste nikdy neštudovali.
                    Poznáte ju z rádia, filmov, obalov produktov v obchode, no tam sa Vaša komunikácia končí.
                    Ak stále váhate, či sa na to vôbec dať, či nie je neskoro alebo či to ešte vôbec "má zmysel,"
                    odpoveď pre Vás je jednoznačné YES. Práve Vy ste ideálnym študentom. Nemáte zlozvyky,
                    ktoré budeme musieť odstraňovať. Jazyk budete vnímať ako dieťa -
                    jeho význam a zmysel postavíme nad gramatiku a bifľovanie omáčok.
                    Pôjdete svojím tempom na hodinách, kde sa Vám budem osobne venovať celých 50 minút.

                </p>
                {showReadMoreButton && (
                    <button onClick={() => setIsOpen(!isOpen)}>

                   {isOpen ? 'Read Less...' : 'Read More...'}

                    </button>
                )} */}
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
                    
                
                        {/* <Input /> */}
                        {/* <Form /> */}
                         <RefactoredForm
                          />


                </div>











                <Footer />

            </section>



        </>
    )
}