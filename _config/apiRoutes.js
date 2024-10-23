const moduleName = 'iretail';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  items: `${urlBase}/items`,
  transactions: `${urlBase}/transactions`,
  types: `${urlBase}/types`
}
