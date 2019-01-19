import React from 'react';

class Wheather extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.city
                    &&
                    <div>
                    <p> Location: {this.props.city}</p>
                    <p> Temperature:{this.props.temperature}</p>
                    <p> Humidity: {this.props.humidity}</p>
                    <p> Description: {this.props.desription}</p>
                    </div>
            }
            {
                this.props.error!=undefined
                &&
                <div>
                    <p>Error:{this.props.error}</p>
                </div>
                
            }




            </div>
        );
    }
}

export default Wheather;