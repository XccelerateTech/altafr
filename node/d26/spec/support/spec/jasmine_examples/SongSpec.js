describe("Song", function(){
    let fng = require('../helpers/jasmine_examples/AlbumHelper') //you must require helpers now. 
    let Song = require('../../lib/jasmine_examples/Song');
    let song;
    let song1;
    let song2;
    let song3;
    let songDuplicate

    beforeEach (function(){
        song = new Song ('The Hell Song', 'Does this look infected?', 'Sum 41');
        song1 = new Song ('Over My Head', 'Does this look infected?', 'Sum 41');
        song2 = new Song ('All The Small Things', 'Enema of the State', 'Blink-182');
        song3 = new Song ('I Miss You', 'Blink-182', 'Blink-182');
        songDuplicate = new Song ('The Hell Song', 'Does this look infected?', 'Sum 41')
    });
    afterEach (function(){
        song;
        song1;
        song2;
        song3;
       songDuplicate;
    });
    it("Should store song information, such as name", function(){
        expect(song.name).toEqual('The Hell Song');
        expect(song1.name).toEqual('Over My Head');
    })
    it("Should store song information, such as album", function(){
        expect(song2.album).toEqual('Enema of the State');
        expect(song3.album).toEqual('Blink-182');
    })
    it("Should store song information, such as author", function(){
        expect(song.author).toEqual('Sum 41');
        expect(song3.author).toEqual('Blink-182');
    })
    it("Should be able to return the entire description of the of the songs information", function(){
        expect(song1.getDescription()).toEqual("The name of this song is Over My Head and it is from the album Does this look infected?. It is written by this author Sum 41")
    })
    it("Should be able to compare one song to another to see if they are in the same album", function(){
        expect(song.isInSameAlbumAs(song3)).toEqual(false);
        expect(song.isInSameAlbumAs(song1)).toEqual(true);
    })

    it("Should test to see if the song are in the same album using custom matcher.", function(){
        expect(song).toBeInTheSameAlbumAs(song1);
        expect(song2).not.toBeInTheSameAlbumAs(song3);
    })

    it("should be a different song even if the attributes are the same",function(){
        let arr1 = [1,2,3,{a:1}];
        let arr2 = arr1;
        expect(arr1).toBe(arr2);
        expect(song).not.toBe(songDuplicate);
        expect(song).toBe(song);
    });
    
    it("should be equal to the duplicated song as the attributes are the same",function(){
        let arr1 = [1,2,3,{a:1}];
        let arr2 = [1,2,3,{a:1}];
        expect(arr1).toEqual(arr2);
        expect(song).toEqual(songDuplicate);
        expect(song).toEqual(song);
    });

    


    
})