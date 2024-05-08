        function fetchdata(){
            fetch("http://localhost:3000/ATLAS")
            .then((res)=>res.json())
            .then((data)=>CardList(data))
            .catch((error)=>console.log(error))
            }
            fetchdata();
    
    
    
            function CardList(data){
                let store=data.map((el)=>Singlecard(el.image,el.price,el.tittle))
                console.log(store)
                document.getElementById("container").innerHTML=store.join("")
            }
    
            function Singlecard(image,price,tittle){
                let card=`
                <div class="box">
            <img src=${image} alt="" height="300" width="300">
           <div style="background-color:#E7EAE9; width:300px;text-align:center" class="p-1 mb-5">
           <h3 >${tittle}</h3>
           <p class="fw-bold">${price}</p>
           </div>
            </div>
                `;
    
                return card;
            }
    