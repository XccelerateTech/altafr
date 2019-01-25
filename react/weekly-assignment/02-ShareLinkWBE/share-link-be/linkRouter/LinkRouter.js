const express = require('express');

class LinkRouter {
    constructor(linkService){
        this.linkService = linkService
    }



router (){
    let router = express.Router();
    router.get('/links', this.get.bind(this));
    router.post('/link', this.post.bind(this));

    return router;
}

get (req,res) {
    console.log('getting: ' + req.query.search)
    return this.linkService.list(req.query.search)
        .then((links)=> res.json(links))
        .catch((err) => res.status(500).json(err));
}

post (req, res){
    console.log('posting: ' + req.body)
    return this.linkService.add(req.body)
        .then(()=> this.linkService.list())
        .then((links) => res.json(links))
        .catch((err)=> res.status(500).json(err))
}
}

module.exports = LinkRouter;