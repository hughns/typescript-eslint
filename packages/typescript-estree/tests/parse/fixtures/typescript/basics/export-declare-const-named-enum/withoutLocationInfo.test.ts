import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/basics/export-declare-const-named-enum.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
