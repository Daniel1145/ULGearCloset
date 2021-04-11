import React, {Component} from 'react';
import axios from 'axios';

import { WeightUnits } from '../helpers';
import ItemForm from '../item-forms/item-form.component';

export default class AddItem extends Component {
    constructor(props) {
        super(props);

        this.onChangeManufacturer = this.onChangeManufacturer.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeWeightUnits = this.onChangeWeightUnits.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeHref = this.onChangeHref.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            manufacturer: '',
            name: '',
            weight: 0,
            weight_units: WeightUnits[0],
            href: '',
            price: 0
        }
    }

    onChangeManufacturer(e) {
        this.setState({
            manufacturer: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeWeight(e) {
        this.setState({
            weight: e.target.value
        });
        console.log(e);
    }

    onChangeWeightUnits(val) {
        this.setState({
            weight_units: val
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeHref(e) {
        this.setState({
            href: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        let newItem = {
            manufacturer: this.state.manufacturer,
            name: this.state.name,
            weight: this.state.weight,
            weight_units: this.state.weight_units.value,
            href: this.state.href,
            price: this.state.price
        }
        for (const [key, value] of Object.entries(this.props.childState)) {
            console.log(newItem)
            console.log(key);
            console.log(value);
            newItem = {...newItem, [key]: value};
            console.log(newItem);
        }
        console.log(this.props.childState)

        let url;
        switch (this.props.type) {
            case "Backpack":
                url = 'http://10.0.0.202:4000/backpacks/add'
                break;
            case "Tent":
                url = 'http://10.0.0.202:4000/tents/add'
                break;
            case "Shoes":
                url = 'http://10.0.0.202:4000/shoes/add'
                break;
        }
        console.log(newItem);

        axios.post(url, newItem)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        this.setState({
            manufacturer: '',
            name: '',
            weight: 0,
            weight_units: WeightUnits[0],
            href: '',
            price: 0
        })

        this.props.onSubmit();
    }

    render() {
        return (
            <div style={{marginTop: 20}} className='px-5'>
                <h3>Add New {this.props.type}</h3>
                <form onSubmit={this.onSubmit}>
                    <ItemForm state={this.state} onChangeManufacturer={this.onChangeManufacturer} onChangeName={this.onChangeName} onChangeWeight={this.onChangeWeight} 
                    onChangeWeightUnits={this.onChangeWeightUnits} onChangeHref={this.onChangeHref} onChangePrice={this.onChangePrice}></ItemForm>
                    {this.props.children}
                    <div className="form-group" style={{marginTop: 30}}>
                        <input type="submit" value="Add Item" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}