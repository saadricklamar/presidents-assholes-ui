import * as actions from '../actions/';
import presidentsReducer from './presidentsReducer';

describe('presidentsReducer', () => {
    it('should return the initial state', () => {
        const expected = [];
        const result = presidentsReducer(undefined, {});
        expect(result).toEqual(expected)
    });
    it('should return state with new presidents', () => {
        const mockState = [{number: 1, president: "George Washington", birth_year: 1732, death_year: 1799, took_office: "1789-04-30", party: "No-Party"}]
        const expected = {number: 2, president: "John Adams", birth_year: 1735, death_year: 1826, took_office: "1797-03-04", party: "Federalist"}
        const result = presidentsReducer(mockState, actions.addPresidents({number: 2, president: "John Adams", birth_year: 1735, death_year: 1826, took_office: "1797-03-04", party: "Federalist"}))
        expect(result).toEqual(expected)
    });
});


