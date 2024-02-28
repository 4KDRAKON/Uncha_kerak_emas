
import LOgo1 from "../img/phone.svg"
import LOgo2 from "../img/skuter.svg"
import LOgo3 from "../img/skuter2.svg"
function Section2 (){
    return(
        <>
        <section className="ection2">
        
            <div className="container">
        <span className="sapm"></span>

              <ul className="scetion__2__list">
                <li className="Section2__item">
                    <img src={LOgo1} alt="logo" width={96} height={96} />
                    <h2 className="section2__title">Locate with app</h2>
                    <p className="section2__tetx">Use the app to find the nearest 
                    scooter to you. We are continuously placing scooters in the areas 
                    with most demand, so one should never be too far away. </p>
                </li>
                <li className="Section2__item">
                    <img src={LOgo2} alt="logo" width={96} height={96}  />
                    <h2 className="section2__title">Pick your scooter</h2>
                    <p className="section2__tetx">We show the most important info for the scooters closest to you. 
                    So you know how much charge they have left and can see roughly how much it will cost.</p>
                </li>
                <li className="Section2__item">
                    <img src={LOgo3} alt="logo" width={96} height={96}  />
                    <h2 className="section2__title">Enjoy the ride</h2>
                    <p className="section2__tetx">Scan the QR code and the bike will unlock. Retract the cable lock,
                     put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                </li>
              </ul>
            </div>
        </section>
        </>
    )
}
export {Section2};