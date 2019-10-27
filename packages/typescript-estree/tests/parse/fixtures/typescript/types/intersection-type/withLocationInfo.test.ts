import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/types/intersection-type.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
