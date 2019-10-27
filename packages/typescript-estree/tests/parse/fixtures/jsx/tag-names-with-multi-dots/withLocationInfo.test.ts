import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/jsx/tag-names-with-multi-dots.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
