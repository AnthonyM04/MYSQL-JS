import createConnection from "mysql2" //import library of mysql tools
import {password} from "./secrets.js" 
import {dbConnection } from "./secrets.js"

const db = createConnection(dbConnection)

console.log('We are connected...')

db.query('UPDATE users SET first_name = "Cass" WHERE first_name = "Cassandra"', (err,result) => {
    if(err) console.log('UPDATE ERROR ->',err)
    else console.log('UPDATE DONE!')
})

db.query('SEELCT * FROM USERS', (err, results) => {
    if(err) console.log('ERROR ->', err)
    console.table(results)
})

console.log('The end.')