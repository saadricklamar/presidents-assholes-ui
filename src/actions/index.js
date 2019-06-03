export const addPresidents = newPresident => ({
    type: 'ADD_PRESIDENTS',
    newPresident
})

export const isLoading = bool => ({
    type: "IS_LOADING",
    bool
  });
  
export const hasErrored = bool => ({
    type: "HAS_ERRORED",
    bool
  });