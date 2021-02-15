import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './App.css';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { 
      clickButton,
      newValue
    } = this.props;

    const {inputValue } = this.state;

    return (
      <div className="App" style={{ paddingTop: '10px' }}> 

          <div className="container-fluid">
            <input type='text' 
              onChange={this.inputChange}
              value={inputValue}  
              placeholder='Parcelada ou à vista?' 
            /> 

            <button className="btn-success" onClick={() => clickButton(inputValue)}> 
              Atualizar 
            </button> 
          </div>

          <div className="container-fluid">
            <br/><br/>
            <h5>Sua compra será paga: {newValue}</h5> 
          </div> 

      </div> 
    );
  }
}
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
