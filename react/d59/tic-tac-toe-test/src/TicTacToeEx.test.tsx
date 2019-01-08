import { mount, shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import * as React from 'react';
import { Board, Square } from './TicTacToeEx';

enzyme.configure({ adapter: new Adapter() });

describe('<Board />', () => {

  // A
  it('renders a <Board /> components with 9 squares', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find(Square).length).toEqual(9);
  });

  // A.2
  it('Should contain a line showing who is next',() => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('div.status').length).toEqual(1)
  })

  // A.3
  it('Should divide the Square into three rows', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('div.board-row').length).toEqual(3)
  })

  // B
  it('fill X in respond to a click', () => {
    const wrapper = shallow(<Board />);
    const board = wrapper.instance() as Board;
    board.handleClick(0);
    expect(board.state.squares).toEqual(['X', null, null,
      null, null, null,
      null, null, null]);
  });

  // B
  it('fill X in respond to a click', () => {
    const wrapper = shallow(<Board />);
    const board = wrapper.instance() as Board;
    board.handleClick(4);
    expect(board.state.squares).toEqual([null, null, null,
      null, 'X', null,
      null, null, null]);
  });

  // B 
  it('clicking a square should fill an X in that index', () => {
    const wrapper = mount(<Board />);
    wrapper.find(Square).first().find('button').simulate('click');
    const board = wrapper.instance() as Board;
    expect(board.state.squares).toEqual(['X', null, null,
      null, null, null,
      null, null, null])
  })

  // C 
   it('should change all states if clicked', () => {
    const wrapper = shallow(<Board />);
    const handleClick = jest.fn()
    const board = wrapper.instance() as Board;
    board.handleClick(0);
    board.handleClick(1);
    board.handleClick(2);
    board.handleClick(3);
    board.handleClick(4);
    board.handleClick(5);
    board.handleClick(6);
    board.handleClick(7);
    board.handleClick(8);


    expect(board.state.squares).toEqual(['X', 'X', 'X',
    'X', 'X', 'X',
    'X', 'X', 'X']);

  });

  // expect(handleClick.mock.calls.length).toEqual(9)
  //
  
});
  