const express = require('express');
const router = express.Router();
const searchGithub = require('../lib/github.js');
const sentiment = require('../lib/sentiment.js');
const messages = require('../lib/messages');


router.post('/sentiment', async (req, res, next) => {
  try {
    const result = await searchGithub(req.body.accountAndRepo, req.body.user);
    const issuesWithSentiment = await sentiment.analyze(result);
    res.json(issuesWithSentiment);
  } catch (e) {
    res.json({
      error: e
    });
  }
});

module.exports = router;