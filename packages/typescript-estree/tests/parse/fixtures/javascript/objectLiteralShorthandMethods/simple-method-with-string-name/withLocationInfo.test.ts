import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/objectLiteralShorthandMethods/simple-method-with-string-name.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
