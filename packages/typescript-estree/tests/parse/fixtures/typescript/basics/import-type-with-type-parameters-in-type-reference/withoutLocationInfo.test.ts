import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/basics/import-type-with-type-parameters-in-type-reference.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
