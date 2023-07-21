const keyDiv = document.getElementById("insert");


document.addEventListener("keydown", (e) => {


    keyDiv.innerHTML = `
   
    
    <div class="key">
    ${e.key}
    <small>event.key</small>
    </div>
   
    <div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
    </div>
    <div class="key">
    ${e.code}
    <small>event.Code</small>

    </div>
   

    
    `
    console.log(e)
    console.log(e.key)


})