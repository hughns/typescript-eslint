import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/objectLiteralDuplicateProperties/strict-duplicate-properties.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
