
import LOgo from "../Components/img/opajonn.png"
import LOGO from "../Components/img/section3chiziq.svg"
function Scetion3(){
    return(
        <>
        <section className="ssection3">
            <div className="container">
                <div className="section3__div">
                    <h2 className="section3__h2">Easy to use riding telemetry</h2>
                    <p className="ssection3__text">The Scoot app is available with
                     riding telemetry. This means it can show you your average speed
                     , how long you've been using the scooter, your traveling distance,
                      and many more things all in an easy to use app.</p>
                    <button className="section3__btn">Learn More</button>
                </div>
                <img src={LOgo} alt="opa" width={554} height={405} />
                <img className="Chziq3" src={LOGO} alt="logo" width={670} height={150} />
            </div>
        </section>
        
        </>
    )
}
export {Scetion3};