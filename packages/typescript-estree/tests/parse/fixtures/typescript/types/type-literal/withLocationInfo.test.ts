import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/types/type-literal.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
