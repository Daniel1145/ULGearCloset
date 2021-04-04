import React, {Component} from 'react';
import Select from "react-select";

import { getMaterials } from '../backpacks-helper.component';

let Materials;

export default class MaterialFilter extends Component {
    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        this.state = {material: []};
    }

    componentDidMount() {
        getMaterials()
        .then(res => {
            Materials = res;
        });
    }

    filter(val) {
        let filter = [];
        this.setState({
            material: val
        })
        val.forEach((item) => {
            filter.push(item.value)
        })
        this.props.onFilter(filter);
    }

    render() {
        return (
        <div onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
            <Select value={this.state.material} className="mb-2" onChange={this.filter} options={Materials} isMulti/>
        </div>
        );
    }
}