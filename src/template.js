const Navbar = () => {

    return (

        <
        nav className = "navbar navbar-expand navbar-dark bg-dark" >

        <
        a className = "navbar-brand"
        href = "index.html" > Navbar < /a>

        <
        div className = "collapse navbar-collapse d-flex justify-content-end"
        id = "navbarNav" >

        <
        ul className = "navbar-nav" >


        <
        li className = "nav-item" >

        <
        a className = "nav-link"
        href = "index.html" > About < /a>

        <
        /li>

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

var Button = () => {
    return ( <
        div className = "text-center" > <
        button className = "btn btn-outline-primary" > Sample Button < /button></div >

    );
};

var Footer = function Footer() {
    return React.createElement(
        "div", { className: "text-center border-top p-2" },
        "Template Demo ©️ 2022. "
    );
};

class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                    date: new Date(),
                    location: 'Cebu',
                    temperature: '23',
                    feelings: 'Feels Good!'
                } // this is the component state property object
        }

        componentDidMount() {
            this.timer = setInterval(() => {
                this.updateTime();
            }, 1000)
        };

        componentWillUnmount() {
            clearInterval(this.timer)
        };

        updateTime() {
            this.setState({ date: new Date() });
        };

        updateTemperature(temp) {
            this.setState({ temperature: temp });
        }


        render() {
            const { location, date, feelings, temperature } = this.state;
            return ( < div >
                <
                h2 className = "text-center" > { `The current time right now in ${location} is ${ date.toLocaleTimeString() }, and the current temperature is ${ temperature } and it $ { feelings }` }. < /h2></div >


            )
        }

        const Template = (props) => {
            return (
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

            );
        }