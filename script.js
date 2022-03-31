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

ReactDOM.render(React.createElement(Clock, null), document.getElementById('root2'));

ReactDOM.render(React.createElement(Button, null), document.getElementById('button1'));

ReactDOM.render(React.createElement(Footer, null), document.getElementById('footerId'));