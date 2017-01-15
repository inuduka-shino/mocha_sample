/*eslint-env node */

module.exports = {
  sample(x) {
    return {
      plusOne: x + 1,
      plusX: x + 'X',
    };
  },

  sample_error(flag) {
    if (flag) {
      throw new Error();
    }
  },

  sample_promise(flag) {
    return new Promise((resolve, reject)=>{
      if (flag) {
        resolve('OK');
      } else {
        reject(new Error('ERROR'));
      }
    });
  },
};
