import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
            
          <form onSubmit={this.props.getWeather}>
              <input type="text" name="city" placeholder="city"/>
              <input type="text" name="country" placeholder="Country"/>
              <button>Get Whether</button>
          </form>
            </div>
        );
    }
}

export default Form;