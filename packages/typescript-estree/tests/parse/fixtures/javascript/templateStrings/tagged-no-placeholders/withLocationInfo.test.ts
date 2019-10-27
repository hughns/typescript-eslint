import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/templateStrings/tagged-no-placeholders.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
