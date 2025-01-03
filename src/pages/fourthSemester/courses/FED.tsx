import Courses from "../Courses.tsx";
import '../../../components/style/NavBar.css'
import ZOMBIE from "./SWTTopics/ZOMBIE.tsx";
import Docker from "./BADTopics/Docker.tsx";


function FED (){
    return (<div>
        <div className="sidebar">
            <Courses/>
        </div>
        <div className="main-content">
            <h1>FED</h1>
            <div className="content-wrapper">
                <div className="tsLeft">
                    <ZOMBIE/>
                </div>
                <div className="tsRight">
                    <Docker/>
                </div>
            </div>
        </div>
    </div>);
}

export default FED;