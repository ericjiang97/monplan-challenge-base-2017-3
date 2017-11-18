import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchBar from '../containers/search_bar'


class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Monash Handbook Unit Viewer</h1>
        </header>
        <SearchBar />
      </div>
    )
  }
}

export default App
