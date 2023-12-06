const express = require('express');
const app = express();
app.get('/',(req,res)=>{
res.send('recievd');
})
app.listen(3000);