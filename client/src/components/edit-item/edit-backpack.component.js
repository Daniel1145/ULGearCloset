import React, {Component} from 'react';

import EditItem from './edit-item.component';
import { EmptySelect } from '../helpers'
import BackpackForm from '../item-forms/backpack-form.component';

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
            max_load: this.props.data.max_load
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
            <EditItem type="Backpack" childState={this.formatState()} data={this.props.data} loadState={this.loadState}>
                <BackpackForm state={this.state} onChangeMaterials={this.onChangeMaterials} onChangeVolume={this.onChangeVolume} 
                onChangeFrame={this.onChangeFrame} onChangeHipbelt={this.onChangeHipbelt} onChangeMaxLoad={this.onChangeMaxLoad}></BackpackForm>
            </EditItem>
        )
    }
}