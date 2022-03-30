var App = function App() {

    return React.createElement(
        Template,
        null,
        ' ',
        React.createElement(
            'h1',
            null,
            ' Main Page '
        ),
        ' ',
        React.createElement(
            'h2',
            null,
            ' Time Check '
        ),
        ' '
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

window.setInterval(function () {
    ReactDOM.render(React.createElement(Clock, null), document.getElementById('root2'));
}, 1000);

ReactDOM.render(React.createElement(Footer, null), document.getElementById('footerId'));