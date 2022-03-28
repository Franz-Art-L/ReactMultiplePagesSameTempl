const Navbar = () => {

    return (

        <
        nav className = "navbar navbar-expand navbar-light bg-light" >

        <
        a className = "navbar-brand"
        href = "index.html" > Navbar < /a>

        <
        div className = "collapse navbar-collapse"
        id = "navbarNav" >

        <
        ul className = "navbar-nav" >

        <
        li className = "nav-item" >

        <
        a className = "nav-link"
        href = "index.html" > Home < /a>

        <
        /li>

        <
        li className = "nav-item" >

        <
        a className = "nav-link"
        href = "press.html" > Press < /a>

        <
        /li>

        <
        /ul>

        <
        /div>

        <
        /nav>

    );

}

var Sidebar = function Sidebar() {
    return React.createElement(
        "div", { className: "d-none d-md-block col-md-3" },
        React.createElement(
            "div", { className: "border border-primary py-4 px-3" },
            "Sidebar "
        ),
        " "
    );
};

var Footer = function Footer() {
    return React.createElement(
        "div", { className: "border-top p-2" },
        "Template Demo ©️ 2022. "
    );
};

var Template = function Template(props) {
    return React.createElement(
        React.Fragment,
        null,
        " ",
        React.createElement(Navbar, null),
        React.createElement(
            "div", { className: "container py-4" },
            React.createElement(
                "div", { className: "row" },
                React.createElement(
                    "div", { className: "col-12 col-md-9" },
                    " ",
                    props.children,
                    " "
                ),
                " ",
                React.createElement(Sidebar, null)
            ),
            " "
        ),
        " ",
        React.createElement(Footer, null)
    );
};