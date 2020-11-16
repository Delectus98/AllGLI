import * as React from 'react';

export default class About extends React.Component<{author:string}> {
    constructor(props:{author:string}) {
        super(props);
    }

    render () {
        return <div><h2>C'est moi : {this.props.author}</h2></div>;
    }
}
