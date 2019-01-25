class LinkService {
    constructor(knex){
        this.knex = knex;
    }

    add(link){
        return this.knex
            .insert({
                title: link.title,
                url: link.url
            })
            .into('links')
            .catch(err => {
                throw new Error(err);
            });
    }

    list(search){
        if(search){
            let query = this.knex.select('id', 'title', 'url')
                .from('links')
                .where('links.title', 'like', `%${search}%`)
                .orWhere('links.url', 'like', `%${search}%`)

            return query.then((rows)=>{
                return rows.map(r => ({
                    id: r.id,
                    title: r.title,
                    url: r.url
                }));
            });
        } else {
            let query = this.knex.select('id', 'title', 'url')
            .from('links');

            return query.then((rows)=>{
                return rows.map(r => ({
                    id: r.id,
                    title: r.title,
                    url: r.url
                }));
            });
        }
    }
}

module.exports = LinkService;