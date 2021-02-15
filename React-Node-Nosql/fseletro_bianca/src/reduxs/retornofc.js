import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './App.css';
import { bindActionCreators } from 'redux';
import { fcButton } from './actions';

class Appfc extends Component {
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
      fcButton,
      newValue
    } = this.props;

    const {inputValue } = this.state;

    return (
      <div className="App" style={{ paddingTop: '10px' }}> 

          <div className="container-fluid">
          <label>Assunto</label> <br/>
          <select onChange={this.inputChange} value={inputValue} className="col-lg-12" name="nome_produto">
            <option value="">Escolha o assunto</option>
            <option value="uma sugestão">uma sugestão</option>
            <option value="uma reclamação">uma reclamação</option>
            <option value="um elogio">um elogio</option>
          </select><br/>

            <button className="col-lg-12 btn-success" onClick={() => fcButton(inputValue)}> 
                Atualizar 
            </button> 
          </div>

          <div className="container-fluid">
            <br/><br/>
            <h5>Deixe sua mensagem sobre: {newValue}</h5> 
          </div> 

      </div> 
    );
  }
}
const mapStateToProps = store => ({
  newValue: store.fcState.newValue
});

const mapDispatchToProps = dispatch =>
bindActionCreators({ fcButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Appfc);
