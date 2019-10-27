import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
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
