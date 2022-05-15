module.exports = {
    checlkRequireLogin: (req, res, next) => {
        const {username, password} = req.body;
        if (!username){
            return [{error:'username mising..'}, null]
        }
        next()

    }
}