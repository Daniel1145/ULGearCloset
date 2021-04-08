import React, {Component} from 'react';
import axios from 'axios';

import { Modal } from 'react-bootstrap';
import { WeightUnits } from '../helpers';
import ItemForm from '../item-forms/item-form.component';

export default class EditItem extends Component {
    constructor(props) {
        super(props);

        this.onChangeManufacturer = this.onChangeManufacturer.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeWeightUnits = this.onChangeWeightUnits.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeHref = this.onChangeHref.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            manufacturer: '',
            name: '',
            weight: 0,
            weight_units: WeightUnits[0],
            href: '',
            price: 0,
            show: false
        }
    }

    loadState() {
        this.setState({
            manufacturer: this.props.data.manufacturer,
            name: this.props.data.name,
            weight: this.props.data.weight,
            weight_units: { value: this.props.data.weight_units, label: this.props.data.weight_units },
            href: this.props.data.href,
            price: this.props.data.price,
        });
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

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.loadState();
        this.props.loadState();
        this.setState({
            show: true
        });
    }

    onSubmit(e) {
        console.log("test");
        e.preventDefault();

        let updatedItem = {
            manufacturer: this.state.manufacturer,
            name: this.state.name,
            weight: this.state.weight,
            weight_units: this.state.weight_units.value,
            href: this.state.href,
            price: this.state.price
        }
        Object.assign(updatedItem, this.props.childState);
        console.log(updatedItem);

        axios.post('http://10.0.0.202:4000/backpacks/update/'+this.props.data._id, updatedItem)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        this.handleClose();
        window.location.reload();
    }

    render() {
        return (
            <>
                <button className="btn btn-link py-0 px-0" onClick={this.handleShow}>
                    Edit
                </button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Existing {this.props.type}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.onSubmit}>
                            <ItemForm state={this.state} onChangeManufacturer={this.onChangeManufacturer} onChangeName={this.onChangeName} onChangeWeight={this.onChangeWeight} 
                                 onChangeWeightUnits={this.onChangeWeightUnits} onChangeHref={this.onChangeHref} onChangePrice={this.onChangePrice}></ItemForm>
                            {this.props.children}
                            <div className="form-group" style={{marginTop: 30}}>
                                <input type="submit" value="Submit" className='btn btn-primary'/>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}