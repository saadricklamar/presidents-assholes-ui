export const presidents = (state=[], action) => {
    switch (action.type) {
      case 'ADD_PRESIDENTS':
        return action.newPresident
      default:
        return state
    }
}

export default presidents;


  