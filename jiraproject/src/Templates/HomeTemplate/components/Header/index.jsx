import { useCheckRole } from '../../../../hooks/useCheckRole'

export default function Header() {
    const user = useCheckRole();
    console.log(user);

    return (
        (user) && (
            <div>
                <ul className="fixed p-2 nav nav-pills bg-dark flex-column" style={{ minHeight: "100vh" }}>
                    <li className="nav-item">
                        <a href="#" className="nav-link">hello, {user.name}</a>
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
    )
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-center">
            <div className="d-flex">
                <a className="navbar-brand" href="#">Fashion Shop</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-light">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};