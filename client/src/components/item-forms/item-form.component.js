import React from 'react';
import Select from 'react-select'

import { WeightUnits } from '../helpers';

const customControlStyles = base => ({
    ...base,
    width: 80,
});

export default function ItemForm(props) {
    return (
        <div>
            <div className="form-group">
                <label>Manufacturer</label>
                <input type="text" className="form-control" value={props.state.manufacturer} onChange={props.onChangeManufacturer}></input>
            </div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={props.state.name} onChange={props.onChangeName}></input>
            </div>
            <div className="form-group">
                <label>Link to Product Page</label>
                <input type="text" className="form-control" value={props.state.href} onChange={props.onChangeHref}></input>
            </div>
            <div className="form-group">
                <label>Weight</label>
                <div className="input-group">
                    <input type="number" min="0" step="0.1" data-number-to-fixed="1" className="form-control" value={props.state.weight} onChange={props.onChangeWeight}></input>
                    <div className="input-group-append input-group-select">
                        <div>
                            <Select value={props.state.weight_units} className="form-select" styles={{control: customControlStyles}} onChange={props.onChangeWeightUnits} options={WeightUnits}/>
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
                    <input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control" value={props.state.price} onChange={props.onChangePrice}></input>
                </div>    
            </div>
        </div>
    );
}