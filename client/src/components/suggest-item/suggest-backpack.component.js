import React, {Component} from 'react';

import SuggestItem from './suggest-item.component';
import { EmptySelect } from '../helpers';
import BackpackForm from '../item-forms/backpack-form.component';

export default class SuggestBackpack extends Component {
    constructor(props) {
        super(props);

        this.onChangeMaterials = this.onChangeMaterials.bind(this);
        this.onChangeVolume = this.onChangeVolume.bind(this);
        this.onChangeFrame = this.onChangeFrame.bind(this);
        this.onChangeHipbelt = this.onChangeHipbelt.bind(this);
        this.onChangeMaxLoad = this.onChangeMaxLoad.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            materials: "",
            volume: 0,
            frame: EmptySelect,
            hipbelt: EmptySelect,
            max_load: 0
        }
    }

    onChangeMaterials(e) {
        this.setState({
            materials: e.target.value
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

    onChangeMaxLoad(e) {
        this.setState({
            max_load: e.target.value
        });
    }

    onSubmit(e) {
        this.setState({
            materials: EmptySelect,
            volume: 0,
            frame: EmptySelect,
            hipbelt: EmptySelect,
            max_load: 0
        })
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
            <SuggestItem type="Backpack" childState={this.formatState()} onSubmit={this.onSubmit}>
                <BackpackForm state={this.state} onChangeMaterials={this.onChangeMaterials} onChangeVolume={this.onChangeVolume} 
                onChangeFrame={this.onChangeFrame} onChangeHipbelt={this.onChangeHipbelt} onChangeMaxLoad={this.onChangeMaxLoad}></BackpackForm>
            </SuggestItem>
        )
    }
}