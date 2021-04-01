import React, {Component} from 'react';
import AddItem from './add-item.component';

export default class AddBackpack extends Component {
    constructor(props) {
        super(props);

        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemWeight = this.onChangeItemWeight.bind(this);
        this.onChangeItemWeightUnits = this.onChangeItemWeightUnits.bind(this);
        this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
        this.onChangeItemMaterial = this.onChangeItemMaterial.bind(this);
        this.onChangeItemMaterialOther = this.onChangeItemMaterialOther.bind(this);
        this.onChangeItemVolume = this.onChangeItemVolume.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            item_type: '',
            item_name: '',
            item_weight: 0,
            item_weight_units: 'g',
            item_price: 0,
            item_material: '',
            item_material_other: false,
            item_volume: 0
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

    onChangeItemMaterial(e) {
        this.setState({
            item_material: e.target.value,
            item_material_other: e.target.value === "Other"
        });
    }

    onChangeItemMaterialOther(e) {
        this.setState({
            item_material: e.target.value
        });
    }

    onChangeItemVolume(e) {
        this.setState({
            item_material: e.target.value
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
                <h3>Add New Backpack</h3>
                <form onSubmit={this.onSubmit}>
                    <AddItem onChangeItemName={this.onChangeItemName} onChangeItemWeight={this.onChangeItemWeight} onChangeItemWeightUnits={this.onChangeItemWeightUnits} onChangeItemPrice={this.onChangeItemPrice} parentState={this.state}/>
                    <div className="form-group">
                        <label>Material</label>
                        <div>
                            <select className="form-select mb-3" onChange={this.onChangeItemMaterial} id="materialSelect">
                                <option value="VX21">X-Pac VX21</option>
                                <option value="LS07">Liteskin LS07</option>
                                <option value="VX07">X-Pac VX07</option>
                                <option value="200D Nylon">200D Ripstop Nylon</option>
                                <option value="DCF">DCF</option>
                                <option value="Other">Other</option>
                            </select>
                            <input type="text" className="form-control" value={this.state.item_material_other ? this.state.item_material : ''} onChange={this.onChangeItemMaterialOther} disabled={!this.state.item_material_other} placeholder="Other"></input>
                        </div>
                    </div>
                    <div className="form-group" style={{marginTop: 30}}>
                        <input type="submit" value="Add Backpack" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}