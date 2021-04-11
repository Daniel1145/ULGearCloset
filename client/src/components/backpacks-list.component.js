import React, {Component} from 'react';
import Select from "react-select";
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { customFilter, FILTER_TYPES, textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import EditBackpack from './edit-item/edit-backpack.component';
import TextFilter from './list-filters/text-filter.component';
import MultiselectFilter from './list-filters/multiselect-filter.component';
import {WeightUnits, convertWeight, multiExactFilter, Frames, Hipbelts, } from './helpers'
import { MinMaxFilter, minmaxFilter } from './list-filters/minmax-filter.component';
import './DataTable.css'

const Units = [...WeightUnits, {value: "", label: "default"}];
let Materials = [];

export default class BackpacksList extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeWeightUnit = this.onChangeWeightUnit.bind(this);

        this.state = {
            backpacks: [],
            weight_unit: {value: "oz", label: "oz"}
        };
    }

    componentDidMount() {
        axios.get('http://10.0.0.202:4000/backpacks')
            .then(res => {
                let materialsSet = new Set();
                let materials = [];
                res.data.forEach((item) => {
                    let currMaterials = item.materials.split(', ');
                    currMaterials.forEach((material) => {
                        if (!materialsSet.has(material)) {
                            materials.push({value: material, label: material});
                            materialsSet.add(material);
                        }
                    })
                });
                Materials = materials;

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
            formatter: (cell, row) => (
                <div>
                  <a href={row.href}> {row.name} </a>
                </div>
            ),
            headerFormatter: TextFilter
        }, {
            dataField: "materials", 
            text: "Materials", 
            sort: true,
            filter: customFilter({
                type: FILTER_TYPES.MULTISELECT
            }), 
            filterRenderer: (onFilter, column) =>
                <MultiselectFilter onFilter={ onFilter } column={ column } list={ Materials }/>,
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
                onFilter: (filterVal, data) => {
                    return multiExactFilter(filterVal, data, "frame");
                }
            }),
            filterRenderer: (onFilter, column) =>
                <MultiselectFilter onFilter={ onFilter } column={ column } list={ Frames }/>,
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
                onFilter: (filterVal, data) => {
                    return multiExactFilter(filterVal, data, "hipbelt");
                }
            }), 
            filterRenderer: (onFilter, column) =>
                <MultiselectFilter onFilter={ onFilter } column={ column } list={ Hipbelts }/>,
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
                onFilter: (filterVal, data) => {
                    return minmaxFilter(filterVal, data, "volume");
                }
            }), 
            filterRenderer: (onFilter, column) =>
                <MinMaxFilter onFilter={ onFilter } column = { column } name={ "volume" }/>,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } }>
                <Row className="ml-1">{ column.text }{ sortElement }</Row>
                { filterElement }
            </div>,
            headerStyle: (colum, colIndex) => {
                return { width: '8%'  };
            }
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
                onFilter: (filterVal, data) => {
                    return minmaxFilter(filterVal, data, "max_load");
                }
            }), 
            filterRenderer: (onFilter, column) =>
                <MinMaxFilter onFilter={ onFilter } column = { column } name={ "max_load" }/>,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } }>
                <Row className="ml-1">{ column.text }{ sortElement }</Row>
                { filterElement }
            </div>,
            headerStyle: (colum, colIndex) => {
                return { width: '8%'  };
            }
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
                onFilter: (filterVal, data) => {
                    return minmaxFilter(filterVal, data, "price");
                }
            }), 
            filterRenderer: (onFilter, column) =>
                <MinMaxFilter onFilter={ onFilter } column = { column } name={ "price" }/>,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } }>
                <Row className="ml-1">{ column.text }{ sortElement }</Row>
                { filterElement }
            </div>,
            headerStyle: (colum, colIndex) => {
                return { width: '8%'  };
            }
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
                onFilter: (filterVal, data) => {
                    return minmaxFilter(filterVal, data, "weight");
                }
            }), 
            filterRenderer: (onFilter, column) =>
                <MinMaxFilter onFilter={ onFilter } column = { column } name={ "weight" }/>,
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => 
            <div style={ { display: 'flex', flexDirection: 'column' } } onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
            } }>
                <Col className='px-0 mt-2'>{ column.text }{ sortElement }</Col>
                <Select value={this.state.weight_unit} className="mb-2" onChange={this.onChangeWeightUnit} options={Units}/>
                { filterElement }
            </div>,
            sortFunc: (a, b, order, dataField, rowA, rowB) => {
                let aGrams = convertWeight(a, rowA.weight_units, "g");
                let bGrams = convertWeight(b, rowB.weight_units, "g");
                if (order === 'asc') {
                    return bGrams - aGrams;
                }
                return aGrams - bGrams;
            },
            headerStyle: (colum, colIndex) => {
                return { width: '8%'  };
            }
        }, {
            dataField: "df1", 
            text: "", 
            formatter: (cell, row) => (
                <div>
                    <EditBackpack data={row}/>
                </div>
            )
        }];

        return (
            <div className='px-5'>
                <h2 className='mt-3'>Backpacks</h2>
                <BootstrapTable bootstrap4 keyField='name' data={ this.state.backpacks } columns={ columns } defaultSorted= { [{dataField: 'manufacturer', order: 'desc'}]} filter={ filterFactory() }/>
            </div>
        )
    }
}