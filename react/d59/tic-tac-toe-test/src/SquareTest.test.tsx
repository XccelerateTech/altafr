import { shallow } from 'enzyme';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import * as React from 'react';
import { Square } from './TicTacToeEx';

enzyme.configure({ adapter: new Adapter() });

describe('<Square />', ()=>{
    it('propagates the click to the parent component', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Square value={null} onClick={onClick}/>);
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toEqual(1);

    })
})

