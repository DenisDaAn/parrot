
import logo from "../assets/logo.png";

export function NavigationBar() {
    return (
        <header className="nav">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        </header>
    )
}