import app from "./app.js";
import { conectDB } from "./db.js";

conectDB();
app.listen(3000)
console.log('Server on port 3000')
