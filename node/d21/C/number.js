function randomNumber(){
    return Math.floor(
      (Math.random()* 26) + 1
    )

}

randomNumber();

module.exports = randomNumber;