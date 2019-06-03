import * as actions from '../actions/';
import hasErroredReducer from './hasErroredReducer';

describe('hasErroredReducer', () => {
    it('should return the initial state', () => {
        const expected = false;
        const result = hasErroredReducer(undefined, {});
        expect(result).toEqual(expected)
    });
    it('should return state with error', () => {
        const mockState = [{number: 1, president: "George Washington", birth_year: 1732, death_year: 1799, took_office: "1789-04-30", party: "No-Party"}]
        const expected = true
        const result = hasErroredReducer(mockState, actions.hasErrored(true))
        expect(result).toEqual(expected)
    });
});