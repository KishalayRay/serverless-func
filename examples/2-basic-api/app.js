const result=document.querySelector('.result');
const fetchdata=async()=>{
    try{
        const {data}=await axios.get('/api/2-basic-api');
        console.log(data); 
        const products=data.map((product)=>{
            const {image:{url},name,price}=product
            return `
             <artile class="product">
               <img src='${url}' alt='${name}'/>
               <div class='info'>
                 <h5>${name}</h5>
                 <h5 class='price'>$${price}</h5>
               </div>
             </artile>         
            `
        }).join('')
        result.innerHTML=products
    }catch(e){
        result.innerHTML=`Error`
        console.log(e)
    }

}
fetchdata();
