import React, { Component } from 'react';
import './App.css';
import CardContainer from '../../components/CardContainer/CardContainer'
import { addPresidents } from '../../actions/';
import { connect } from 'react-redux';



export class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  componentDidMount() {
    let presidentsUrl = 'http://localhost:3001/api/v1/presidents';
    fetch(presidentsUrl)
    .then(response => response.json())
    .then(results => this.props.addPresidents(results))
  }



  render() {
    const { presidents } = this.props;
    console.log(presidents)
    return (
      <div className="App">
        <CardContainer presidents={presidents}/>
      </div>
    );
  }
  
}

export const mapStateToProps = state => ({
  presidents: state.presidents
})

export const mapDispatchToProps = dispatch => ({
  addPresidents: newPresident => dispatch(addPresidents(newPresident))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
