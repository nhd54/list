
const temp = document.querySelector("#messageTemplate").content;
const jsonurl = "https://5c95f975939ad600149a9428.mockapi.io/messages";
const txtbox = document.querySelector(".validate");
getDate();




document.querySelector(".btn").addEventListener("click", (e) => {
e.preventDefault();
 addMessage(txtbox.value, txtbox.value);
})

function getDate() {
    fetch("https://5c95f975939ad600149a9428.mockapi.io/messages")
    .then(res=> res.json())
    .then(showMessages)
}



function showMessages(data){
    data.forEach(mes => {
        const clone = temp.cloneNode(true);
        
        clone.querySelector(".student").innerHTML =   mes.content;
       
       
        

        document.querySelector(".studentlist").appendChild(clone);
    })

}


function addMessage(formName, formContent) {

  const data = {
          name: formName,
          content: `<td></td><td>${formContent}</td><td></td><td></td><td> <i class=\"material-icons\">check</i> </td>`,
          createdAt: "2019-11-13T04:07:55.717Z"
        
  }
console.log(JSON.stringify(data));

fetch(jsonurl, {
   method: "post",
   body: JSON.stringify(data),
   headers: {
       accept: "application/json",
       "content-type": "application/json"
   }
})
.then(res => res.json())
.then(d => {
   console.log(d)
  
})

}




function update(id, mycontent) {
    const payLoad = {
        name: "This is awesome",
        content: mycontent
      };
    
      const postData = JSON.stringify(payLoad);
      fetch(jsonurl + "/" + id, {
        method: "put",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: postData
      })
        .then(res => res.json())
        .then(d => {
          console.log(d);
        });
}
