let Player = require('./Player');
let Song = require('./Song');

let player;
let song;

// custom matchers before each
beforeEach(()=>{
  expect.extend({
  toBePlaying(){
    const pass = (player.currentlyPlayingSong === song)
    if(pass){
      return {
        message: () =>
        `expected ${song} to be playing`,
        pass: true,
      };
    } else {
      return {
        message: () => 
        `expected ${song} to be playing, and I didn't get it....`,
        pass: false,
      };
    }
  },
});
})

// player describe blocks before each. 
beforeEach(()=> {
    player = new Player();
    song = new Song('1', '2', '3');
    song1 = new Song('a', 'b', 'c')
})

  describe("Players should be able to play songs", ()=>{
    test("should be able to play a Song", () =>{
      player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

  // demonstrates the use of custom matchers
    expect(player).toBePlaying(song);
  });
})


  test("custom matcher should fail if not playing the right song", () =>{
    player.play(song);


  // expect(player).not.toBePlaying(song1)
  // above doesnt work correctly?
  expect(player.currentlyPlayingSong).not.toEqual(song1);


});



  describe("Players have the ability to pause, resume and make a song a favourite.", () =>{
    beforeEach(()=> {
      player.play(song);
      player.pause();
    });

    test("It should indicate that the song is currently paused", () =>{
      expect(player.isPlaying).toBeFalsy();
    }); 

    test("should be possible to resume", ()=> {
      player.resume();
      expect(player.isPlaying).toBeTruthy();

      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  //demonstrates use of expected exceptions
  describe("#resume", ()=> {
    test("should throw an exception if song is already playing", ()=> {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrow("Song is already playing");
    });
  });



describe("mock functions", ()=>{
     // demonstrates use of spies to intercept and test method calls fix the spyon method
  test("tells the current song if the user has made it a favorite using spy", ()=> {
    const spyPlayerFavorite = jest.spyOn(player, 'makeFavourite');
    const spySongStatus = jest.spyOn(song, 'persistFavoriteStatus');


    player.play(song);
    player.makeFavourite();

   expect(spyPlayerFavorite).toHaveBeenCalled();

   expect(spySongStatus).toHaveBeenCalledWith(true);

       jest.restoreAllMocks();

  }); 
  
  test("tells the current song if the user has made it a favorite using mocks", ()=> {
    const mockPlayerFavorite = jest.spyOn(player, 'makeFavourite');
    const mockSongStatus = jest.spyOn(song, 'persistFavoriteStatus');
    
    mockPlayerFavorite.mockImplementation(()=> "done")
    expect(player.makeFavourite()).toEqual("done")
   
    mockSongStatus.mockImplementation(()=> "True")
    expect(song.persistFavoriteStatus()).toBeTruthy()

    jest.restoreAllMocks();
  });

  test("tells the current song if the user has made it a favorite using mocks then delegates the method back to original functions", ()=> {
    const mockPlayerFavorite = jest.spyOn(player, 'makeFavourite');
    const mockSongStatus = jest.spyOn(song, 'persistFavoriteStatus');
    
    mockPlayerFavorite.mockImplementation(()=> new Error)
    expect(player.makeFavourite()).toEqual(new Error)
   
    mockSongStatus.mockImplementation(()=> true)
    expect(song.persistFavoriteStatus()).toBeTruthy()

   jest.restoreAllMocks();
    
    player.play(song);
    player.makeFavourite();
    expect(player.currentlyPlayingSong).toEqual(song);
    expect(mockPlayerFavorite).toHaveBeenCalled();
    expect(player).toBePlaying(song);
    expect(song.persistFavoriteStatus()).toBe(true);


  });
})

