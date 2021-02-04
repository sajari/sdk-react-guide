import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {FieldDictionary, FilterBuilder, Pipeline, SearchProvider} from "@sajari/react-search-ui";

const pipeline = new Pipeline(
    {
        account: '1594153711901724220',
        collection: 'bestbuy',
    },
    'query',
);

const fields = new FieldDictionary({
    title: 'name',
    subtitle: 'brand'
});

const categoryFilter = new FilterBuilder({
    name: 'category',
    field: 'level1',
});

ReactDOM.render(
  <SearchProvider
      search={{pipeline, fields, filters: [categoryFilter],
      }}
      searchOnLoad
  >
    <App />
  </SearchProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
