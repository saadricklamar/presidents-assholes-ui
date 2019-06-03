import * as actions from '../actions/';
import isLoadingReducer from './isLoadingReducer';

describe('isLoadingReducer', () => {
    it('should return the initial state', () => {
        const expected = false;
        const result = isLoadingReducer(undefined, {});
        expect(result).toEqual(expected)
    });
    it('should return state with isLoading', () => {
        const mockState = [{number: 1, president: "George Washington", birth_year: 1732, death_year: 1799, took_office: "1789-04-30", party: "No-Party"}]
        const expected = true
        const result = isLoadingReducer(mockState, actions.isLoading(true))
        expect(result).toEqual(expected)
    });
});