# The Ultimate Sajari React SDK Guide

## Getting started with the Sajari React SDK

This guide will teach you how to set up a new application from scratch with [Create React App](https://github.com/facebook/create-react-app) and the [Sajari React SDK](https://github.com/sajari/sdk-react).

Pre-requisites
[Create React App](https://github.com/facebook/create-react-app)


##  1. Create a new react app

``` bash
npx create-react-app sajari-app
cd my-app
npm start
This will create your frontend app. For more details on create-react-app take a look at the React documentation.
```

This will create your frontend app. For more details on create-react-app take a look at the [React documentation](https://reactjs.org/docs/create-a-new-react-app.html).

## 2. Install the Sajari Search UI package

> The Sajari Search UI provides easy to use search components to quickly build a beautiful search interface. Let's run through building an example UI using the @sajari/react-search-ui package.

Install the package using `yarn add` or `npm install`.

```
yarn add @sajari/react-search-ui
```

## 3. Add the SearchProvider

The [SearchProvider](https://react.docs.sajari.com/hooks/searchprovider) should be used as a wrapper for the entire application to provide a way to share application state between hooks, for example, the current query, active filters or the search response.

Wrap the App with the `SearchProvider`.


``` javascript
=== index.js ===

import {SearchProvider} from "@sajari/react-search-ui";

ReactDOM.render(
<SearchProvider>
<App />
</SearchProvider>,
document.getElementById('root')
);
```

Start the app with `npm run start`


Now we should see the following error message: 

❌ TypeError: Cannot read property 'pipeline' of undefined

Although we have wrapped the app in our search provider, we have not configured the search. 


## 4. Configure the Search
We need to tell the search provider which account, collection and pipeline to use for the search. The account is our Sajari account, the collection is where our data is stored and the pipeline specifies the search configuration.

For this guide we will use a Sajari demo account. At the top of the index.js file we will import the Pipeline class and configure our pipeline. 

> Replace the **account**, **collection** and the **pipeline** name (here it is *query*) with your own collection details to search your data instead of using the demo dataset. 

```javascript
=== index.js ===

import {Pipeline, SearchProvider} from "@sajari/react-search-ui";

const pipeline = new Pipeline(
    {
        account: '1594153711901724220',
        collection: 'bestbuy',
    },
    'query',
);
```

Next we need to pass the pipeline configuration to the SearchProvider like so:

``` javascript
=== index.js ===

<SearchProvider
      search={{pipeline}}
      searchOnLoad
  >
```

In the above code snippet we’ve passed the pipeline configuration to the search property. You will also notice that we’ve added a second property called searchOnLoad which will trigger a search on the initial load of the component.

Start up the app, and you will see that the error has disappeared. However, so far we are still only seeing the default React App screen. Let’s add our Search. 

## 5. Adding the Search UI
In App.js let’s start by deleting the default React landing page by removing the <header> tags and anything in between.

Next, we important the components we want to use for the UI. Let’s start simple with a search input and the results component.

```javascript
=== App.js ===

import './App.css';
import {Input, Results } from '@sajari/react-search-ui';


function App() {
  return (
    <div className="App">
        <div className="search-bar" >
            <Input />
        </div>
        <div className="results" >
            <Results />
        </div>
    </div>
  );
}

export default App;
```
Note that we added a couple of divs around the Input and the Results component to add some styling. Let’s do that real quick.

Replace the entire content in App.css with the following:

```css
=== App.css ===

.search-bar{
  margin: 50px 400px ;
}
.results{
  padding:20px;
  text-align: left;
  max-width: 1200px;
}
```

Now you should see a search input field and results when loading the app. Note that the results are likely to differ from what is shown below.

The search is now fully functional. Try searching for watches or laptops or other products.  

<img src="./assets/getting-started-1.png" />

