import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/namespaces-and-modules/declare-namespace-with-exported-function.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
