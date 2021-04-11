import React from 'react';
import Select from 'react-select'

import {WallTypes, Freestanding} from '../helpers'

export default function TentForm(props) {
    return (
        <>
            <div className="form-group">
                <label>Wall Type</label>
                <div>
                    <Select value={props.state.wall} className="form-select mb-3" onChange={props.onChangeWall} options={WallTypes}/>
                </div>
            </div>

            <div className="form-group">
                <label>Main Material</label>
                <input type="text" className="form-control" value={props.state.material} onChange={props.onChangeMaterial}></input>
            </div>

            <div className="form-group">
                <label>Min Stakes</label>
                <input type="number" min="0" className="form-control" value={props.state.stakes.min} onChange={props.onChangeMinStakes}></input>
            </div>

            <div className="form-group">
                <label>Max Stakes</label>
                <input type="number" min="0" className="form-control" value={props.state.stakes.max} onChange={props.onChangeMaxStakes}></input>
            </div>

            <div className="form-group">
                <label>Max People</label>
                <input type="number" min="0" className="form-control" value={props.state.max_people} onChange={props.onChangeMaxPeople}></input>
            </div>

            <div className="form-group">
                <label>Floor Length</label>
                <div className="input-group">
                    <input type="number" min="0" step="0.1" data-number-to-fixed="1" className="form-control" value={props.state.length} onChange={props.onChangeFloorLength}></input>
                    <div className="input-group-append">
                        <span class="input-group-text">in</span>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label>Floor Area</label>
                <div className="input-group">
                    <input type="number" min="0" step="0.1" data-number-to-fixed="1" className="form-control" value={props.state.floor_area} onChange={props.onChangeFloorArea}></input>
                    <div className="input-group-append">
                        <span class="input-group-text">sq ft</span>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label>Freestanding/Non-Freestanding</label>
                <div>
                    <Select value={props.state.freestanding} className="form-select mb-3" onChange={props.onChangeStanding} options={Freestanding}/>
                </div>
            </div>
        </>
    )
}