import { useState } from 'react';
import './accordion.css';
import { useEffect } from 'react';
import FormattedShortStory from '../EngDospeli/FormattedShortStory';

export default function Accordion() {


    const getData = () => Promise.resolve([{
        id: 1,
        BlogTitle: 'My first encounter with web development in 2014',
        shortStory: 'Back in late 2014 when I was 15 years old, I was passionate about...',
    }]);


    const [data, setData] = useState([]);

    useEffect(() => { getData().then(setData); }, []);

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i);
    }

    const fontColor = {
        color: "purple",
    }

    const data2 = [
        {
            typ: "Začiatočník",
            pokec: "angličtinu ste nikdy neštudovali. Poznáte ju z rádia, filmov, obalov produktov v obchode, no tam sa Vaša komunikácia končí. Ak stále váhate, či sa na to vôbec dať, či nie je neskoro alebo či to ešte vôbec 'má zmysel', odpoveď pre Vás je jednoznačné YES. Práve Vy ste ideálnym študentom. Nemáte zlozvyky, ktoré budeme musieť odstraňovať. Jazyk budete vnímať ako dieťa - jeho význam a zmysel postavíme nad gramatiku a bifľovanie omáčok. Pôjdete svojím tempom na hodinách, kde sa Vám budem osobne venovať celých 50 minút. ",
            color: "#DD3781"
        },
        {
            typ: "Falošný začiatočník",
            pokec: "už Vás nebaví počúvať poznámky typu 'večný študent'? Ak ste sa na angličtinu dali viackrát a rovnako rýchlo ste na kurz prestali chodiť, nie je to Vaša chyba. Skupinové kurzy sú časovo zväzujúce. Niekedy zohráva úlohu i tréma čítať a rozprávať v skupinke, nedostatok času na učenie a nespravenie skúšobného testu...sem-tam sa Vám nepodarí na hodinu prísť a odrazu sa v látke strácate. Presne tieto situácie u nás nikdy nenastanú. Som tu iba pre Vás, hodina prebieha vždy po dohode vopred. Nedávam žiadne testy a neporovnávame sa s ostatnými. Poďte vyskúšať angličtinu štýlom, ktorý Vám bude vyhovovať. ",
            color: "#70B116"
        },
        {
            typ: "Stredne pokročilý a pokročilý",
            pokec: "ak už nejaký ten rok spíkujete a chcete pokročiť míľovými krokmi za pár mesiacov, ste na správnej adrese. Príďte sa zdokonaliť a prekonať i posledné prekážky brániace v plynulej konverzácii. Spolu raz a navždy pochopíme, o čom je ten nešťastný Predprítomný čas, prečo si mýlite nepravidelné slovesá, či ako odstrániť dovolenkový syndróm  'rozumiem, ale neviem odpovedať.'Pre C1 a vyššie sú tu idiomy, frázové slovesá a jemné detaily, po zvládnutí ktorých povýšite svoju úroveň jazyka na native speakera. Stále je čo zlepšovať a šikovný kurz Vám môže oživiť pár zhrdzavených slovíčok či javov.",
            color: "#DD3781"
        }
    ]
    return (
        <>
            <div className="wrapper">
                <div className="accordion">
                    {data2.map((item, i) => {
                        return (
                            <div className="polozka">
                                <div className="nadpis" onClick={() => toggle(i)} style={{ color: item.color }}>
                                    <h2>{item.typ}</h2>
                                    <span>{selected === i ? ' - ' : ' + '}</span>
                                </div>
                                <div className={selected === i ? 'obsah show' : 'obsah'}>   {item.pokec}</div>
                            </div>
                        )
                    })}

                    {data.map(({ id, BlogTitle, shortStory }) => (
                        <div key={id}>
                            <h2>{BlogTitle}</h2>
                            <FormattedShortStory
                                className="date"
                                pattern={"about"}
                                text={shortStory}
                            />
                        </div>


                    ))}

                </div>
            </div>
        </>
    )



}