class NewsController {
    //get /news
    index(red, res) {
        res.render('news')
    }
}

module.exports = new NewsController;
