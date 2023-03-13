// updateLists takes an *updated* array of lists and passes it to the reducer where it will be used as the replacement for
// the array of lists in store.
export const updateLists = (arrOfLists) => ({
  type: 'UPDATE_LISTS',
  payload: arrOfLists,
});
