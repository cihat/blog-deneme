const Article = require("../models/article");

exports.getArticles = (req, res, next) => {
  page = req.query.page;
  Article.count({}, (err, count) => {
    Article.find()
      .skip(Number(page) * 5 - 5)
      .limit(5)
      .then((articles) => {
        if (articles) {
          res.render("home", {
            articleLength: count,
            pageNumber: page == undefined ? 1 : page,
            pageTitle: "Ana Sayfa",
            articles: articles,
            path: "/home",
          });
        } else {
        }
      })
      .catch((err) => console.log(err));
  });
};

exports.getNewArticlePage = (req, res, next) => {
  res.render("addNewArticle", {
    pageTitle: "Ana Sayfa",
    path: "/add-new-article",
  });
};

exports.getArticle = (req, res, next) => {
  const articleId = req.params.articleId;
  Article.findById(articleId).then((article) => {
    res.render("getArticle", {
      pageTitle: "Ana Sayfa",
      articles: article,
      path: "/home",
    });
  });
};

exports.postAddArticle = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const articleText = req.body.article;
  const article = new Article({
    title: title,
    imageUrl: imageUrl,
    article: articleText,
    articleText: articleText,
  });
  article
    .save()
    .then((result) => {
      // console.log("Created Article");
      res.redirect("/");
      return result;
    })
    .catch((err) => console.log(err));
};
