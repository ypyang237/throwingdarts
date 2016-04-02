var chai = require('chai');
var expect = chai.expect;
chai.should();
var scoreThrows = require('../public/app.js');

describe('it should be a function', function() {
  it('should be a function', function() {
    expect(scoreThrows).to.be.a('function');
  });
});

describe('it should reward points based on radiuses', function() {
  it('should return 0 points for radiuses above 10', function() {
    expect(scoreThrows([1, 5, 11])).to.be.equal(15);
    expect(scoreThrows([15, 20, 30])).to.be.equal(0);
    expect(scoreThrows([1, 2, 3, 4])).to.be.equal(140);
    expect(scoreThrows([])).to.be.equal(0);
  });
});