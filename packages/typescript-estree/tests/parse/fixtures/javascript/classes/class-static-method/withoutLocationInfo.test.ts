import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/classes/class-static-method.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
