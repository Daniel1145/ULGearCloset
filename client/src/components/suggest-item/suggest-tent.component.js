import React, {Component} from 'react';

import SuggestItem from './suggest-item.component';
import {EmptySelect} from '../helpers';
import TentForm from '../item-forms/tent-form.component';

export default class SuggestTent extends Component {
    constructor(props) {
        super(props);

        this.onChangeWall = this.onChangeWall.bind(this);
        this.onChangeMaterial = this.onChangeMaterial.bind(this);
        this.onChangeMinStakes = this.onChangeMinStakes.bind(this);
        this.onChangeTieouts = this.onChangeTieouts.bind(this);
        this.onChangeFloorLength = this.onChangeFloorLength.bind(this);
        this.onChangeFloorArea = this.onChangeFloorArea.bind(this);
        this.onChangeStanding = this.onChangeStanding.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            wall: EmptySelect,
            material: "",
            min_stakes: 0,
            tieouts: 0,
            length: 0,
            floor_area: 0,
            freestanding: EmptySelect
        }
    }

    onChangeWall(val) {
        this.setState({
            wall: val
        });
    }

    onChangeMaterial(e) {
        this.setState({
            material: e.target.value
        });
    }

    onChangeMinStakes(e) {
        this.setState({
            min_stakes: e.target.value
        });
    }

    onChangeTieouts(e) {
        this.setState({
            tieouts: e.target.value
        });
    }

    onChangeFloorLength(e) {
        this.setState({
            length: e.target.value
        });
    }

    onChangeFloorArea(e) {
        this.setState({
            floor_area: e.target.value
        });
    }

    onChangeStanding(val) {
        this.setState({
            freestanding: val
        });
    }

    onSubmit(e) {
        this.setState({
            wall: EmptySelect,
            material: "",
            min_stakes: 0,
            tieouts: 0,
            length: 0,
            floor_area: 0,
            freestanding: EmptySelect
        })
    }

    formatState() {
        return {
            wall: this.state.wall.value,
            material: this.state.material,
            min_stakes: this.state.min_stakes,
            tieouts: this.state.tieouts,
            length: this.state.length,
            floor_area: this.state.floor_area,
            freestanding: this.state.freestanding.value
        }
    }

    render() {
        return (
            <SuggestItem type="Tent" childState={this.formatState()} onSubmit={this.onSubmit}>
                <TentForm state={this.state} onChangeWall={this.onChangeWall} onChangeMaterial={this.onChangeMaterial} onChangeMinStakes={this.onChangeMinStakes} onChangeTieouts={this.onChangeTieouts} 
                onChangeFloorLength={this.onChangeFloorLength} onChangeFloorArea={this.onChangeFloorArea} onChangeStanding={this.onChangeStanding}></TentForm>
            </SuggestItem>
        )
    }
}