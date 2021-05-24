import './App.css';
import {Filter, Input, Pagination, Results} from '@sajari/react-search-ui';
import CustomResults from "./components/custom-result";


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
            <CustomResults />
        </div>
        <Pagination />
    </div>
  );
}

export default App;
