import NIMA from "../img/appstore.svg"
import NIMA2 from "../img/playmarket.svg"

function Section6(){
    return(
        <>
        <section className="section6">
            <div className="container">
            <h2 className="Section6__h2">Sign up and Scoot off today</h2>
            <div className="logo">
               <a href="#link">
               <img src={NIMA} alt="logo" width={182} height={56} />
               </a>
                <a href="#link">
                <img src={NIMA2} alt="logo" width={182} height={56}/>
                </a>
            </div>
            </div>
        </section>
        </>
    )
}
export {Section6};