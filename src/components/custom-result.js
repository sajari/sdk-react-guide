import * as React from "react";
import {useSearch} from '@sajari/react-hooks';
import { Button } from '@sajari/react-components';

function CustomResults() {
    const {results = []} = useSearch();

    function renderResult(result) {
        const values = result.values
        return (
            <div className="card">
                    <div className="result-image" >
                        <img src={values.image}  alt={values.name}/>
                    </div>
                    <div className="result-description">
                        <div className="result-name">
                            <h3>
                                {values.name}
                            </h3>
                        </div>
                        <div className="result-brand">{values.brand}</div>
                        <div className="result-price">${values.price}</div>
                    </div>
                <div className="buy-button"><Button appearance="primary">Buy now for ${values.price}</Button></div>
            </div>
        )
    }

    return (
        <div class="results">
            {results.map(renderResult)}
        </div>
    );
}


export default CustomResults;
