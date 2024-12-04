import Courses from "./Courses.tsx";
import '../../components/style/NavBar.css'

function Fourth (){
    return (
        <div>
            <div className="sidebar">
                <Courses/>
            </div>
            <div className="main-content">
                <h1>Welcome to the 4th Semester</h1>
            </div>
        </div>
    );
}

export default Fourth;