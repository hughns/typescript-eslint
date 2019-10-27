import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/templateStrings/multi-line-template-string.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
