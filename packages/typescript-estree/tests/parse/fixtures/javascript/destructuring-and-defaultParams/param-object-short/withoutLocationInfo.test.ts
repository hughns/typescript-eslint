import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/destructuring-and-defaultParams/param-object-short.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
