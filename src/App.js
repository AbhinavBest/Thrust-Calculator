import React, { useState } from "react";
import "./App.css";

function Calculator() {
    const [sF, setSF] = useState("");
    const [dF, setDF] = useState("");
    const [pitch, setPitch] = useState("");
    const [rpm, setRpm] = useState("");
    const [dia, setDia] = useState("");
    const [vac, setVac] = useState("");

    const handleSubmit = event => {
        console.log("Values submited");
        event.preventDefault();
        console.log('sf is ', sF);
        console.log('pitch is ', pitch);
        console.log('rpm is ', rpm);
        console.log('dia is ', dia);
        const temp = (1.225 * Math.PI * (0.0254 * dia * 0.0254 * dia) * (pitch * rpm * 0.0254) * (pitch * rpm * 0.0254) * Math.pow(dia, 1.5)) / (4 * 60 * 60 * Math.pow(3.295 * pitch, 1.5));
        setSF(temp);
        const temp1 = (1.225 * Math.PI * (0.0254 * dia * 0.0254 * dia) * ((((pitch * rpm * 0.0254) * (pitch * rpm * 0.0254)) / (60 * 60)) - ((pitch * rpm * 0.0254) / 60) - vac) * Math.pow(dia, 1.5)) / (4 * Math.pow(3.295 * pitch, 1.5));
        setDF(temp1);
        // setPitch("");
        // setRpm("");
        // setDia("");
        // setVac("");
    }
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@500;700&family=Lobster&display=swap"
                rel="stylesheet" />

            <nav className="navbar">
                <div className="static-btn">
                    <h1>Static Thrust</h1>
                </div>
                <div className="dyn-btn">
                    <h1 >Dynamic Thrust</h1>
                </div>
            </nav>
            <section className="imgs">
                <img src={require("./Static.PNG")} className="static-img" alt="static thrust equation"></img>
                <img src={require("./Dynamic.PNG")} className="dyn-img" alt="dynamic thrust equation"></img>
            </section>
            <form onSubmit={handleSubmit}>
                <section className="input">
                    <div className="pitch-div">
                        <h1>Pitch:</h1>
                        <input id="pitch" name="pitch" type="number" value={pitch} onChange={event => setPitch(event.target.value)} />
                    </div>
                    <div className="rpm-div">
                        <h1>RPM:</h1>
                        <input id="rpm" name="rpm" type="number" value={rpm} onChange={event => setRpm(event.target.value)} />
                    </div>
                    <div className="dia-div">
                        <h1>Diameter:</h1>
                        <input id="dia" name="dia" type="number" value={dia} onChange={event => setDia(event.target.value)} />
                    </div>
                    <div className="vac-div">
                        <h1>Vac:</h1>
                        <input id="vac" name="vac" type="number" value={vac} onChange={event => setVac(event.target.value)} />
                    </div>
                </section>
                <div className="calculate"><button type="submit" className="calculate-btn">Calculate</button></div>
            </form>
            <section className="results">
                <div className="sf-div"><h1>Static Thrust:</h1><input id="sf" value={sF} onChange={event => setSF(event.target.value)} readOnly /></div>
                <div className="df-div"><h1>Dynamic Thrust:</h1><input id="df" value={dF} onChange={event => setDF(event.target.value)} readOnly /></div>
            </section>
        </>
    )
}

export default Calculator;