import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/jsx/invalid-embedded-expression.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
