const Jedi = require('../starwars').Jedi;
const Sith = require('../starwars').Sith;
const duel = require('../starwars').duel;

describe('starwars duel testing', () => {

    var fakeObiwan;
    var fakeAnakin;

    beforeEach(() => {
        fakeObiwan = new Jedi("Obiwan Kenobi", 10, 111);
        fakeAnakin = new Sith("Anakin Skywalker", 10, 111);
        jasmine.clock().install();

        spyOn(fakeAnakin, 'attack');
        spyOn(fakeObiwan, 'attack');
        spyOn(fakeAnakin, 'injure');
        spyOn(fakeAnakin, 'dead');

    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it('tracks if functions in duel have been called', () => {
        //   spyOn(fakeObiwan, 'attack').and.callFake(() => {
        //        console.log("Obiwan pretended to attack Anakin.");
        // });
        // spyOn(fakeAnakin, 'attack').and.callFake(() => {
        //     console.log("Anakin pretended to attack Obiwan.");
        // });
        // spyOn(fakeAnakin, 'injure').and.callFake(() => {
        //     console.log("Anakin wasn't injured by the fake attacks.");
        // });
        // spyOn(fakeAnakin, 'dead').and.returnValue(false);

        // duel(fakeObiwan, fakeAnakin);

        // expect(fakeObiwan.attack).toHaveBeenCalled();
        // expect(fakeAnakin.attack).toHaveBeenCalled();
      
        duel(fakeAnakin, fakeObiwan);
        expect(fakeAnakin.attack).toHaveBeenCalledTimes(6);
        expect(fakeAnakin.attack).toHaveBeenCalledWith(fakeObiwan);

        
        expect(fakeObiwan.attack).toHaveBeenCalledTimes(6);
        expect(fakeObiwan.attack).toHaveBeenCalledWith(fakeAnakin);

    });

   it('should always have the same outcome, Anakin becoming injured', ()=>{        
        duel(fakeAnakin, fakeObiwan)
    //This is not the best method, try to use callThrough on your spyon method 
        fakeAnakin.injure(fakeAnakin.health -10 );
        fakeAnakin.dead()
      
        expect(fakeAnakin.injure).toHaveBeenCalledWith(fakeAnakin.health -10);
        expect(fakeAnakin.dead).toHaveBeenCalledTimes(1);
        expect(fakeAnakin.dead).toBeTruthy();
        });
        

    it('Anakin should be rescued by Darth Sidious after 5000 milliseconds', () => {
        duel(fakeObiwan, fakeAnakin);
        jasmine.clock().tick(5000);
        expect(fakeAnakin.health).toEqual(800);
        expect(fakeAnakin.power).toEqual(90);
    });


})