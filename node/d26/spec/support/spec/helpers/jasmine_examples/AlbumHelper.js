beforeEach(function(){
    jasmine.addMatchers({
        toBeInTheSameAlbumAs: function (){
            return {
                compare: function (currentSong, otherSong){
              

                    return {
                        pass: currentSong.album === otherSong.album
                    }
                }
            }
        }
    })


})