
async function check(req,res, next){

    console.log(req.query)
   
  // console.log(req.baseUrl.split('/'))
   //console.log(req.path.split('/')[1] )

   if(req.path.split('/')[1] == 'delete-issue'){
       console.log(req.headers.authorization)
       if(!req.headers.authorization){
           
           return res.status(401).json({message : 'missing'})
       }
       const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
       console.log(credentials)
}
    next();
}


module.exports = check;