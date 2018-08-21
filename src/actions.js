
const action = {

  voteAnecdote(id) {
    return {
      type: 'VOTE',
      data: { id }
    }
  },
  addAnecdote(anecdote){
    return {
      type: 'CREATE_ANECDOTE',
      data: {
        content: anecdote
      }
    }
  }

}


export default action;
