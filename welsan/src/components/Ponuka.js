import React from 'react';
import Lines from "./Lines/Lines";
import './ponuka.css';

const Ponuka = () => {
    return (
        <div>
            <div className="ponuka-box">
                <div id="ponuka" className="headline-box" >
                    <div className='ponuka-headline'>
                        Ponuka kurzov
                    </div>
                    <Lines ></Lines>
                </div>
            </div>

            <div className="card">
                <div className='imgBx'><img src="./img/tower-bridge-img.png" alt='Tower Bridge'></img></div>
                <div className="content">
                    <h3>Ako sa budeme učiť</h3>
                    <hr />
                    <p>Ku každému, kto ku mne príde s cieľom naučiť sa po anglicky, pristupujem individuálne.
                        Nedá sa predsa položiť pred dospeláka učebnicu, nazvať to kurzom, a tri mesiace ho nútiť správať sa ako v škole.
                        Práca, rodina, koníčky a povinnosti nám napĺňajú myseľ, a preto tam musíme angličtinu dostať bez stresu.
                        Dospelý študent potrebuje stimuláciu z reálneho života a nie bifľovanie sa fonetického prepisu nepravidelných slovies.
                        Bŕŕŕ.</p>
                    <p>
                        V mojej ponuke kurzov si každý nájde presne to, čo potrebuje.
                        Ponúkam jednorazovú pomoc pre rodičov s riešením domácich úloh svojich ratolestí, s prípravami na ťažkú písomku alebo polročné skúšanie.
                        Okrem iného je v ponuke i tradičný Detský kurz Rozprávkovo, kde budeme získavať anglický jazyk prirodzenou a hravou formou.
                        Pre študentov je tu možnosť zamakať na svojom prejave, pripraviť sa na maturitu, skúšku alebo štátnicu.
                        Budeme spolu prekonávať výzvy a dorozumievať sa v jazyku, ktorý hýbe svetom.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Ponuka
