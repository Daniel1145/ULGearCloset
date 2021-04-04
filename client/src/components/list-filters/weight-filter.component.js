import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';

export function filterByWeight(filterVal, data) {
    if (filterVal) {
        return data.filter(item => {
            console.log(item);
            console.log(filterVal);
            if (filterVal.minWeight === "" && filterVal.maxWeight === "") {
                return true;
            } else if (filterVal.minWeight === "") {
                return item.weight <= filterVal.maxWeight;
            } else if (filterVal.maxWeight === "") {
                return item.weight >= filterVal.minWeight; 
            } else {
                return item.weight >= filterVal.minWeight && item.weight <= filterVal.maxWeight;
            }
        });
    }
    return data;
}

export function convertWeight(weight, initialUnits, newUnits) {
    switch(initialUnits) {
        case 'g':
            switch(newUnits) {
                case 'g':
                    return weight;
                case 'kg':
                    return weight * 0.001;
                case 'oz':
                    return weight * 0.035274;
                case 'lbs':
                    return weight * 0.002205;
            }
        case 'kg':
            switch(newUnits) {
                case 'g':
                    return weight * 1000;
                case 'kg':
                    return weight;
                case 'oz':
                    return weight * 35.274;
                case 'lbs':
                    return weight * 2.20462;
            }
        case 'oz':
            switch(newUnits) {
                case 'g':
                    return weight * 28.3495;
                case 'kg':
                    return weight * 0.0283495;
                case 'oz':
                    return weight;
                case 'lbs':
                    return weight * 0.0625;
            }
        case 'lbs':
            switch(newUnits) {
                case 'g':
                    return weight * 453.592;
                case 'kg':
                    return weight * 0.453592;
                case 'oz':
                    return weight * 16;
                case 'lbs':
                    return weight;
            }
    }
}

export class WeightFilter extends Component {
    constructor(props) {
        super(props);
        this.onChangeMaxWeight = this.onChangeMaxWeight.bind(this);
        this.onChangeMinWeight = this.onChangeMinWeight.bind(this);
        this.filter = this.filter.bind(this);
        this.state = {
            minWeight: "",
            maxWeight: ""
        };
    }

    onChangeMinWeight(e) {
        this.setState({
            minWeight: e.target.value
        })
        this.filter(e.target.value, this.state.maxWeight);
    }

    onChangeMaxWeight(e) {
        this.setState({
            maxWeight: e.target.value
        })
        this.filter(this.state.maxWeight, e.target.value);
    }

    filter(min, max) {
        this.props.onFilter({minWeight: min, maxWeight: max});
    }

    render() {
        return (
        <div onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
            <Row> 
                <Col><input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control mb-2" value={this.state.minWeight} onChange={this.onChangeMinWeight} placeholder="Min Weight"></input></Col>
                <Col><input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control mb-2" value={this.state.maxWeight} onChange={this.onChangeMaxWeight} placeholder="Max Weight"></input></Col>
            </Row>
        </div>
        );
    }
}