import Courses from "../Courses.tsx";
import '../../../components/style/NavBar.css'

function SWD (){
    return (<div>
        <h1>SWD</h1>
        <div className="sidebar">
            <Courses/>
        </div>
    </div>);
}

export default SWD;