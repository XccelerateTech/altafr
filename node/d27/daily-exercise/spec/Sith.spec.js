const Sith = require('../starwars').Sith;
const Jedi = require('../starwars').Jedi;


describe('Sith functions testing', () => {
    
    var ken;
    var ryu;
    
    beforeEach(() => {
        ken = new Sith("ken", 200, 1000)
        ryu = new Jedi("ryu", 100, 2000);
    })

    it('should have a correct name', () => {
        expect(ken.name).toEqual("ken");
    });

    it('should have correct power', () => {
        expect(ken.power).toEqual(200);
    });

    it('should have correct health', () => {
        expect(ken.health).toEqual(1000);
    });

    it('should attack the correct target', () => {
        spyOn(ken,'attack').and.callThrough();
        ken.attack(ryu);
        expect(ken.attack).toHaveBeenCalledWith(ryu);
    });

    it('attack should injure opponent', () => {
        spyOn(ryu,'injure').and.callThrough();
        ken.attack(ryu);
        expect(ryu.injure).toHaveBeenCalled();
    })

    it('should be injured by opponent\'s attack', () => {
        spyOn(ken,'injure').and.callThrough();
        ryu.attack(ken);
        expect(ken.injure).toHaveBeenCalled();
    })

    it('should be injured by the amount of damage output from opponent\'s attack', () => {
        let originalHealth = ken.health;
        ken.injure(100);
        expect(ken.health).toEqual(originalHealth - 100);
    })

    it('should die when health is less than 0', () => {
        // spyOn(ryu, 'dead').and.callThrough();
        ken.health = -100;
        expect(ken.dead).toBeTruthy();
    })

})