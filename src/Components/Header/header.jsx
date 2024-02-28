import React from "react";
import LOgo from "../img/scoot.svg"


function Header () {

    const Ref = React.useRef()

    const modall = () =>{
        Ref.current.classList.add("modal2")
    }
    const modalll = () =>{
        Ref.current.classList.remove("modal2")
    }
    return(
        <>
        <header className="header">
            <div className="container" onClick={modalll}>
                <div className="Header__ichi">
                <img src={LOgo} alt="logo" width={107} height={28} />
                <ul className="header__list">
                    <li className="Header__item">
                        <a className="header__link" href="#link">About</a>
                    </li>
                    <li className="Header__item">
                        <a className="header__link" href="#link">Location</a>
                    </li>
                    <li className="Header__item">
                        <a className="header__link" href="#link">Careers</a>
                    </li>
                </ul>
                </div>

                <button className="Header__btn" onDoubleClick={modall}>Get Scootin</button>
                    <div className="modalka" ref={Ref}>
                        <form className="form" >
                        <button className="btn">Sing In</button>
                        <button className="btn2">Sing Up</button>
                            <p className="textt">Your opinion about our site</p>
                            
                        <input className="in" type="text"  placeholder="Your opinion"/>
                        <button className="s">Submit</button>
                        </form>
                    </div>
            </div>
        </header>
        </>
    )
}
export {Header};