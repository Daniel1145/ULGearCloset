import React, {Component} from 'react';

import EditItem from './edit-item.component';
import ShoesForm from '../item-forms/shoes-form.component';

export default class EditShoes extends Component {
    constructor(props) {
        super(props);

        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeWaterproof = this.onChangeWaterproof.bind(this);
        this.onChangeDrop = this.onChangeDrop.bind(this);
        this.loadState = this.loadState.bind(this);

        this.state = {
            type: "",
            waterproof: "",
            drop: 0
        }
    }

    loadState() {
        this.setState({
            type: { value: this.props.data.type, label: this.props.data.type },
            waterproof: { value: this.props.data.waterproof, label: this.props.data.waterproof },
            drop: this.props.data.drop
        });
    }

    onChangeType(val) {
        this.setState({
            type: val
        });
    }

    onChangeWaterproof(val) {
        this.setState({
            waterproof: val
        });
    }

    onChangeDrop(e) {
        this.setState({
            drop: e.target.value
        });
    }

    onSubmit(e) {
        this.setState({
            type: "",
            waterproof: "",
            drop: 0
        })
    }

    formatState() {
        return {
            type: this.state.type,
            waterproof: this.state.waterproof,
            drop: this.state.drop
        }
    }

    render() {
        return (
            <EditItem type="Shoes" childState={this.formatState()} data={this.props.data} loadState={this.loadState}>
                <ShoesForm state={this.state} onChangeType={this.onChangeType} onChangeWaterproof={this.onChangeWaterproof} 
                onChangeDrop={this.onChangeDrop}></ShoesForm>
            </EditItem>
        )
    }
}