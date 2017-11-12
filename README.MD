# Convert UUID string to hex string

## Examples of using

```javascript
const uuidToHex = require('uuid-to-hex');
const hexStringWithLeadingZero = uuidToHex('d3fd3540-6718-4687-956b-c8618a26e335', false);
console.log(hexStringWithLeadingZero); //0xd3fd354067184687956bc8618a26e335

const hexString = uuidToHex('e13b23e9-1dcb-41c8-ab0b-e65b84161d20');
console.log(hexString); //e13b23e91dcb41c8ab0be65b84161d20
```