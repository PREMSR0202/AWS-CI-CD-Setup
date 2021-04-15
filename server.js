const express=require('express')
const app=new express()
var ls = require('local-storage');


app.set('view engine','hbs')


app.get('/',(req,res)=>{
    
    random(req,res)

})

function random(req,res){
    var length = 7;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    ls.set('random',result)
    
    console.log(ls.get('random'))

    res.render('display',{number:ls.get('random')})

    ls.clear()

}

app.listen(5000)
