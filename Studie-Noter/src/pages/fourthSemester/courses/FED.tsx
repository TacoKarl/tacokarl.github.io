import Courses from "../Courses.tsx";
import '../../../components/style/NavBar.css'


function FED (){
    return (<div>
        <h1>FED</h1>
        <div className="sidebar">
            <Courses/>
        </div>
    </div>);
}

export default FED;