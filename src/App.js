import "./App.css";
import Countries from "./components/Countries/Countries";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
      
    </div>
  );
}

// const LoadCountries = () => {
//   const [country, setCountry] = useState([]);
//   console.log(country[0]);
//   useEffect(() => {
//     const ulr = `https://restcountries.com/v2/all`;
//     fetch(ulr)
//       .then((res) => res.json())
//       .then((data) => setCountry(data));
//   }, []);

//   return (
//     <div>
//       <h1>Load countries</h1> 
//       {
//       country.map((country) => console.log(country) )
//       // <Country name={country.name} flag={country.flag} population={country.population}></Country>)
//     }
//     </div>
//   )
  
// };

// const Country = (props) =>{
//   return(
//     <div className="country-style">
//     <div className="country">
//       <img src={props.flag} alt="" />
//       <h3>Name: {props.name}</h3>
//       <p>Population: {props.population} </p>
//     </div>
//   </div>
//   )
// }

export default App;
