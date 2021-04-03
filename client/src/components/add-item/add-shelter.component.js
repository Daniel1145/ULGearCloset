import React, {Component} from 'react';
import AddItem from './add-item.component';

export default class AddShelter extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeWeightUnits = this.onChangeWeightUnits.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            type: '',
            name: '',
            weight: 0,
            weight_units: 'g',
            price: 0
        }
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

    onChangeWeightUnits(e) {
        this.setState({
            weight_units: e.target.value
        });
        console.log(e);
    }

    onChangePrice(val) {
        this.setState({
            price: (val) ? val : 0
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('Form Submitted:');
        console.log(`Item Name: ${this.state.name}`)
        console.log(`Item Weight: ${this.state.weight}`)
        console.log(`Item Price: ${this.state.price}`)

        this.setState({
            name: '',
            weight: 0,
            price: 0
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add New Shelter</h3>
                <form onSubmit={this.onSubmit}>
                    <AddItem onChangeName={this.onChangeName} onChangeWeight={this.onChangeWeight} onChangeWeightUnits={this.onChangeWeightUnits} onChangePrice={this.onChangePrice} parentState={this.state}/>
                    <div className="form-group" style={{marginTop: 30}}>
                        <input type="submit" value="Add Shelter" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}