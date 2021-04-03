import React, {Component} from 'react';
import EditItem from './edit-item.component';
import Select from 'react-select'
import axios from 'axios';

const materials = [
    { value: "X-Pac VX21", label: "X-Pac VX21"},
    { value: "X-Pac VX07", label: "X-Pac VX07"},
    { value: "Liteskin LS07", label: "Liteskin LS07"},
    { value: "200D Ripstop Nylon", label: "200D Ripstop Nylon"},
    { value: "DCF", label: "DCF"},
    { value: "Other", label: "Other"}
];
const frames = [
    { value: "Frame", label: "Frame"},
    { value: "Frameless", label: "Frameless"},
    { value: "Removable", label: "Removable"}
];
const hipbelts = [
    { value: "Hipbelt", label: "Hipbelt"},
    { value: "No Hipbelt", label: "No Hipbelt"},
    { value: "Removable", label: "Removable"}
]
const emptySelect = { value: "", label: ""}

export default class EditBackpack extends Component {
    constructor(props) {
        super(props);

        this.onChangeMaterial = this.onChangeMaterial.bind(this);
        this.onChangeMaterialOther = this.onChangeMaterialOther.bind(this);
        this.onChangeVolume = this.onChangeVolume.bind(this);
        this.onChangeFrame = this.onChangeFrame.bind(this);
        this.onChangeHipbelt = this.onChangeHipbelt.bind(this);
        this.loadState = this.loadState.bind(this);

        this.state = {
            material: emptySelect,
            material_other: false,
            volume: 0,
            frame: emptySelect,
            hipbelt: emptySelect,
        }
    }

    loadState() {
        console.log(this.props);
        this.setState({
            // name: this.props.data.name,
            // weight: this.props.data.weight,
            // weight_units: { value: this.props.data.weight_units, label: this.props.data.weight_units },
            // href: this.props.data.href,
            // price: this.props.data.price,
            material: { value: this.props.data.material, label: this.props.data.material },
            material_other: !materials.map((curr) => {return curr.value}).includes(this.props.data.material),
            volume: this.props.data.volume,
            frame: { value: this.props.data.frame, label: this.props.data.frame },
            hipbelt: { value: this.props.data.hipbelt, label: this.props.data.hipbelt }
        });
    }

    onChangeMaterial(val) {
        if (val.value === "Other") {
            this.setState({
                material: emptySelect,
                material_other: true
            })
        } else {
            this.setState({
                material: val,
                material_other: false
            });
        }

    }

    onChangeMaterialOther(e) {
        this.setState({
            material: { label: e.target.value, value: e.target.value}
        });
    }

    onChangeVolume(e) {
        this.setState({
            volume: e.target.value
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

    formatState() {
        return {
            material: this.state.material.value,
            volume: this.state.volume,
            frame: this.state.frame.value,
            hipbelt: this.state.hipbelt.value,
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
                    <label>Material</label>
                    <div>
                        <Select value={this.state.material} className="mb-3" onChange={this.onChangeMaterial} options={materials} required/>
                        <input type="text" className="form-control mb-3" value={this.state.material_other ? this.state.material.value : ''} onChange={this.onChangeMaterialOther} disabled={!this.state.material_other} placeholder="Other"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label>Frame</label>
                    <div>
                        <Select value={this.state.frame} className="form-select mb-3" onChange={this.onChangeFrame} options={frames}/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Hipbelt</label>
                    <div>
                        <Select value={this.state.hipbelt} className="form-select mb-3" onChange={this.onChangeHipbelt} options={hipbelts}/>
                    </div>
                </div>
            </EditItem>
        )
    }
}