import React, {Component} from 'react';
import Select from "react-select";
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { customFilter, FILTER_TYPES, textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import EditBackpack from './edit-item/edit-backpack.component';
import TextFilter from './list-filters/text-filter.component';
import MaterialFilter from './list-filters/material-filter.component';
import FrameFilter from './list-filters/frame-filter.component';
import HipbeltFilter from './list-filters/hipbelt-filter.component';
import {PriceFilter, filterByPrice} from './list-filters/price-filter.component';
import {VolumeFilter, filterByVolume} from './list-filters/volume-filter.component';
import {MaxLoadFilter, filterByMaxLoad} from './list-filters/maxload-filter.component';
import {WeightFilter, filterByWeight, convertWeight} from './list-filters/weight-filter.component';
import {multiExactFilter, WeightUnits, EmptySelect} from './backpacks-helper.component';

const Units = [...WeightUnits, {value: "", label: "No Conversion"}];

export default class BackpacksList extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeWeightUnit = this.onChangeWeightUnit.bind(this);

        this.state = {
            backpacks: [],
            weight_unit: EmptySelect
        };
    }

    componentDidMount() {
        axios.get('http://10.0.0.202:4000/backpacks')
            .then(res => {
                this.setState({
                    backpacks: res.data
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    onChangeWeightUnit(val) {
        this.setState({
            weight_unit: val
        })
    }

    render() {
        const columns = [{
            dataField: "manufacturer", 
            text: "Manufacturer", 
            sort: true, 
            filter: textFilter(), 
            headerFormatter: TextFilter
        }, {
            dataField: "name", 
            text: "Product Name", 
            sort: true, 
            filter: textFilter(), 
            headerFormatter: TextFilter
        }, {
            dataField: "materials", 
            text: "Materials", 
            sort: true,
            filter: customFilter({
                type: FILTER_TYPES.MULTISELECT
            }), 
            filterRenderer: (onFilter, column) =>
                <MaterialFilter onFilter={ onFilter } column = { column } />,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } }>
                <Row className="ml-1">{ column.text }{ sortElement }</Row>
                { filterElement }
            </div>
        }, {
            dataField: "frame", 
            text: "Frame", 
            sort: true,
            filter: customFilter({
                onFilter: multiExactFilter
            }), 
            filterRenderer: (onFilter, column) =>
                <FrameFilter onFilter={ onFilter } column = { column } />,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } }>
                <Row className="ml-1">{ column.text }{ sortElement }</Row>
                { filterElement }
            </div>
        }, {
            dataField: "hipbelt", 
            text: "Hipbelt", 
            sort: true,
            filter: customFilter({
                onFilter: multiExactFilter
            }), 
            filterRenderer: (onFilter, column) =>
                <HipbeltFilter onFilter={ onFilter } column = { column } />,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } }>
                <Row className="ml-1">{ column.text }{ sortElement }</Row>
                { filterElement }
            </div>
        }, {
            dataField: "volume", 
            text: "Volume", 
            formatter: (cell, row) => (
                <div>
                    <label>{row.volume}L</label>
                </div>
            ), 
            sort: true,
            filter: customFilter({
                onFilter: filterByVolume
            }), 
            filterRenderer: (onFilter, column) =>
                <VolumeFilter onFilter={ onFilter } column = { column } />,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } }>
                <Row className="ml-1">{ column.text }{ sortElement }</Row>
                { filterElement }
            </div>
        }, {
            dataField: "max_load", 
            text: "Max Load", 
            formatter: (cell, row) => (
                <div>
                    <label>{row.max_load}lbs</label>
                </div>
            ), 
            sort: true,
            filter: customFilter({
                onFilter: filterByMaxLoad
            }), 
            filterRenderer: (onFilter, column) =>
                <MaxLoadFilter onFilter={ onFilter } column = { column } />,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } }>
                <Row className="ml-1">{ column.text }{ sortElement }</Row>
                { filterElement }
            </div>
        }, {
            dataField: "price", 
            text: "Price", 
            formatter: (cell, row) => (
                <div>
                    <label>${row.price}</label>
                </div>
            ), 
            sort: true,
            filter: customFilter({
                onFilter: filterByPrice
            }), 
            filterRenderer: (onFilter, column) =>
                <PriceFilter onFilter={ onFilter } column = { column } />,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } }>
                <Row className="ml-1">{ column.text }{ sortElement }</Row>
                { filterElement }
            </div>
        }, {
            dataField: "weight", 
            text: "Weight", 
            formatter: (cell, row, rowIndex, formatExtraData) => {
                if (formatExtraData === "")
                    return(
                    <div>
                        <label>{row.weight.toFixed(2)}{row.weight_units}</label>
                    </div>
                ); 
                else 
                    return(
                    <div>
                        <label>{convertWeight(row.weight, row.weight_units, formatExtraData).toFixed(2)}{formatExtraData}</label>
                    </div>
                );
            }, 
            formatExtraData: this.state.weight_unit.value,
            sort: true,
            filter: customFilter({
                onFilter: filterByWeight
            }), 
            filterRenderer: (onFilter, column) =>
                <WeightFilter onFilter={ onFilter } column = { column } />,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } } onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
            } }>
                <Row className="ml-1">
                    <Col className='px-0 mt-2'>{ column.text }{ sortElement }</Col>
                    <Col className='px-3 ml-3'><Select value={this.state.weight_unit} className="mb-2" onChange={this.onChangeWeightUnit} options={Units}/></Col>
                </Row>
                { filterElement }
            </div>,
            sortFunc: (a, b, order, dataField, rowA, rowB) => {
                let aGrams = convertWeight(a, rowA.weight_units, "g");
                let bGrams = convertWeight(b, rowB.weight_units, "g");
                if (order === 'asc') {
                    return bGrams - aGrams;
                }
                return aGrams - bGrams;
            }
        }, {
            dataField: "href", 
            text: "Link", 
            formatter: (cell, row) => (
                <div>
                  <a href={row.href}> Link </a>
                </div>
            ),
            headerStyle: (colum, colIndex) => {
                return { width: '80px' };
              }
        }, {
            dataField: "df1", 
            text: "", 
            formatter: (cell, row) => (
                <div>
                    <EditBackpack data={row}/>
                </div>
            ),
            headerStyle: (colum, colIndex) => {
                return { width: '80px' };
              }
        }];

        return (
            <div className='px-5'>
                <h2 className='mb-3 ml-1'>Backpacks</h2>
                <BootstrapTable bootstrap4 keyField='name' data={ this.state.backpacks } columns={ columns } defaultSorted= { [{dataField: 'name', order: 'desc'}]} filter={ filterFactory() }/>
            </div>
        )
    }
}