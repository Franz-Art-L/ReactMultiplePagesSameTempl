 const App = () => {
     return ( <
         Template >
         <
         h1 > Press page < /h1>  <
         h3 > Time check < /h3> < /
         Template >
     );
 };



 window.setInterval(() => {

     ReactDOM.render(

         <
         Clock date = { new Date() }
         />,

         document.getElementById('root2')

     );

 }, 1000);

 ReactDOM.render( < App / > , document.getElementById('root'));

 ReactDOM.render( < Footer / > , document.getElementById('footerId'));