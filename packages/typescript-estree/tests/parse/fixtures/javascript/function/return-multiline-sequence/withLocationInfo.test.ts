import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/function/return-multiline-sequence.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
