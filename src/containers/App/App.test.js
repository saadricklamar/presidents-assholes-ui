import React from 'react';
import {App} from './App';
import { mapStateToProps } from './App';
import { mapDispatchToProps } from './App';
import { addPresidents, hasErrored, isLoading } from '../../actions/';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper = shallow(<App/>);
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('mapStateToProps', () => {
    it('should return an object with the presidents array', () => {
      const mockState = {
        presidents: [{number: 2, president: "John Adams", birth_year: 1735, death_year: 1826, took_office: "1797-03-04", party: "Federalist"}],
        hasErrored: 'HAS_ERRORED',
        isLoading: 'IS_LOADING'
      }
      const expected = {
        presidents: [{number: 2, president: "John Adams", birth_year: 1735, death_year: 1826, took_office: "1797-03-04", party: "Federalist"}],
        hasErrored: 'HAS_ERRORED',
        isLoading: 'IS_LOADING'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
      });
    });
  describe('mapDispatchToProps', () => {
    it('calls dispatch with addPresidents action when component is mounted', () =>{
      const mockDispatch = jest.fn()
      const actionToDispatch = addPresidents({number: 2, president: "John Adams", birth_year: 1735, death_year: 1826, took_office: "1797-03-04", party: "Federalist"})
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addPresidents({number: 2, president: "John Adams", birth_year: 1735, death_year: 1826, took_office: "1797-03-04", party: "Federalist"})
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
      });
    it('calls dispatch with hasErrored action when there is error', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = hasErrored(true);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.hasErrored(true);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it('calls dispatch with isLoading action when it is loading', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = isLoading(false);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.isLoading(false);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});

