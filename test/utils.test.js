// IMPORT MODULES under test here:
import { renderIngredient } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<ul><h3>Celery</h3><li>Need</li><li>Whole Foods Market</li></ul>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredient ({
        name: 'Celery',
        need: 'Need',
        store: 'Whole Foods Market',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
