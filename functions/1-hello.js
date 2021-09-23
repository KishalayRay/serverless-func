//domain/.netlify/functions/1-hello
//const person={name:'John'}
exports.handler=async(event,context,cb)=>{
    
    return{
        statusCode:200,
        //body:JSON.stringify(person)
        body:'Our first Netlify Function Example'
    }
}              