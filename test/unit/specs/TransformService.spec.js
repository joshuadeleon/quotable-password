import { default as service } from '@/services/TransformService'

// swapPeriod tests
describe('swapPeriod', () => {
  it('Swap period gives a string when given .', () => {
    service.swapPeriod('.').should.be.a('string')
  })
})

describe('swapPeriod', () => {
  it('Swap period is ? or ! for a .', () => {
    service.swapPeriod('.').should.match(/[?!]/)
  })
})

describe('swapPeriod', () => {
  it('Swap period gives back arguement when not .', () => {
    service.swapPeriod('not period').should.equal('not period')
  })
})

// removePunctuation tests
describe('removePunctuation', () => {
  it('removes sentence punctuation for any [.,?!;:\']', () => {
    service.removePunctuation('a.b,c;d:e?f!g\'').should.equal('abcdefg')
  })
})

describe('removePunctuation', () => {
  it('does not remove other keyboard characters', () => {
    service.removePunctuation('@#$%^&*()~`_+-=1234567890qwertyuiop[]{}|asdfghjkl"zxcvbnm<>/').should.equal('@#$%^&*()~`_+-=1234567890qwertyuiop[]{}|asdfghjkl"zxcvbnm<>/')
  })
})

// capitalizeFirstLetter tests
describe('capitalizeFirstLetter', () => {
  it('capitalizes first letter of a single word', () => {
    service.capitalizeFirstLetter('test').should.equal('Test')
  })
})

// mapToLeet
describe('mapToLeet', () => {
  it('correct substitutions for leet characters', () => {
    service.mapToLeet('A').should.equal('4')
    service.mapToLeet('a').should.equal('@')
    service.mapToLeet('B').should.equal('8')
    service.mapToLeet('b').should.equal('6')
    service.mapToLeet('E').should.equal('3')
    service.mapToLeet('e').should.equal('3')
    service.mapToLeet('G').should.equal('&')
    service.mapToLeet('g').should.equal('9')
    service.mapToLeet('H').should.equal('#')
    service.mapToLeet('h').should.equal('#')
    service.mapToLeet('L').should.equal('1')
    service.mapToLeet('l').should.equal('1')
    service.mapToLeet('O').should.equal('0')
    service.mapToLeet('o').should.equal('0')
    service.mapToLeet('S').should.equal('5')
    service.mapToLeet('s').should.equal('$')
    service.mapToLeet('T').should.equal('7')
    service.mapToLeet('t').should.equal('7')
    service.mapToLeet('Z').should.equal('2')
    service.mapToLeet('z').should.equal('2')
  })
})

describe('mapToLeet', () => {
  it('No substitutions for non leet chars', () => {
    let noleet = 'cdfijkmnpqruvwxy'.split().map(service.mapToLeet).join()
    noleet.should.equal('cdfijkmnpqruvwxy')
  })
})

// randomLeet
describe('randomLeet', () => {
  it('gives leet when randomPercent is 1', () => {
    service.randomLeet('A', 1).should.equal('4')
  })
})

describe('randomLeet', () => {
  it('gives at least one leet on 10 character word when randomPercent is 0.5', () => {
    let word = 'aaaaaaaaaa'
    var leetWord = ''
    for (let char of word) {
      leetWord += service.randomLeet(char, 0.5)
    }
    leetWord.should.match(/@/)
  })
})
