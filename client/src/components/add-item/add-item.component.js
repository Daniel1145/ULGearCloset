import React from 'react';

export default function AddItem(props) {
    return (
        <div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={props.parentState.item_name} onChange={props.onChangeItemName}></input>
            </div>
            <div className="form-group">
                <label>Weight</label>
                <div className="input-group">
                    <input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control" value={props.parentState.item_weight} onChange={props.onChangeItemWeight}></input>
                    <div className="input-group-append">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {props.parentState.item_weight_units}
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button" value="g" onClick={props.onChangeItemWeightUnits}>g</button>
                            <button class="dropdown-item" type="button" value="kg" onClick={props.onChangeItemWeightUnits}>kg</button>
                            <button class="dropdown-item" type="button" value="oz" onClick={props.onChangeItemWeightUnits}>oz</button>
                            <button class="dropdown-item" type="button" value="lbs" onClick={props.onChangeItemWeightUnits}>lbs</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label>Price</label>
                <div className="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control" value={props.parentState.item_price} onChange={props.onChangeItemPrice}></input>
                </div>    
            </div>
        </div>
    );
}