import Courses from "../Courses.tsx";
import '../../../components/style/NavBar.css'
import Strategy from "./SWDTopics/Strategy.tsx";
import Observer from "./SWDTopics/Observer.tsx";
import Factory from "./SWDTopics/Factory.tsx";
import StateMachine from "./SWDTopics/StateMachine.tsx";
import ParallelAggregation from "./SWDTopics/ParallelAggregation.tsx";
import Futures from "./SWDTopics/Futures.tsx";
import HandIn from "./SWDTopics/HandIn.tsx";
import Architecture from "./SWDTopics/Architecture.tsx";
import SOLID from "./SWDTopics/SOLID.tsx";

function SWD (){
    return (<div>
        <div className="sidebar">
            <Courses/>
        </div>
        <div className="main-content">
            <h1>SWD</h1>
            <p className="explanation"><strong>SWD</strong> har 8 eksamens spørgsmål man kan trække.
                De fleste handler om patterns, men ikke alle. Patterns eksistere for at simpelgøre
                kode, men man skal ikke altid bruge dem. Er koden allerede simpel vil det
                overkomplicere den simple kode/program<br/>
            Jeg vil gennemgå dem her:</p>
            <div className="content-wrapper">
                <div className="tsLeft">
                    <Strategy/>
                    <Factory/>
                    <ParallelAggregation/>
                    <Architecture/>
                    <SOLID/>
                </div>
                <div className="tsRight">
                    <Observer/>
                    <StateMachine/>
                    <Futures/>
                    <HandIn/>
                </div>
            </div>
        </div>
    </div>);
}

export default SWD;