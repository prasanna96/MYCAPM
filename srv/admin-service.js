const cds = require('@sap/cds/lib')

module.exports = class AdminService extends cds.ApplicationService { init(){
  this.before ('NEW','Books.drafts', genid)
  return super.init()
}}

/** Generate primary keys for target entity in request */
async function genid (req) {
  const {ID} = await cds.tx(req).run (SELECT.one.from(req.target.actives).columns('max(ID) as ID'))
  req.data.ID = ID - ID % 100 + 100 + 1
}

console.log("PRASASANNNAAAAAA")

const vcapApplication = process.env.VCAP_APPLICATION ? JSON.parse(process.env.VCAP_APPLICATION) : null;
const appRouterUrl = vcapApplication && vcapApplication.uris ? vcapApplication.uris[0] : null;
 
console.log("AppRouter URL:", appRouterUrl);

var hostname = req.headers.host;
var pathname = url.parse(req.url).pathname;
console.log('http://' + hostname + pathname);
