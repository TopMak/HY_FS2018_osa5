import React from 'react';

const Anecdote = ({anecdote, clickVote}) => {
  return(
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={clickVote}>vote</button>
      </div>
    </div>
  )
}

export default Anecdote
