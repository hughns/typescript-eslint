import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/comments/switch-fallthrough-comment.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
