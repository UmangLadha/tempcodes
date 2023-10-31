import { Header , Footer} from './common';
import { Nav, SpotifyPros, TextDiv , Querys , ReadyDiv } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
		<Header/>
		<Nav/>
		<SpotifyPros/>
		<TextDiv/>
		<Querys/>
		<ReadyDiv/>
		<Footer/>
    </div>
  );
}

export default App;
