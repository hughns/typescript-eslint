import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/hexLiterals/invalid.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
