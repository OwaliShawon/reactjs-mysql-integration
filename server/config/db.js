import { createConnection } from 'mysql';
const db = createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "blog_posts"

})
export default db;