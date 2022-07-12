import './NavigationBar.css';

export default function NavigationBar() {
    return <nav className = "NavigationBar">
        <a href = "/" className = "Title">Robert Turnbull</a>
        <ul>
            <li>
                <a href = "/about">About</a>
            </li>
            <li>
                <a href = "/projects">Projects</a>
            </li>
        </ul>
    </nav>
}