import axios from 'axios';
import React, { useState } from 'react';
import './Promotion.css';

function Promotion() {

    const [codeInput, setCodeInput] = useState("");
    const [loading, setLoading] = useState(false)
    const [codeValid, setCodeValid] = useState(false);
    const [codeInvalid, setCodeInvalid] = useState(false);

    const checkCode = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { data } = await axios.get(`https://yesno.wtf/api`);

        if (data.answer === "yes") {
            setCodeValid(true);
        } else {
            setCodeInvalid(true);
            setTimeout(() => {
                setCodeInvalid(false);
            }, 200);
        }

        setLoading(false);
    }

  return (
    <div id="promotion">
        {/* input field */} {/* Success State */} {/* Failed State */}
        <section id="promotionCodeInput">
            <form
                onSubmit={(e) => checkCode(e)}
            >
                <div className={`promotionCode__container ${codeValid && "promotionCode__containerSuccess"}`}>
                    { !codeValid ? (
                        <>
                        <input
                            className="promotionCode__input"
                            type="text"
                            value={codeInput}
                            onChange={(e) => setCodeInput(e.target.value)}
                            required
                        />
                        <button
                            className={`
                                promotionCode__button
                                ${loading && "promotionCode__buttonLoading"}
                                ${codeInvalid && "promotionCode__buttonFailed"} 
                            `}
                        >{loading ? (
                            <i class="fa-solid fa-spinner"></i>
                        ):(
                            <i class="fa-solid fa-magnifying-glass"></i>
                        )}</button>
                        </>
                    ):(
                        <i class="fa-solid fa-check"></i>
                    )}
                </div>
            </form>
        </section>

        <section id="backgroundImages">
            <img
                className="backgroundImage"
                src="https://www.cadbury.com.au/media/wysiwyg/MOND_9300617066125-1.png"
                alt=""
            />
            <img
                className="backgroundImage"
                src="https://www.cadbury.com.au/media/wysiwyg/MOND_9300617066125-1.png"
                alt=""
            />
            <img
                className="backgroundImage"
                src="https://www.cadbury.com.au/media/wysiwyg/MOND_9300617066125-1.png"
                alt=""
            />
        </section>

        <div className="promotionTitle__container">
                    
            <h1 className="promotionTitle">Cadbury Bake-a-Bonus</h1>
        </div>

        <footer id="promotionFooter">
            <ul className="promotionLinks">
                <li className="promotionLink">
                    <a className="promotionLink__anchor">TERMS AND CONDITIONS</a>
                </li>
                <li className="promotionLink">
                    <a className="promotionLink__anchor">WINNERS</a>
                </li>
                <li className="promotionLink">
                    <a className="promotionLink__anchor">PRIVACY POLICY</a>
                </li>
                <li className="promotionLink">
                    <span>&copy; MONDELEZ AUSTRALIA PTY LTD</span>
                </li>
            </ul>
        </footer>
    </div>
  )
}

export default Promotion