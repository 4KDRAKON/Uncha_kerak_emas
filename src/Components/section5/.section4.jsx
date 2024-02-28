 import LOgo from "../img/oxirsection.png"
 import LOGO from "../img/oxirgichiziq.png"
 function Section5(){
    return(

        <>
        <section className="section5">
            <div className="container">
            
                <div className="section5__div">
                    <h2 className="section5__h2">Zero hassle payments</h2>
                    <p className="ssection5__text">Our payment is as easy as one two three. 
                    We accept most credit cards and debit cards. You can also link your PayPal account inside the app. 
                    Need to pay later? No worries! You can defer payment for up to a month.</p>
                    <button className="section3__btn">Learn More</button>
                </div>
                <img src={LOgo} alt="opa" width={554} height={405} />
                <img className="Chziq5" src={LOGO} alt="logo" width={350} height={100} />
            </div>
            
        </section>
        </>
    )
 }
 export{Section5};