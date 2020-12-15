const chai = require('chai');
const expect = chai.expect;

const somar = (a,b,c,d) => a + b + c + d;

describe('Soma', () => {
    it('Soma de quatro numeros - 5 4 3 e 6', (done) => {
        const resultado = somar(5, 4, 3, 6);
        expect(resultado).be.equal(18);
        done()                                                                        
    })
})