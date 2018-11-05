function Song(name, album, author) {
  this.name = name;
  this.album = album;
  this.author = author;
}


Song.prototype.persistFavoriteStatus = function(value) {
  throw new Error("not yet implemented");
};

Song.prototype.getDescription = function(){
  return `The name of this song is ${this.name} and it is from the album ${this.album}. It is written by this author ${this.author}`;
}

Song.prototype.isInSameAlbumAs = function (otherSong){
          if(this.album === otherSong.album){
            return true;
          } else {
            return false;
          }

          /*  
          return this.album == otherSong.album;
          
          */
}

module.exports = Song;
