require(__filename.replace('.test', ''));
const { Test } = require('../framework');

/* global Interpreter */
const interpreter = new Interpreter();

// Basic arithmetic
Test.assertSimilar(interpreter.input('1 + 1'), 2);
Test.assertSimilar(interpreter.input('2 - 1'), 1);
Test.assertSimilar(interpreter.input('2 * 3'), 6);
Test.assertSimilar(interpreter.input('8 / 4'), 2);
Test.assertSimilar(interpreter.input('7 % 4'), 3);

// Variables
Test.assertSimilar(interpreter.input('x = 1'), 1);
Test.assertSimilar(interpreter.input('x'), 1);
Test.assertSimilar(interpreter.input('x + 3'), 4);
Test.expectError(() => { interpreter.input('y'); });

// Functions
Test.expectNoError(() => { interpreter.input('fn avg x y => (x + y) / 2'); });
Test.assertSimilar(interpreter.input('avg 4 2'), 3);
Test.expectError(() => { interpreter.input('avg 7'); });
Test.expectError(() => { interpreter.input('avg 7 2 4'); });

// Conflicts
Test.expectError(() => { interpreter.input('fn x => 0'); });
Test.expectError(() => { interpreter.input('avg = 5'); });
Test.expectNoError(() => { interpreter.input('fn avg => 0'); });
