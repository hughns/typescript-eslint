import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/basics/type-alias-object-without-annotation.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
