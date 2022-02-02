// IMPORT MODULES under test here:
import { renderIngredient, renderMeal } from '../utils.js';

const test = QUnit.test;

test('time to test the ingredient function', (expect) => {
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

test('time to test meal function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<ul><h2>Oatmeal (3)</h2><li>oatmeal</li><li>honey</li><li>raisins</li></ul>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMeal ({
        name: 'Oatmeal',
        total: 3,
        list: ['oatmeal', 'honey', 'raisins']
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
