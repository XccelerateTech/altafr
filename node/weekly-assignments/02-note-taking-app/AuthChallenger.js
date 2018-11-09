module.exports = function AuthChallenger(users){
    return function (username, password){
        return typeof users[username] !== 'undefined' && users[username] === password;
    }
}