var Navbar = function Navbar() {
    return React.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-light bg-light" },
        React.createElement(
            "a",
            { className: "navbar-brand",
                href: "#" },
            " Navbar "
        ),
        " "
    );
};

var Sidebar = function Sidebar() {
    return React.createElement(
        "div",
        { className: "d-none d-md-block col-md-3" },
        React.createElement(
            "div",
            { className: "border border-primary py-4 px-3" },
            "Sidebar "
        ),
        " "
    );
};

var Footer = function Footer() {
    return React.createElement(
        "div",
        { className: "border-top p-2" },
        "Template Demo & copy; 2022. "
    );
};

var Template = function Template(props) {
    return React.createElement(
        React.Fragment,
        null,
        " ",
        React.createElement(Navbar, null),
        React.createElement(
            "div",
            { className: "container py-4" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-12 col-md-9" },
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

var App = function App() {
    return React.createElement(
        Template,
        null,
        React.createElement(
            "h1",
            null,
            " Main Content "
        ),
        " "
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));