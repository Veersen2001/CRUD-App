const app = require('./app.js')

// we can't use hardcoded of port so we can use .env
// const PORT = 8000;

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server listening on port http://localhost:${PORT}...`);
})