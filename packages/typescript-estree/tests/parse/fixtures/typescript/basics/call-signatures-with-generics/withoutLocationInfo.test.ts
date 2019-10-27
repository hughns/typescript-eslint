import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/basics/call-signatures-with-generics.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
