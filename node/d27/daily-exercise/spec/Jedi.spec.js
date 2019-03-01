const Jedi = require('../starwars').Jedi;
const Sith = require('../starwars').Sith;

describe('Jedi functions testing', () => {

    var newJedi;
    var newSith
    
    beforeEach(() => {
        newJedi = new Jedi("newJedi", 100, 2000);
        newSith = new Sith("newSith", 200, 1000);
    })

    it('should have a correct name', () => {
        expect(newJedi.name).toEqual("newJedi");
    });

    it('should have correct power', () => {
        expect(newJedi.power).toEqual(100);
    });

    it('should have correct health', () => {
        expect(newJedi.health).toEqual(2000);
    });

    it('should attack the correct target', () => {
        spyOn(newJedi,'attack').and.callThrough();
        newJedi.attack(newSith);
        expect(newJedi.attack).toHaveBeenCalledWith(newSith);
        expect(newJedi.attack).toHaveBeenCalledTimes(1);

    });

    it('attack should injure opponent', () => {
        spyOn(newSith,'injure').and.callThrough();
        newJedi.attack(newSith);
        expect(newSith.injure).toHaveBeenCalled();
        expect(newSith.injure).toHaveBeenCalledTimes(1);

    })

    it('should be injured by opponent\'s attack', () => {
        spyOn(newJedi,'injure').and.callThrough();
        newSith.attack(newJedi);
        expect(newJedi.injure).toHaveBeenCalled();
    })

    it('should be injured by the amount of damage output from opponent\'s attack', () => {
        let originalHealth = newJedi.health;
        newJedi.injure(100);
        expect(newJedi.health).toEqual(originalHealth - 100);
    })

    it('should die when health is less than 0', () => {
        newJedi.health = -100;
        expect(newJedi.dead).toBeTruthy();
    })

})
