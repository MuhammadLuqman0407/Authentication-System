import app from './src/app.js'
import connectionDB from './config/database.js'


connectionDB();
app.listen(3000, () => {
    console.log("Server is Running on port 3000")
})