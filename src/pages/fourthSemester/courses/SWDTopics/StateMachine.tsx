import StateImg from "./Img/State.png"

function StateMachine () {
    return (<div>
        <div className="main-content">
            <h3>State Machine</h3>
            <p>
                State Machine Pattern er endnu et behavioral pattern.
                Et program består af flere stadier/states, og programmet
                opfører sig anderledes alt efter hvilket stadie det er i.
                Det er et super smart pattern, og er nemt at forstå hvordan
                det implementeres. <br/>
                Man kan implementere <code>Switch/Case</code> statements,
                men hvis du skal bruge flere en 2-3 stykker, bliver koden
                hurtigt meget kompleks. Det bliver rodet og svært at læse.
            </p>
            <p>
                Ser vi på klasse diagrammet herunder, kan vi se hvordan vi
                kan implementer State pattern.
            </p>
            <div className={"center"}>
                <img className={"page-img"} src={StateImg}/>
            </div>
            <p>
                Denne løsning er meget mere elegant, og gør det meget
                enklere at læse koden. Fordi vores objekt kender til
                interfacet <code>State</code> kan vi lave flere states
                der gør brug af dette interface. Så kan vi sætte dem ind
                i vores objekt, og vi kan derefter bruge State metoderne.
            </p>
            <p>
                <em>
                    Dette understøtter <strong>S</strong> og <strong>O</strong> i <strong>SOLID</strong> og
                    simplificere koden.<br/>
                    S for Single responsibility da en State kun håndterer en ting/state
                    og ikke gør andet.<br/>
                    O for Open/Closed principle, da du kan introducere nye States uden
                    at ændre eksisterende state klasser eller konteksten.
                </em>
            </p>
        </div>

    </div>)
}

export default StateMachine;