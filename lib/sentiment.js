/**
 * This file is responsible for adding or analyzing sentiment to each github issues
 */


const Sentiment = require('sentiment');
const messages = require('./messages');
const util = require('util');

var sentiment = new Sentiment();

//Promisify the analyze function so it's easier to manage
const analyzeAsync = util.promisify(sentiment.analyze);


const addSentiment = async (issues) => {
  const result = [];
  for (let issue of issues) {
    let sentiment = await analyzeAsync(issue.bodyText);
    result.push({
      issue,
      sentiment
    });
  }
  return result;
};

const avgSentiment = (issuesWithSentiments) => {
  var sum = issuesWithSentiments.reduce(function (total, obj) {
    return total + obj.sentiment.score
  }, 0);

  return sum / issuesWithSentiments.length;
};

exports.analyze = async function analyze(issues) {
  const issuesWithSentiments = await addSentiment(issues);
  const score = avgSentiment(issuesWithSentiments);
  return {issuesWithSentiments, score};
};