import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/modules/invalid-import-namespace-missing-as.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
