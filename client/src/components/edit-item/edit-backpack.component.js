import React, {Component} from 'react';
import Select from 'react-select'

import EditItem from './edit-item.component';
import { Frames, Hipbelts, EmptySelect } from '../backpacks-helper.component';

export default class EditBackpack extends Component {
    constructor(props) {
        super(props);

        this.onChangeMaterials = this.onChangeMaterials.bind(this);
        this.onChangeVolume = this.onChangeVolume.bind(this);
        this.onChangeFrame = this.onChangeFrame.bind(this);
        this.onChangeHipbelt = this.onChangeHipbelt.bind(this);
        this.onChangeMaxLoad = this.onChangeMaxLoad.bind(this);
        this.loadState = this.loadState.bind(this);

        this.state = {
            materials: '',
            volume: 0,
            frame: EmptySelect,
            hipbelt: EmptySelect,
            max_load: 0
        }
    }

    loadState() {
        this.setState({
            materials: this.props.data.materials,
            volume: this.props.data.volume,
            frame: { value: this.props.data.frame, label: this.props.data.frame },
            hipbelt: { value: this.props.data.hipbelt, label: this.props.data.hipbelt },
            maxLoad: this.props.data.max_load
        });
    }

    onChangeMaterials(e) {
        this.setState({
            materials: e.target.value
        });
    }

    onChangeVolume(e) {
        this.setState({
            volume: parseInt(e.target.value)
        });
    }

    onChangeFrame(val) {
        this.setState({
            frame: val
        });
    }

    onChangeHipbelt(val) {
        this.setState({
            hipbelt: val
        });
    }

    onChangeMaxLoad(e) {
        this.setState({
            max_load: parseInt(e.target.value)
        });
    }

    formatState() {
        return {
            materials: this.state.materials,
            volume: this.state.volume,
            frame: this.state.frame.value,
            hipbelt: this.state.hipbelt.value,
            max_load: this.state.max_load
        }
    }

    render() {
        return (
            <EditItem type="Backpack" childState={this.formatState()} data={this.props.data} onSubmit={this.onSubmit} loadState={this.loadState}>
                <div className="form-group">
                    <label>Volume</label>
                    <div className="input-group">
                        <input type="number" min="0" step="0.1" data-number-to-fixed="1" className="form-control" value={this.state.volume} onChange={this.onChangeVolume}></input>
                        <div class="input-group-append">
                            <span class="input-group-text">L</span>
                        </div>
                    </div>    
                </div>
                <div className="form-group">
                    <label>Materials</label>
                    <input type="text" className="form-control" value={this.state.materials} onChange={this.onChangeMaterials}></input>
                </div>
                <div className="form-group">
                    <label>Frame</label>
                    <div>
                        <Select value={this.state.frame} className="form-select mb-3" onChange={this.onChangeFrame} options={Frames}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Hipbelt</label>
                    <div>
                        <Select value={this.state.hipbelt} className="form-select mb-3" onChange={this.onChangeHipbelt} options={Hipbelts}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Max Load</label>
                    <div className="input-group">
                        <input type="number" min="0" step="0.1" data-number-to-fixed="1" className="form-control" value={this.state.max_load} onChange={this.onChangeMaxLoad}></input>
                        <div className="input-group-append">
                            <span class="input-group-text">lbs</span>
                        </div>
                    </div>
                </div>
            </EditItem>
        )
    }
}