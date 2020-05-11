var timerstate =  {
   stat:'',
}

function timer(state = timerstate, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, stat:"included" }
      case 'DECREMENT':
        return { ...state, stat:"excluded" }
      default:
        return timerstate
    }
  }

  export default timer;