let Song = require('./Song');

beforeAll(()=> {
    song1 = new Song('Super Massive Black Hole', 'Black Holes and Revelations', 'Muse');
    song2 = new Song('The Hell Song', 'Does this look infected?', 'Sum 41');
    song3 = new Song('All The Small Things', 'Enema Of The State', 'Blink 182');
    song4 = new Song('Anthem', 'Enema Of The State', 'Blink 182')
    song5 = new Song('Californication', 'Californication', 'Red Hot Chilli Peppers');
    duplicatedSong = new Song('Super Massive Black Hole', 'Black Holes and Revelations', 'Muse')
})

beforeEach(()=>{

    let currentSong = song3
    let otherSong = song4

    expect.extend({
    toBeInTheSameAlbumAs(){
      const pass = ( currentSong.album === otherSong.album)
      if(pass){
        return {
          message: () =>
          `expected ${currentSong.album} to equal ${otherSong.album}`,
          pass: true,
        };
      } else {
        return {
          message: () => 
          `expected ${currentSong.album} to equal ${otherSong.album}, and I didn't get it.... it got ${currentSong.album}`,
          pass: false,
        };
      }
    },
  });
  })

describe('The songs should have the correct information and method',() => {
    test('should return the string responding the names, album and author',() => {
        expect(song1.getDescription()).toEqual('The name of this song is Super Massive Black Hole and it is from the album Black Holes and Revelations. It was written by Muse.')
        expect(song2.getDescription()).toEqual('The name of this song is The Hell Song and it is from the album Does this look infected?. It was written by Sum 41.')
        expect(song3.getDescription()).toEqual('The name of this song is All The Small Things and it is from the album Enema Of The State. It was written by Blink 182.')
        expect(song4.getDescription()).toEqual('The name of this song is Anthem and it is from the album Enema Of The State. It was written by Blink 182.')
        expect(song5.getDescription()).toEqual('The name of this song is Californication and it is from the album Californication. It was written by Red Hot Chilli Peppers.')
    })
    
    
    test('should match the song in the same album',() => {
        expect(song3.isInTheSameAlbumAs(song4)).toBeTruthy();
    })
    test('should be false if songs are not in the same album',() => {
        expect(song1.isInTheSameAlbumAs(song5)).toBeFalsy();
    })
})

describe('The Song class and test can use a custom matcher', () => {
    test('It should return true if both songs are in the same album', ()=>{
        
        
        expect().toBeInTheSameAlbumAs();
    })

})

test("should be different song even if the attributes are the same",function(){
    let arr1 = [1,2,3,{a:1}];
    let arr2 = arr1;
    expect(arr1).toBe(arr2);
    expect(song1).not.toBe(duplicatedSong);
    expect(song1).toBe(song1);
});

test("should be equal to the duplicated song as the attributes are the same",function(){
    let arr1 = [1,2,3,{a:1}];
    let arr2 = [1,2,3,{a:1}];
    expect(arr1).toEqual(arr2);
    expect(song1).toEqual(duplicatedSong);
    expect(song1).toEqual(song1);
});


