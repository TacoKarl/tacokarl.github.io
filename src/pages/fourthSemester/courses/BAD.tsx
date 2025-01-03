import Courses from "../Courses.tsx";
import '../../../components/style/NavBar.css'
import Docker from "./BADTopics/Docker.tsx";
import ZOMBIE from "./SWTTopics/ZOMBIE.tsx";


function BAD (){
    return (<div>
        <div className="sidebar">
            <Courses/>
        </div>
        <div className="main-content">
            <h1>BAD</h1>
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

export default BAD;