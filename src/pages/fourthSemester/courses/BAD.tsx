import Courses from "../Courses.tsx";
import '../../../components/style/NavBar.css'
import Docker from "./BADTopics/Docker.tsx";


function BAD (){
    return (<div>

        <div className="sidebar">
            <Courses/>
        </div>
        <div className="main-content">
            <h1>BAD</h1>
            <div className="tsLeft">
                <Docker/>
            </div>
            <div className="tsRight">
            </div>
        </div>
    </div>);
}

export default BAD;