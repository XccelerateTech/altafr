import { shallow } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });


describe('<App />', ()=> {
  it('render a <App />  components', ()=>  {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header.App-header').length).toEqual(1);
  })

  it('renders with logo', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('img.App-logo').length).toEqual(1)
  })

  it('renders with a title', ()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1.App-title').length).toEqual(1);
  })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
});

// to make the adapter work you can place it inside your app.test.tsx not in a file called setupTest.ts