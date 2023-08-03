const chai = require('chai');
const assert = chai.assert;

const smalleAngleApproximation = require('../pendulum.js').smalleAngleApproximation;

describe('Pendulum Tests', function() {
    
    describe('smalleAngleAprroximation()', function() {
        
        it('should approximate angle for small time delta', function() {
            const theta0 = 0.1;
            const length = 1;
            const deltaT = 1; // 1 second
            const result = smalleAngleApproximation(theta0, length, deltaT);
            const expected = theta0 * Math.cos(Math.sqrt(9.81 / length) * deltaT);
            assert.closeTo(result, expected, 0.0001, 'Approximation should be close to expected value');
        });
    });
});
