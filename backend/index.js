const express = require('express');
const cors = require('cors')
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.resolve(__dirname,'dist')))
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist','index.html'));
})

app.listen(8080,()=> {
    console.log('app listening on port 8080')
})