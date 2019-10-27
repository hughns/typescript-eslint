import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/templateStrings/simple-template-string.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
