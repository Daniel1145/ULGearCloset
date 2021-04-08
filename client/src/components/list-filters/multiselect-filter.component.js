import React, {Component} from 'react';
import Select from "react-select";

export default class MultiselectFilter extends Component {
    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        this.state = {selected: []};
    }

    filter(val) {
        let filter = [];
        this.setState({
            selected: val
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
            <Select value={this.state.selected} className="mb-2" onChange={this.filter} options={this.props.list} isMulti/>
        </div>
        );
    }
}