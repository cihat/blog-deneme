const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");

router.get("/", controller.getArticles);

router.get("/add-new-article", controller.getNewArticlePage);

router.get("/get-article", controller.getArticle);

router.post("/add-new-article", controller.postAddArticle);

module.exports = router;
