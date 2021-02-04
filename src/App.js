import './App.css';
import {Filter, Input, Results} from '@sajari/react-search-ui';


function App() {
  return (
    <div className="App">
        <div className="search-bar" >
            <Input />
        </div>
        <div className="container">
            <div className="filters">
                <Filter type="list" name="category" title="Category" />
            </div>
            <div className="results" >
                <Results />
            </div>
        </div>
    </div>
  );
}

export default App;
