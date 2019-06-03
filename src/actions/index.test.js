import * as actions from './index';

describe('actions', () => {
    it('should have a type of ADD_PRESIDENTS', () => {
        const newPresident =  {number: 1, president: "George Washington", birth_year: 1732, death_year: 1799, took_office: "1789-04-30", party: "No-Party"}
        const expectedAction = {
            type: 'ADD_PRESIDENTS',
            newPresident: newPresident
        }
        const result = actions.addPresidents(newPresident);
        expect(result).toEqual(expectedAction)
    });
    it('should have a type of IS_LOADING', () => {
        const bool = false;
        const expectedAction = {
            type: 'IS_LOADING',
            bool: bool
        }
        const result = actions.isLoading(bool);
        expect(result).toEqual(expectedAction)
    });
    it('should have a type of HAS_ERRORED', () => {
        const bool = true;
        const expectedAction = {
            type: 'HAS_ERRORED',
            bool: bool
        }
        const result = actions.hasErrored(bool);
        expect(result).toEqual(expectedAction)
    });
})