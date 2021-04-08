import React from 'react';
import Select from 'react-select'

import { Frames, Hipbelts } from '../backpacks-helper.component';

export default function BackpackForm(props) {
    return (
        <>
            <div className="form-group">
                <label>Volume</label>
                <div className="input-group">
                    <input type="number" min="0" step="0.1" data-number-to-fixed="1" className="form-control" value={props.state.volume} onChange={props.onChangeVolume}></input>
                    <div class="input-group-append">
                        <span class="input-group-text">L</span>
                    </div>
                </div>    
            </div>
            <div className="form-group">
                <label>Materials</label>
                <input type="text" className="form-control" value={props.state.materials} onChange={props.onChangeMaterials}></input>
            </div>
            <div className="form-group">
                <label>Frame</label>
                <div>
                    <Select value={props.state.frame} className="form-select mb-3" onChange={props.onChangeFrame} options={Frames}/>
                </div>
            </div>
            <div className="form-group">
                <label>Hipbelt</label>
                <div>
                    <Select value={props.state.hipbelt} className="form-select mb-3" onChange={props.onChangeHipbelt} options={Hipbelts}/>
                </div>
            </div>
            <div className="form-group">
                <label>Max Load</label>
                <div className="input-group">
                    <input type="number" min="0" step="0.1" data-number-to-fixed="1" className="form-control" value={props.state.max_load} onChange={props.onChangeMaxLoad}></input>
                    <div className="input-group-append">
                        <span class="input-group-text">lbs</span>
                    </div>
                </div>
            </div>
        </>
    )
}