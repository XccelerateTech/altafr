// function forEach(items, callback) {
//     for (let index = 0; index < items.length; index++) {
//       callback(items[index]);
//     }
//   }

//   const mockCallback = jest.fn(x => 42 + x);
// forEach([0, 1], mockCallback);

// describe('The mocked function tested to ensure the callback is working as expected', ()=> {
//     // The mock function is called twice
// test('The mocked callback should be called with the same number of elements in the supplied array',()=>{
//     expect(mockCallback.mock.calls.length).toBe(2);
// });

// // The first argument of the first call to the function was 0
// test('The mocked callbacks first argument should be 0',()=>{
//     expect(mockCallback.mock.calls[0][0]).toBe(0);
// });

// // The first argument of the second call to the function was 1
// test('The mocked callbacks first argument for the second call should be 1',()=>{
//     expect(mockCallback.mock.calls[1][0]).toBe(1);

// });

// // The return value of the first call to the function was 42
// test('The mocked callback should return 42 on the first call of the function',()=>{
//     expect(mockCallback.mock.results[0].value).toBe(42);
// });
// }); 

function forEach(items, callback){
    for(let index=0; index< items.length; index++){
        callback(items[index])
    }
}

const mockingCallback = jest.fn(x => 88 + x);
forEach([0,1,2], mockingCallback);

describe('The mocked function tested to ensure the callback is working as expected', ()=> {
    // The mock function is called twice
test('The mocked callback should be called with the same number of elements in the supplied array',()=>{
    expect(mockingCallback.mock.calls.length).toBe(3);
});

// The first argument of the first call to the function was 0
test('The mocked callbacks first argument should be 0',()=>{
    expect(mockingCallback.mock.calls[0][0]).toBe(0);
});

// The first argument of the second call to the function was 1
test('The mocked callbacks first argument for the second call should be 1',()=>{
    expect(mockingCallback.mock.calls[1][0]).toBe(1);

});

// The return value of the first call to the function was 42
test('The mocked callback should return 42 on the first call of the function',()=>{
    expect(mockingCallback.mock.results[0].value).toBe(88);
});
}); 


// const myMock = jest.fn();
// console.log(myMock());
// // > undefined

// myMock
//   .mockReturnValueOnce(10)
//   .mockReturnValueOnce('x')
//   .mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock());
// // > 10, 'x', true, true
