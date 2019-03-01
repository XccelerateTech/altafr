// function timerGame(callback) {
//     console.log('Ready....go!');
//     setTimeout(() => {
//         console.log('Times up -- stop!');
//         callback;
//     }, 100);
// }

// describe("Manually ticking the Jest Clock", () => {
//     beforeEach(function () {
//         jest.useFakeTimers();
//     });

//     test("causes a timeout to be called synchronously", function () {
//         expect(setTimeout).not.toHaveBeenCalled();

//         timerGame(callback)
//         jest.advanceTimersByTime(101)
//         expect(setTimeout).toHaveBeenCalled();
//     });
// }); 

describe("Asynchronous specs", function() {
    var value;
  
    beforeEach(function(done) {
      setTimeout(function() {
        value = 0;
        done();
      }, 1);
    });
  
    test("should support async execution of test preparation and expectations", function(done) {
      value++;
      expect(value).toBeGreaterThan(0);
      done();
    });
  
    describe("long asynchronous specs", function() {
  
      test("takes a long time", function(done) {
        jest.useFakeTimers();

        setTimeout(function() {
          done();
        }, 9000);
        jest.advanceTimersByTime(9001)
      });

   
    });
  });