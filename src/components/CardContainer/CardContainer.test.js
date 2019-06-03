import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  const mockPresidents = [{number: 1, president: "George Washington", birth_year: 1732, death_year: 1799, took_office: "1789-04-30", party: "No-Party"}];
  let wrapper = shallow(<CardContainer presidents={mockPresidents}/>);
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});