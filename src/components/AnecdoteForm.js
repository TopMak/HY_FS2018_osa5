import React from 'react';
import PropTypes from 'prop-types'

import action from '../actions'

class AnecdoteForm extends React.Component {

  newAnecdote = (event) => {
    event.preventDefault()
    this.context.store.dispatch(
      action.addAnecdote(event.target.anecdoteField.value)
    )
    event.target.anecdoteField.value = ""
  }

  render(){
    return(
      <div>
        <h2>create new</h2>
        <form onSubmit={this.newAnecdote}>
          <div>
          <input name="anecdoteField" />
          </div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteForm
