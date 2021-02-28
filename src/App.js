import logo from "./logo.svg";
import "./App.css";

function App() {
    // var person = {
    //   name : "Kazi Riyad",
    //   job : "Developer"
    // }
    // var style = {
    //   color: 'gray',
    // }
    const products = [
        {name: 'Photoshop', price: '$90.99'},
        {name: 'Illustrator', price: '$60.99'},
        {name: 'PDF Reader', price: '$30.99'}
    ]
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2 style={style}> DETELES : {person.name + " " + person.job} </h2> */}
                <p>I am a React Person </p>
                <Product product ={products[0]}></Product>
                <Product product ={products[1]}></Product>

                <Person name = "Kazi" job = "footballer" ></Person>
                <Person name = "Tareq" job = "Web Developer"></Person>
                <Person name = "Adib" job = "Business Man"></Person>
                <Person name = "Abdulla" job = "Web Developer"></Person>
            </header>
        </div>
    );
}
// new component
function Product(props) {
    const ProductStyle = {
        border: "1px solid gray",
        backgroundColor : "lightgray",
        borderRadius : '10px',
        height : '300px',
        width : '400px',
        float : 'left',
        margin : '10px'
    };
    const {name,price} = props.product;
    return (
        <div style={ProductStyle}>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button>Buy Now</button>
        </div>
    );
}
function Person(props) {
    const personStyle = {
        border: "2px solid gray",
        margin: "10px",
        backgroundColor : "green",
        padding : "10px"
    };
    return (
        <div style={personStyle}>
            <h1>Name : {props.name}</h1>
            <h2>Profession : {props.job}</h2>
        </div>
    );
}

export default App;
