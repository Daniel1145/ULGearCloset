import React, {Component} from 'react';
import Select from "react-select";

import { Hipbelts } from '../backpacks-helper.component';

export default class HipbeltFilter extends Component {
    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        this.state = {hipbelts: []};
    }

    filter(val) {
        let filter = [];
        this.setState({
            hipbelts: val
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
            <Select value={this.state.hipbelts} className="mb-2" onChange={this.filter} options={Hipbelts} isMulti/>
        </div>
        );
    }
}