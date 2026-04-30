// NavBar component
// This component displays a simple navigation menu

function NavBar() {
    return (
        <nav>
            {/*Navigation List */}
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar; //Export Component so it can be used in other files