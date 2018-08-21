
const action = {
  voteAnecdote(id) {
    return {
      type: 'VOTE',
      data: { id }
    }
  }
}


export default action;
