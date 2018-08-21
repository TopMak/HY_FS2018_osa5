import React from 'react';

//Components
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

export default App
