import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/experimentalAsyncIteration/async-generators.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
