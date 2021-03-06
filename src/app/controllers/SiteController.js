class SiteController {
    //get /news
    index(red, res) {
        res.render('home')
    }

    search(red, res) {
        res.render('search')
    }
}

module.exports = new SiteController;
