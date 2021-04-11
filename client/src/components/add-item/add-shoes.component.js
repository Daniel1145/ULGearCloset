import React, {Component} from 'react';

import AddItem from './add-item.component';
import ShoesForm from '../item-forms/shoes-form.component';

export default class AddShoes extends Component {
    constructor(props) {
        super(props);

        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeWaterproof = this.onChangeWaterproof.bind(this);
        this.onChangeDrop = this.onChangeDrop.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            type: "",
            waterproof: "",
            drop: 0
        }
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
            type: this.state.type.value,
            waterproof: this.state.waterproof.value,
            drop: this.state.drop
        }
    }

    render() {
        return (
            <AddItem type="Shoes" childState={this.formatState()} onSubmit={this.onSubmit}>
                <ShoesForm state={this.state} onChangeType={this.onChangeType} onChangeWaterproof={this.onChangeWaterproof} 
                onChangeDrop={this.onChangeDrop}></ShoesForm>
            </AddItem>
        )
    }
}