import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/comments/switch-no-default-comment-in-function.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
