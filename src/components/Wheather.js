import React from 'react';

class Wheather extends React.Component {
    render() {
        return (
            <div>
            
           {this.props.city}
           {this.props.temperature}
           {this.props.humidity}
           {this.props.desription}
           
           
           
           
            </div>
        );
    }
}

export default Wheather;