import Chiziq from "../img/sectionchiziq.png"
import Chiziq2 from "../img/sectionchiziq2.svg"

function Section(){
    return(
        <>
        <section className="section">
            <div className="container">
                <div className="section__div">
                    <h1 className="h1">Scooter sharing made simple</h1>
                    <div className="chiziq">
                    <img className="chiziqrasm" src={Chiziq} alt="rasm" width={202} height={15} />
                    <p className="section__text">Scoot takes the hassle out of urban mobility.
                     Our bikes are placed in convenient locations in each of our cities. Use our 
                     app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                        <img className="chiziq2" src={Chiziq2} alt="mima" width={447} height={138} />

                    </div>
                    <button className="section__btn">Get Scootin</button>
                </div>
            </div>
        </section>
        </>
    )
}
export {Section};