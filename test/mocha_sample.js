/*eslint strict: ["error", "function"]*/
/*eslint no-console: "off" */
/*global describe, after, before, beforeEach, afterEach, it */

/*Asdddlint-env node */
const expect = require('chai').expect;

function sample(x) {
  return {
    plusOne: x + 1,
    plusX: x + 'X',
  };
}

function sample_error(flag) {
  if (flag) {
    throw new Error();
  }
}
function sample_promise(flag) {
  return new Promise((resolve, reject)=>{
    if (flag) {
      resolve('OK');
    } else {
      reject(new Error('ERROR'));
    }
  });
}
describe('catgT', ()=>{
  const ctg = 'cayegory TOP';
  before(()=>{
    console.log(`start ${ctg}`);
  });
  after(()=>{
    console.log(`end ${ctg}`);
  });
  describe('catgS', ()=>{
    const ctg= 'category Second';
    before(()=>{
      console.log(`start ${ctg}`);
    });
    beforeEach(()=>{
      console.log('start test');
    });
    after(()=>{
      console.log(`end ${ctg}`);
    });
    afterEach(()=>{
      console.log('end test');
    });
    it('normal test', ()=>{
      const ans = sample('432');
      expect(ans.plusOne).has.a('string');
      expect(ans).has.property('plusOne', '4321');
      expect(ans).is.a('object');
      expect(ans).is.deep.equal({
        plusX:'432X',
        plusOne:'4321',
      });
    });
    it('exception test', ()=>{
      expect(sample_error.bind(null,true)).to.throw(Error);
      expect(sample_error.bind(null,false)).to.not.throw(Error);
    });
    it('promise test', ()=>{
      return sample_promise(true)
        .then((val) => {
          expect(val).is.equal('OK');
        })
        .catch(()=>{
          expect().is.not.undefined;
        });
    });
    it('promise test2', ()=>{
      return sample_promise(false)
        .then(() => {
          expect().is.not.undefined;
        })
        .catch((err)=>{
          expect(err).is.a('Error');
        });
    });
  });
});
