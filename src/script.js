const App = () => {

    return (




        <
        Template > <
        h1 > Main Page < /h1> <
        h2 > Time Check < /h2> < /Template >


    );

}

ReactDOM.render( < App / > , document.getElementById('root'));

window.setInterval(() => {
    ReactDOM.render( <
        Clock / > ,
        document.getElementById('root2')
    );
}, 1000);

ReactDOM.render( < Footer / > , document.getElementById('footerId'));