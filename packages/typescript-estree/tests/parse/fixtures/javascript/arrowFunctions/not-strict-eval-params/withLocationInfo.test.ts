import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/arrowFunctions/not-strict-eval-params.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
