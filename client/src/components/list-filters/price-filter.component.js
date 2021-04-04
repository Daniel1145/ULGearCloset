import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';

export function filterByPrice(filterVal, data) {
    if (filterVal) {
        return data.filter(item => {
            if (filterVal.minPrice === "" && filterVal.maxPrice === "") {
                return true;
            } else if (filterVal.minPrice === "") {
                return item.price <= filterVal.maxPrice;
            } else if (filterVal.maxPrice === "") {
                return item.price >= filterVal.minPrice; 
            } else {
                return item.price >= filterVal.minPrice && item.price <= filterVal.maxPrice;
            }
        });
    }
    return data;
}

export class PriceFilter extends Component {
    constructor(props) {
        super(props);
        this.onChangeMaxPrice = this.onChangeMaxPrice.bind(this);
        this.onChangeMinPrice = this.onChangeMinPrice.bind(this);
        this.filter = this.filter.bind(this);
        this.state = {
            minPrice: "",
            maxPrice: ""
        };
    }

    onChangeMinPrice(e) {
        this.setState({
            minPrice: e.target.value
        })
        this.filter(e.target.value, this.state.maxPrice);
    }

    onChangeMaxPrice(e) {
        this.setState({
            maxPrice: e.target.value
        })
        this.filter(this.state.maxPrice, e.target.value);
    }

    filter(min, max) {
        this.props.onFilter({minPrice: min, maxPrice: max});
    }

    render() {
        return (
        <div onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
            <Row> 
                <Col><input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control mb-2" value={this.state.minPrice} onChange={this.onChangeMinPrice} placeholder="Min Price"></input></Col>
                <Col><input type="number" min="0" step="0.01" data-number-to-fixed="2" className="form-control mb-2" value={this.state.maxPrice} onChange={this.onChangeMaxPrice} placeholder="Max Price"></input></Col>
            </Row>
        </div>
        );
    }
}