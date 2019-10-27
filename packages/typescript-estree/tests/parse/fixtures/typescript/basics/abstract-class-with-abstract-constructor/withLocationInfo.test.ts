import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/basics/abstract-class-with-abstract-constructor.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
