import logo2 from "../assets/logo2.png";

export function NavigationBar() {
    return (
        <header className="nav">
            <div className="logo">
                <img src={logo2} alt="Logo" />
            </div>
            <div className="nav-bar">
                <a>МТЗ Сервис</a>
            </div>
        </header>
    )
}