import React, {Component} from 'react';
import Select from "react-select";

import { Frames } from '../backpacks-helper.component';

export default class FrameFilter extends Component {
    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        this.state = {frames: []};
    }

    filter(val) {
        let filter = [];
        this.setState({
            frames: val
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
            <Select value={this.state.frames} className="mb-2" onChange={this.filter} options={Frames} isMulti/>
        </div>
        );
    }
}