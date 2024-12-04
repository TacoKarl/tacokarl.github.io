import Courses from "../Courses.tsx";
import '../../../components/style/NavBar.css'
import Docker from "./BADTopics/Docker.tsx";


function BAD (){
    return (<div>
        <h1>BAD</h1>
        <div className="sidebar">
            <Courses/>
        </div>
        <div className="tsLeft">
            <Docker/>
        </div>
        <div className="tsRight">
        </div>
    </div>);
}

export default BAD;