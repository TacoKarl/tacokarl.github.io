import {NavLink} from "react-router-dom";

function Courses (){
    return <div>
        <nav className="courses">
            <NavLink to="/BAD" className="nav-link">BAD</NavLink>
            <NavLink to="/FED" className="nav-link">FED</NavLink>
            <NavLink to="/SWT" className="nav-link">SWT</NavLink>
            <NavLink to="/SWD" className="nav-link">SWD</NavLink>
        </nav>
    </div>;
}

export default Courses;