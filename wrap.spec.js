const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('returns the string as is if maxLen is greater than the length of the string', () => {
    expect(wrap('this is sample', 50)).to.equal('this is sample');
  });
  it('wraps the line once if length is greater than maxLen', () => {
    expect(wrap('mary had a little lamb', 10)).to.equal(
      'mary had a \nlittle \nlamb '
    );
  });
  it('wraps complicated', () => {
    expect(
      wrap('this tops fork grab tarn list pool', 4)).to.equal(
        'this \ntops \nfork \ngrab \ntarn \nlist \npool '
      )
      });
  });
