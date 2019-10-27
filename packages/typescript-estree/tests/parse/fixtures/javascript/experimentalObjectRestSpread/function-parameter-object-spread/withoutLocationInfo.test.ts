import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/experimentalObjectRestSpread/function-parameter-object-spread.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);
