import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/destructuring/class-method-params-array.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
