import React, { Component } from 'react';
import './App.css';
import CardContainer from '../../components/CardContainer/CardContainer'
import { addPresidents, isLoading, hasErrored } from '../../actions/';
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
    .catch(error => this.props.hasErrored(error))
  }

  render() {
    const { presidents, isLoading, hasErrored } = this.props;
    console.log(isLoading)
    if (isLoading && !presidents.length) {
      return(<p>Hold on while we fetch these presidential assholes</p>)
    }
    if (hasErrored && !presidents.length) {
      return (<p>I'm sorry, but there was error fetching your presidents and asshole data</p>)
    } else {
      return (
        <div className="App">
          <h1>Presidents and Assholes</h1>
          <CardContainer presidents={presidents}/>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  presidents: state.presidents,
  hasErrored: state.hasErrored,
  isLoading: state.isLoading
})

export const mapDispatchToProps = dispatch => ({
  addPresidents: newPresident => dispatch(addPresidents(newPresident)),
  isLoading: bool => dispatch(isLoading(bool)),
  hasErrored: bool => dispatch(hasErrored(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
