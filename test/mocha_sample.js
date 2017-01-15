/*eslint-env mocha */
/*eslint strict: ["error", "function"], no-console: "off", no-await-in-loop: "disable" */

const expect = require('chai').expect,
      target = require('../src/target.js');

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
      const ans = target.sample('432');
      expect(ans.plusOne).has.a('string');
      expect(ans).has.property('plusOne', '4321');
      expect(ans).is.a('object');
      expect(ans).is.deep.equal({
        plusX:'432X',
        plusOne:'4321',
      });
    });
    it('exception test', ()=>{
      expect(target.sample_error.bind(null,true)).to.throw(Error);
      expect(target.sample_error.bind(null,false)).to.not.throw(Error);
    });
    it('promise test', ()=>{
      return target.sample_promise(true)
        .then((val) => {
          expect(val).is.equal('OK');
        })
        .catch(()=>{
          expect().is.not.undefined;
        });
    });
    it('promise test2', ()=>{
      return target.sample_promise(false)
        .then(() => {
          expect().is.not.undefined;
        })
        .catch((err)=>{
          expect(err).is.a('Error');
        });
    });
  });
});
