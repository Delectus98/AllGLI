import React from 'react';
import ReactDOM from 'react-dom';

import Beer from './beer';


export default class BeerList extends React.Component<{beers:Array<string>, onSizeChanged?:any}, {value:string, beers:Array<string>}> {

    constructor(props:{ beers: Array<string>, onSizeChanged?:any }) {
        super(props);
        this.state = {value:"", beers:this.props.beers};
    }

    addBeer() {
        if (this.state.value.length !== 0) {
            let tmp = this.state.beers;
            tmp.push(this.state.value)
            this.setState( {value:"", beers:tmp});
        }
    }



    removeBeer(i:number){
        if (i >= 0 && i < this.state.beers.length) {
            let tmp = this.state.beers.filter(b => b !== this.state.beers[i]);
            this.setState( {value:"", beers:tmp});
        }
    }


    handleChange(event:any) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={evt => {this.handleChange(evt); } } />
                <button onClick={event => {this.addBeer(); if (this.props.onSizeChanged) this.props.onSizeChanged(this.props.beers.length+1);}}>Add Beer</button>
                <h2>Liste de bières:</h2>
                <ul>
                    {this.state.beers.map((item, i) =>
                        <li key={i}>
                            <Beer name={item}/>
                            <button onClick={event => this.removeBeer(i)}>X</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
