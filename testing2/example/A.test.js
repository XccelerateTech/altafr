const Jedi = require('./starwars').Jedi;
const Sith = require('./starwars').Sith;
const duel = require('./starwars').duel;


describe('starwars duel testing', () => {

    var fakeObiwan;
    var fakeAnakin;

    beforeEach(() => {
        fakeObiwan = new Jedi("Obiwan Kenobi", 10, 111);
        fakeAnakin = new Sith("Anakin Skywalker", 10, 111);   
        jest.useFakeTimers();   
    });


    afterEach(()=> {

    })

    test('to see if the methods within the duel function have been called.', ()=>{
        
        const spyFakeAnakinAttack = jest.spyOn(fakeAnakin, 'attack');
        const spyFakeObiwanAttack = jest.spyOn(fakeObiwan, 'attack');
        
        duel(fakeObiwan, fakeAnakin)

        expect(spyFakeAnakinAttack).toHaveBeenCalledTimes(6);
        expect(spyFakeAnakinAttack).toHaveBeenCalledWith(fakeObiwan);

        expect(spyFakeObiwanAttack).toHaveBeenCalledTimes(6);
        expect(spyFakeObiwanAttack).toHaveBeenCalledWith(fakeAnakin);

    })

    test('The outcome should always be the same, anakin becoming injured.', ()=> {
        const spyFakeAnakininjure = jest.spyOn(fakeAnakin, 'injure');
        const spyFakeAnakinDead = jest.spyOn(fakeAnakin, 'dead');

        duel(fakeObiwan, fakeAnakin)

        expect(spyFakeAnakininjure).toHaveBeenCalled();
        expect(spyFakeAnakinDead).toHaveBeenCalledTimes(1);
        expect(fakeAnakin.dead).toBeTruthy();
    });

    it('Anakin should be rescued by Darth Sidiouc after 5000 milliseconds', ()=>{
        duel(fakeObiwan, fakeAnakin);
        jest.runTimersToTime(5001);
        expect(fakeAnakin.health).toEqual(800);
        expect(fakeAnakin.power).toEqual(90);
    })

});