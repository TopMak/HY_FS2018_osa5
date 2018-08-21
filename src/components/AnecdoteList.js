import React from 'react';
import PropTypes from 'prop-types'

import Anecdote from './Anecdote'
import action from '../actions'

class AnecdoteList extends React.Component {

  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  //Vote func here

  addVote = (id) => () => {
    //console.log("vote for: ", id);
    this.context.store.dispatch(
      action.voteAnecdote(id)
    )
  }

  render(){
    return(
      <div>
        {this.context.store.getState().map(anecdote =>
          <div key={anecdote.id}>
          <Anecdote
            anecdote={anecdote}
            clickVote={this.addVote(anecdote.id)}
          />
          </div>
        )}
      </div>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
