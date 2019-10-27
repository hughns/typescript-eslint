import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/regex/regexp-simple.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
