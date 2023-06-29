const { writeFileSync } = require('node:fs');

const cjsModule = require('../cjs/index.js');
const cjsExports = Object.keys(cjsModule);

const esmModuleContent = `import cjsModule from './cjs/index.js';
export const { ${cjsExports
	.filter((exp) => exp !== 'default' && exp !== '__esModule')
	.join(', ')} } = cjsModule;
${cjsExports.includes('default') ? "export default cjsModule['default'];" : ''}
`;

writeFileSync('./index.mjs', esmModuleContent);
require('node:child_process').execSync('npx prettier ./index.mjs');
