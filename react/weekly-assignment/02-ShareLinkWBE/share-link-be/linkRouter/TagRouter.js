const express = require('express');

class TagRouter {
    constructor(tagService){
        this.tagService = tagService;
    }

    router(){
        let router = express.Router();
        router.get('/tags', this.get.bind(this));
        router.get('/tag', this.post.bind(this));
        return router;
    }

    get(req, res){
        console.log('getting: '+ req.query.search)
        return this.tagService.list(req.query.search)
            .then((tags)=> res.json(tags))
            .catch((err)=> res.status(500).json(err));
    }

    post(req,res){
        console.log('posting: '+req.body)
        return this.tagService.add(req.body)
            .then(()=> this.tagService.list())
            .then((tags)=> res.json(tags))
            .catch((err)=> res.status(500).json(err));
    }
}

module.exports = TagRouter;