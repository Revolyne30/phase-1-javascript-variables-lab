const fs = require('fs');
const path = require('path');
const { companyName } = require('..');

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

describe('index.js', function () {
  eval(js); // This will execute the code in index.js in the current context

  describe('Scuber', function () {
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');
    });

    it('is defined as a const', function () {
      const regex = /\bconst\b\s+companyName\s*=/;
      expect(js).to.match(regex, "Expected companyName to be defined as a const");
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('is defined using let', function () {
      const regex = /\blet\b\s+mostProfitableNeighborhood\s*=/;
      expect(js).to.match(regex, "Expected mostProfitableNeighborhood to be defined using let");
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('is defined using let', function () {
      const regex = /\blet\b\s+companyCeo\s*=/;
      expect(js).to.match(regex, "Expected companyCeo to be defined using let");
    });
  });
});
