import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import App from '../src/index.jsx'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

import {addInputs,subtractInputs} from '../src/js/actions/calculatorActions'
import {createStore} from 'redux'
import calculatorReducers from '../src/js/reducers/calculatorReducers'

// // Snapshot for Home React Component. No exact possible because of the emails.
// describe('>>>H O M E --- Snapshot',()=>{
//     it('+++capturing Snapshot of Home', () => {
//         // define state as output with the name of the exported module
//         const renderedValue =  renderer.create(<App />).toJSON()
//         expect(renderedValue).toMatchSnapshot();
//     });

// });

describe('<App />', () => {
  it('should render three <BrowserRouter /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBeTruthy();
  });




//   it('should render an `.icon-star`', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('.icon-star')).to.have.length(1);
//   });

//   it('should render children when passed in', () => {
//     const wrapper = shallow((
//       <App>
//         <div className="unique" />
//       </MyComponent>
//     ));
//     expect(wrapper.contains(<div className="unique" />)).to.equal(true);
//   });

//   it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
//     wrapper.find('button').simulate('click');
//     expect(onButtonClick.calledOnce).to.equal(true);
//   });
});

//*******************************************************************************************************
describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper
    //  const output = 10

    beforeEach(()=>{
        wrapper = shallow(<App />)
    })

    // it('+++ render the DUMB component', () => {
    //    expect(wrapper.length).toEqual(1)
    // });

    it('+++ contains Router - <Router', () => {
        expect(wrapper.contains('<Router')).toBe(true)
    });
    // it('+++ h2 header value ', () => {
    //     expect(wrapper.find('h2').get(0).props.children).toBe("using React and Redux")
    // });
    // it('+++ contains input1', () => {
    //     expect(wrapper.find('input').at(0)
    //             .equals(<input type="text" placeholder="Input 1" ref="input1"></input>))
    //             .toBe(true)
    // });
    // it('+++ contains input2', () => {
    //     expect(wrapper.find('input').at(1)
    //             .equals(<input type="text" placeholder="Input 2" ref="input2"></input>))
    //             .toBe(true)
    // });
    //  it('+++ contains output', () => {
    //     expect(wrapper.find('input[placeholder="Output"]').prop('value')).toEqual(output)
    // });
    // it('+++ contains button with id="add"', () => {
    //     expect(wrapper.find('button#add').type()).toEqual('button')
    // });
    // it('+++ contains button with id="subtract"', () => {
    //     expect(wrapper.find('button#subtract').type()).toEqual('button')
    // });
});

// //*******************************************************************************************************
// describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
//     const initialState = {output:100}
//     const mockStore = configureStore()
//     let store,container

//     beforeEach(()=>{
//         store = mockStore(initialState)
//         container = shallow(<ConnectedHome store={store} /> )  
//     })

//     it('+++ render the connected(SMART) component', () => {
//        expect(container.length).toEqual(1)
//     });

//     it('+++ check Prop matches with initialState', () => {
//        expect(container.prop('output')).toEqual(initialState.output)
//     });

// });

// //*******************************************************************************************************
// describe('>>>H O M E --- REACT-REDUX (Mount + wrapping in <Provider>)',()=>{
//     const initialState = {output:10}
//     const mockStore = configureStore()
//     let store,wrapper

//     beforeEach(()=>{
//         store = mockStore(initialState)
//         wrapper = mount( <Provider store={store}><ConnectedHome /></Provider> )
//     })

//     it('+++ contains header - h2', () => {
//         expect(wrapper.contains(<h2>using React and Redux</h2>)).toBe(true)
//     });

//     it('+++ render the connected(SMART) component', () => {
//        expect(wrapper.find(ConnectedHome).length).toEqual(1)
//     });

//     it('+++ check Prop matches with initialState', () => {
//        expect(wrapper.find(Home).prop('output')).toEqual(initialState.output)
//     });

//     it('+++ check action on dispatching ', () => {
//         let action
//         store.dispatch(addInputs(500))
//         store.dispatch(subtractInputs(100))
//         action = store.getActions()
//         expect(action[0].type).toBe("ADD_INPUTS")
//         expect(action[1].type).toBe("SUBTRACT_INPUTS")
//     });

// });
// //*******************************************************************************************************
// describe('>>>H O M E --- REACT-REDUX (actual Store + reducers) more of Integration Testing',()=>{
//     const initialState = {output:10}
//     let store,wrapper

//     beforeEach(()=>{
//         store = createStore(calculatorReducers)
//         wrapper = mount( <Provider store={store}><ConnectedHome /></Provider> )
//     })

//     it('+++ check Prop matches with initialState', () => {
//         store.dispatch(addInputs(500))
//        expect(wrapper.find(Home).prop('output')).toBe(500)
//     });

// });
// //*******************************************************************************************************