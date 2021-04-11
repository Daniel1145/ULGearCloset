import React from 'react';
import Select from 'react-select'

import {ShoeTypes, Waterproof} from '../helpers'

export default function ShoesForm(props) {
    return (
        <>
            <div className="form-group">
                <label>Type</label>
                <div>
                    <Select value={props.state.type} className="form-select mb-3" onChange={props.onChangeType} options={ShoeTypes}/>
                </div>
            </div>

            <div className="form-group">
                <label>Waterproof</label>
                <div>
                    <Select value={props.state.waterproof} className="form-select mb-3" onChange={props.onChangeWaterproof} options={Waterproof}/>
                </div>
            </div>

            <div className="form-group">
                <label>Drop</label>
                <div className="input-group">
                    <input type="number" min="0" step="0.1" data-number-to-fixed="1" className="form-control" value={props.state.drop} onChange={props.onChangeDrop}></input>
                    <div className="input-group-append">
                        <span class="input-group-text">mm</span>
                    </div>
                </div>
            </div>
        </>
    )
}