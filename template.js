var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function Navbar() {

    return React.createElement(
        "nav",
        { className: "navbar navbar-expand navbar-dark bg-dark" },
        React.createElement(
            "a",
            { className: "navbar-brand",
                href: "index.html" },
            " Navbar "
        ),
        React.createElement(
            "div",
            { className: "collapse navbar-collapse d-flex justify-content-end",
                id: "navbarNav" },
            React.createElement(
                "ul",
                { className: "navbar-nav" },
                React.createElement(
                    "li",
                    { className: "nav-item" },
                    React.createElement(
                        "a",
                        { className: "nav-link",
                            href: "index.html" },
                        " About "
                    )
                ),
                React.createElement(
                    "li",
                    { className: "nav-item" },
                    React.createElement(
                        "a",
                        { className: "nav-link",
                            href: "index.html" },
                        " Home "
                    )
                ),
                React.createElement(
                    "li",
                    { className: "nav-item" },
                    React.createElement(
                        "a",
                        { className: "nav-link",
                            href: "press.html" },
                        " Press "
                    )
                )
            )
        )
    );
};

var Sidebar = function Sidebar() {
    return React.createElement("div", { className: "d-none d-md-block col-md-3" }, React.createElement("div", { className: "border border-primary py-4 px-3" }, "Sidebar "), " ");
};

var Button = function Button() {
    return React.createElement(
        "div",
        { className: "text-center" },
        " ",
        React.createElement(
            "button",
            { className: "btn btn-outline-primary" },
            " Sample Button "
        )
    );
};

var Footer = function Footer() {
    return React.createElement("div", { className: "text-center border-top p-2" }, "Template Demo ©️ 2022. ");
};

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = {
            date: new Date(),
            location: 'Cebu',
            temperature: 23,
            feelings: 'Feels Good!' // this is the component state property object
        };return _this;
    }

    _createClass(Clock, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.timer = setInterval(function () {
                _this2.updateTime();
            }, 1000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }
    }, {
        key: "updateTime",
        value: function updateTime() {
            this.setState({ date: new Date() });
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                location = _state.location,
                date = _state.date,
                feelings = _state.feelings,
                temperature = _state.temperature;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    { className: "text-center" },
                    " ",
                    "The current time right now in " + location + " is",
                    " ",
                    date.toLocaleTimeString(),
                    ", ",
                    "and the current temperature is " + temperature + "\n            and \n            it " + feelings,
                    ". "
                ),
                " "
            );
        }
    }]);

    return Clock;
}(React.Component);

/* const Clock = (props) => {
    return ( <
        div >
        <
        h2 className = "text-center" > The time right now is { props.date.toLocaleTimeString() }. < /h2> < /
        div >
    );
} */

var Template = function Template(props) {
    return React.createElement(React.Fragment, null, " ", React.createElement(Navbar, null), React.createElement("div", { className: "container py-4" }, React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-12 col-md-9" }, " ", props.children, " "), " ", React.createElement(Sidebar, null)), " "));
};