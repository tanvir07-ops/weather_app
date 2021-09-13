document.getElementById("loan-form").addEventListener("submit",function(e){
    e.preventDefault();
    // hide-result:
    document.querySelector("#results").style.display = "none";

      // show-preloading:
      document.querySelector("#loading").style.display = "block";
      
      setTimeout(calculateFar,2000);

})


// calculateFar:
function calculateFar(){

//    nicher cel and far variable gula holo amar final variable:

    const cel = document.getElementById("cel")
    const far = document.getElementById("far")

    // cel to far calculation:
    // input je dibo celcius e er jonne cel_final variable create korechi and ta parseFloat er maddome flaot e niyechi
    const cel_final = parseFloat(cel.value)
    const far_res = parseFloat((9*cel_final + 160)/5)



    if(isFinite(cel_final)){
     far.value = far_res.toFixed(2)

       // show-result:
    document.querySelector("#results").style.display = "block";

     // hide-preloading:
     document.querySelector("#loading").style.display = "none";


    }

    else{
       
         errorMessage();


    }
   
}

// showing errorMessage:

function errorMessage(){

         // hide-result:
         document.querySelector("#results").style.display = "none";

         // hide-preloading:
         document.querySelector("#loading").style.display = "none";

  
  // create a div(karon amra error dekhate chaitesi bootstrap alert class er maddome ar ei alert class ti div er under ei thake tai div create korte hobe)
  const errorDiv = document.createElement("div")
  //jehetu ami error message ta card e dakhabo tai card select kora laagbe and jehetu ami ta heading er age dekhabo tai heading soho select kora laagbe!
  const card = document.querySelector(".card") 
  const heading = document.querySelector(".heading")

  errorDiv.className = "alert alert-danger"
  errorDiv.textContent = "Please check your input-field"

  // inser error message befor heading:
  card.insertBefore(errorDiv,heading)

 setTimeout(function(){
    //  errorDiv ta jate 2sec show kore:

     document.querySelector(".alert").remove();

   },2000)

  






}