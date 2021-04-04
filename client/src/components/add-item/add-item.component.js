import React, {Component} from 'react';
import axios from 'axios';
import Select from 'react-select'

import { WeightUnits } from '../backpacks-helper.component';

const customControlStyles = base => ({
    ...base,
    width: 80,
});

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
        console.log(e);
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
            newItem = {...newItem, [key]: value};
        }

        axios.post('http://10.0.0.202:4000/backpacks/add', newItem)
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
                    <div>
                        <div className="form-group">
                            <label>Manufacturer</label>
                            <input type="text" className="form-control" value={this.state.manufacturer} onChange={this.onChangeManufacturer}></input>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}></input>
                        </div>
                        <div className="form-group">
                            <label>Link to Product Page</label>
                            <input type="text" className="form-control" value={this.state.href} onChange={this.onChangeHref}></input>
                        </div>
                        <div className="form-group">
                            <label>Weight</label>
                            <div className="input-group">
                                <input type="number" min="0" step="0.1" data-number-to-fixed="1" className="form-control" value={this.state.weight} onChange={this.onChangeWeight}></input>
                                <div className="input-group-append input-group-select">
                                    <div>
                                        <Select value={this.state.weight_units} className="form-select" styles={{control: customControlStyles}} onChange={this.onChangeWeightUnits} options={WeightUnits}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <div className="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control" value={this.state.price} onChange={this.onChangePrice}></input>
                            </div>    
                        </div>
                    </div>
                    {this.props.children}
                    <div className="form-group" style={{marginTop: 30}}>
                        <input type="submit" value="Add Item" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}