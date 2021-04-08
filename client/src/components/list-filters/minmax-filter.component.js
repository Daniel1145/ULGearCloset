import React, {Component} from 'react';

export function minmaxFilter(filterVal, data, name) {
    if (filterVal) {
        return data.filter(item => {
            if (filterVal.min === "" && filterVal.max === "") {
                return true;
            } else if (filterVal.min === "") {
                return item[name] <= filterVal.max;
            } else if (filterVal.max === "") {
                return item[name] >= filterVal.min; 
            } else {
                return item[name] >= filterVal.min && item[name] <= filterVal.max;
            }
        });
    }
    return data;
}

export class MinMaxFilter extends Component {
    constructor(props) {
        super(props);
        this.onChangeMax = this.onChangeMax.bind(this);
        this.onChangeMin = this.onChangeMin.bind(this);
        this.filter = this.filter.bind(this);
        this.state = {
            min: "",
            max: ""
        };
    }

    onChangeMin(e) {
        this.setState({
            min: e.target.value
        })
        this.filter(e.target.value, this.state.max);
    }

    onChangeMax(e) {
        this.setState({
            max: e.target.value
        })
        this.filter(this.state.min, e.target.value);
    }

    filter(min, max) {
        this.props.onFilter({min: min, max: max});
    }

    render() {
        return (
        <div onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
            <input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control mb-2" value={this.state.min} onChange={this.onChangeMin} placeholder={`Min ${this.props.name}`}></input>
            <input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control mb-2" value={this.state.max} onChange={this.onChangeMax} placeholder={`Max ${this.props.name}`}></input>
        </div>
        );
    }
}