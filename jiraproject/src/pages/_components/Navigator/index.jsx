export default function Navigator() {
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a href="#" className="nav-link">Jira</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">view all projects</a>
                        <a className="dropdown-item" href="#">create project</a>
                    </div>
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Users</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">view all users</a>
                    </div>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link">Create Task</a>
                </li>
            </ul>
        </div>
    )
}
