import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/comments/jsdoc-comment.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
