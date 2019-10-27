import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/for/for-with-const.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
