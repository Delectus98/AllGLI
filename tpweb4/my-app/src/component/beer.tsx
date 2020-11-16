import * as React from 'react';

export default class Beer extends React.Component<{name:string}> {
    constructor(props:{name:string}) {
        super(props);
        //this.defaultProps.name = name;
    }

    render () {
        return <div><h2>{this.props.name}</h2></div>;
    }
}
