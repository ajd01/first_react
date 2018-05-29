import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    console.log('Setting constructor')
    this.state = {
      results: []
    }
  }
  componentDidMount() {
    fetch('https://api.datos.gob.mx/v1/datasets/')
    .then(results => {
      return results.json()
    })
    .then(data => {
      let results = data.results.map((r) => {
        return (
          <tr key={r._id}>
            <td>
              {r.organization.name}
            </td>
            <td>
              {r.organization.description}
            </td>
            <td>
              {r['num-resources']}
            </td>
          </tr>
        )
      })
      this.setState({results:results})
      console.log("state",data.results[0])
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fist React App</h1>
        </header>
        <div className="App-intro">
          <table className="table">
            <thead>
              <tr>
                <th>
                  Nombre
                </th> 
                <th>
                  Descripción
                </th> 
                <th>
                  Recursos
                </th> 
              </tr>
            </thead>
            <tbody>
              {this.state.results}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
