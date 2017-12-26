require(__filename.replace('.test', ''));
const { Test } = require('../framework');

/* global formatDuration */
Test.assertEquals(formatDuration(1), '1 second');
Test.assertEquals(formatDuration(62), '1 minute and 2 seconds');
Test.assertEquals(formatDuration(120), '2 minutes');
Test.assertEquals(formatDuration(3600), '1 hour');
Test.assertEquals(formatDuration(3662), '1 hour, 1 minute and 2 seconds');
