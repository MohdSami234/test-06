const table = document.querySelector('table');
const input=document.querySelector("input");
const btn=document.querySelector("button");
const heading = document.querySelector("h2");
const api= (country)=>{
       key=`http://universities.hipolabs.com/search?country=${country}`
       fetch(key)
       .then((Response)=>{
           return Response.json();
       })
       .then((data)=>{
        
       for(i in data){
           let country = data[i].country;
           let university=data[i].name;
            
           let tr=document.createElement("tr");
           
        
           let td=document.createElement("td");
            
           table.appendChild(tr);
           tr.appendChild(td);
           tr.appendChild(td);

           heading.innerText =  country;
           td.innerText = university;
         }
})
};


btn.addEventListener('click',(e)=>{
    const val=input.value;
    api(val);
})
