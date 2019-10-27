import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/types/reference-generic-nested.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
