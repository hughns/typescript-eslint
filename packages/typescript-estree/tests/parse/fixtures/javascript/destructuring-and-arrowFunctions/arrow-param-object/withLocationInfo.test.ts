import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/destructuring-and-arrowFunctions/arrow-param-object.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
