import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/basics/function-anonymus-with-type-parameters.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
