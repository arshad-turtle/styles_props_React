// import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Sample from './Sample'
function App() {
  
    const myStyle={
      height:'100vh',
      // marginTop:'-70px',
      fontSize:'150px'
    
      
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Sample name="arshad" xs ="Good" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Sample name="arshad" styles ={myStyle}/>
      </header>
    </div>
  );
}

export default App;
