let pay = document.getElementById("pay");
let count = 0;

let paySelect = () => {
    let payNowDiv = document.createElement("div");
    payNowDiv.id = "payNow";

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let li1 = document.createElement("li");
    li.textContent = "Pay an Account";                          
    li1.textContent = "Pay into another Account";                          
    ul.appendChild(li); 
    ul.appendChild(li1); 

    payNowDiv.appendChild(ul);
    document.body.appendChild(payNowDiv);
};

let style = () => {
    let styling = `
        /* Your CSS styles go here */
        body{
            
            background-color: white;
        }
        #payNow{
            margin: 0px;
            padding: 0px;
        }
        #payNow ul {
            background-color: rgb(234, 200, 159);
            width: 100%;
            height: 30vh;
            position: fixed;
            bottom: 10%;
            margin: 0px;
            padding: 0px;
            text-align: center;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
        #payNow ul li{
            padding: 4%;
            border-bottom: 1px solid grey;
        }
    `;

    let stylings = document.createElement('style');
    stylings.appendChild(document.createTextNode(styling));
    document.head.appendChild(stylings);
};
pay.addEventListener('click', () => {
    count++;
    if (count % 2 === 1) {
        console.log("payNow");
        paySelect();
        style();
    } else {
        console.log("noPay");
        document.getElementById("payNow").remove();
    }
});
// let pay = document.getElementById("pay");
// let count = 0;

// let paySelect =()=>{
//     let payNow = `
//         <div id="payNow">
//             <ul>
//                 <li>Pay an Account</<li>
//             </ul>
//         </div>
//     `
//     document.body.innerHTML += payNow
// }
// let style = () => {
//     let styling = `
//         /* Your CSS styles go here */
//         #payNow{
//             width:100%;
//             margin: 0px;
//             padding: 0px;
//             border: 1px dashed green;
//         }
//         #payNow ul{
//             margin: 0px;
//             padding: 0px;
//             text-align: center;
//         }
      
//     `;
//     let stylings = document.createElement('style');
//     stylings.appendChild(document.createTextNode(styling));
//     document.head.appendChild(stylings);
// }


// pay.addEventListener('click', () =>{
//     count++
//     if(count < 2){
//         console.log("me")
//         paySelect()
//         style()
//     }
//     if(count > 1){
//         console.log("you")
//         count = 0;
//     }
// })