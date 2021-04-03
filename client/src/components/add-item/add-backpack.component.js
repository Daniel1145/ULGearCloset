import React, {Component} from 'react';
import AddItem from './add-item.component';
import Select from 'react-select'

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

export default class AddBackpack extends Component {
    constructor(props) {
        super(props);

        this.onChangeMaterial = this.onChangeMaterial.bind(this);
        this.onChangeMaterialOther = this.onChangeMaterialOther.bind(this);
        this.onChangeVolume = this.onChangeVolume.bind(this);
        this.onChangeFrame = this.onChangeFrame.bind(this);
        this.onChangeHipbelt = this.onChangeHipbelt.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            material: emptySelect,
            material_other: false,
            volume: 0,
            frame: emptySelect,
            hipbelt: emptySelect,
        }
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
            material: e.target.value
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

    onSubmit(e) {
        this.setState({
            material: emptySelect,
            material_other: false,
            volume: 0,
            frame: emptySelect,
            hipbelt: emptySelect,
        })
    }

    formatState() {
        return {
            material: this.state.material.value,
            volume: 0,
            frame: this.state.frame.value,
            hipbelt: this.state.hipbelt.value,
        }
    }

    render() {
        return (
            <AddItem type="Backpack" childState={this.formatState()} onSubmit={this.onSubmit}>
                <label>Material</label>
                <div>
                    <Select value={this.state.material} className="mb-3" onChange={this.onChangeMaterial} options={materials} required/>
                    <input type="text" className="form-control mb-3" value={this.state.material_other ? this.state.material.value : ''} onChange={this.onChangeMaterialOther} disabled={!this.state.material_other} placeholder="Other"></input>
                </div>
                <label>Frame</label>
                <div>
                    <Select value={this.state.frame} className="form-select mb-3" onChange={this.onChangeFrame} options={frames}/>
                </div>
                <label>Hipbelt</label>
                <div>
                    <Select value={this.state.hipbelt} className="form-select mb-3" onChange={this.onChangeHipbelt} options={hipbelts}/>
                </div>
            </AddItem>
        )
    }
}