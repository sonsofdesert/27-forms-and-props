import React from 'react';

class SearchList extends React.Component {
    constructor(props){
        super(props);
    }
    
    s(){
        return this.props.topics.map((results, i) => {
            return <a href={results.data.url} target="_blank"><li key={i}>{results.data.title}</li></a>
        })
    }
    

    render() {
        return (
            <div>
                <p>Results: {this.props.topics.length}</p>
                <ul>{this.results()}</ul>
            </div>
        )
    }
}

module.exports = SearchList;