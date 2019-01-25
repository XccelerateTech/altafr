class TagService {
    constructor(knex){
        this.knex = knex
    }
    
    add(tags){
        return this.knex
        .insert({
            name: tags.name
        })
        .into('tags')
        .catch(err=> {
            throw new Error(err);
        })
    }

    list(search){
        if(search){
            let query = this.knex.select('tag_id', 'name', 'link_id')
            .from('tags')
            .where('links.name', 'like', `%${search}%`)

            return query.then((rows)=>{
                return rows.map(r=>({
                    id: r.id,
                name: r.name,
                }));
            });
        } else {
            let query = this.knex.select('tag_id', 'name', 'link_id')
            .from('tags');

            return query.then((rows)=> {
                return rows.map(r=> ({
                    id: r.id,
                    name: r.name,
                }));
            });
        }
    }
}
module.exports = TagService