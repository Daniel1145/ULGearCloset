import React, {Component} from 'react';
import AddItem from './add-item.component';

export default class AddShelter extends Component {
    constructor(props) {
        super(props);

        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemWeight = this.onChangeItemWeight.bind(this);
        this.onChangeItemWeightUnits = this.onChangeItemWeightUnits.bind(this);
        this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            item_type: '',
            item_name: '',
            item_weight: 0,
            item_weight_units: 'g',
            item_price: 0
        }
    }

    onChangeItemName(e) {
        this.setState({
            item_name: e.target.value
        });
    }

    onChangeItemWeight(e) {
        this.setState({
            item_weight: e.target.value
        });
        console.log(e);
    }

    onChangeItemWeightUnits(e) {
        this.setState({
            item_weight_units: e.target.value
        });
        console.log(e);
    }

    onChangeItemPrice(val) {
        this.setState({
            item_price: (val) ? val : 0
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('Form Submitted:');
        console.log(`Item Name: ${this.state.item_name}`)
        console.log(`Item Weight: ${this.state.item_weight}`)
        console.log(`Item Price: ${this.state.item_price}`)

        this.setState({
            item_name: '',
            item_weight: 0,
            item_price: 0
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add New Shelter</h3>
                <form onSubmit={this.onSubmit}>
                    <AddItem onChangeItemName={this.onChangeItemName} onChangeItemWeight={this.onChangeItemWeight} onChangeItemWeightUnits={this.onChangeItemWeightUnits} onChangeItemPrice={this.onChangeItemPrice} parentState={this.state}/>
                    <div className="form-group" style={{marginTop: 30}}>
                        <input type="submit" value="Add Shelter" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}