let title= document.getElementById("title");
let price= document.getElementById("price");
let taxes= document.getElementById("taxes");
let ads= document.getElementById("ads");
let descount= document.getElementById("descount");
let total= document.getElementById("total");
let count= document.getElementById("count");
let category= document.getElementById("category");
let submit= document.getElementById("submit");
let blackwhite =document.getElementById("blackwhite")
let body = document.getElementById("body");
let search = document.getElementById("search");
let mood ="create"
let tmb;


function gettotal() {
    if(price.value !=""){
    let result = (+price.value + +taxes.value + +ads.value)- +descount.value
    total.innerHTML= result;
    total.style.cssText="backGround-color:green;"
}else{
    total.style.cssText="backGround-color:red;"  
}
}
let datapro =[];
if (localStorage.noooo != null) {
    datapro = JSON.parse(localStorage.noooo);
}
 let btndeleteall=document.getElementById("deleteAll")

submit.onclick = function() {
    let newpro = {
title : title.value,
price : price.value,
taxes : taxes.value,
ads : ads.value,
descount : descount.value,
total : total.innerHTML,
count : count.value,
category : category.value,
    }
if (title.value !="" && price.value !="" && category.value !="" && newpro.count < 100) {
    if (mood === "create") {     
        if (newpro.count > 1) {
            for (let i = 0; i < newpro.count; i++) {
                datapro.push(newpro)
                cleardata()
            }
        }else{
            datapro.push(newpro) 
        }
    }else{
}
    datapro [ tmb ] = newpro;
    total.style.cssText="backGround-color:red;"
    submit.innerHTML="create"
    count.style.cssText="display:block;"
    mood = "create";
}
    localStorage.setItem("noooo" , JSON.stringify(datapro))
    console.log(newpro)
    showdata()
}

function cleardata() {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    descount.value = "";
    total.innerHTML = "";
    count.value = "";
    category.value = "";
}
function showdata() {
    let table = "" ; 
for (let i = 0; i < datapro.length; i++) {
    table +=`
    <tr>
    <th>${i+1}</th>
    <th>${datapro[i].title}</th>
    <th>${datapro[i].price}</th>
    <th>${datapro[i].taxes}</th>
    <th>${datapro[i].ads}</th>
    <th>${datapro[i].descount}</th>
    <th>${datapro[i].total}</th>
    <th>${datapro[i].category}</th>
    <th> <button onclick="updatedata(${i})"id="update">update</button></th>
    <th> <button onclick="deletedata(${i})" id="delete">delete</button></th>
</tr>
    ` ;  
}
if (datapro.length > 0) {
    btndeleteall.innerHTML = `
    <button onclick="deleteall()" id="searchcategory">Delete All (${datapro.length})</button>
    `
}else{
    btndeleteall.innerHTML = "";
}
document.getElementById("tbody").innerHTML =table;
}
showdata()

function deletedata(i) {
    datapro.splice(i,1);
    localStorage.noooo = JSON.stringify(datapro);
    showdata()
}
function deleteall() {
    datapro.splice(0)
    localStorage.clear()
    showdata()
}
function updatedata(i) {
   title.value=datapro[i].title;
   price.value=datapro[i].price;
   taxes.value=datapro[i].taxes;
   ads.value=datapro[i].ads;
   descount.value=datapro[i].descount;
   total.innerHTML=datapro[i].total;
   category.value=datapro[i].category;
   count.style.cssText="display:none;"
   mood = "update"
   tmb=i;
   submit.innerHTML="update"
   scroll({
    top :0,
    behavior : "smooth"
   })
}


function searchdata(id) {
if (id === "searchtitle") {
    search.placeholder="Search By Title"
    searchmood= "title"
}else{
    search.placeholder="Search By Category"
    searchmood= "Category"
}
    search.focus()
}

function searchdatass(value) {
    let table= "";
    if (searchmood === "title") {
        for (let i = 0; i < datapro.length; i++) {
            if (datapro[i].title.includes(value)) {
            table +=`
            <tr>
            <th>${i+1}</th>
            <th>${datapro[i].title}</th>
            <th>${datapro[i].price}</th>
            <th>${datapro[i].taxes}</th>
            <th>${datapro[i].ads}</th>
            <th>${datapro[i].descount}</th>
            <th>${datapro[i].total}</th>
            <th>${datapro[i].category}</th>
            <th> <button onclick="updatedata(${i})"id="update">update</button></th>
            <th> <button onclick="deletedata(${i})" id="delete">delete</button></th>
        </tr>
            ` ;  
            }else{
            if (datapro[i].category.includes(value)) {
                table += `
                <tr>
                <td>${i+1}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].descount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updatedata(${i})"id="update">update</button></td>
                <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
                
            </tr>
              `
        }
    }
}
    }
document.getElementById("tbody").innerHTML=table;
 }
 blackwhite.innerHTML=`<button onclick="black()" id="black">black</button>
<button onclick="white()" id="white">white</button> `

 let white =document.getElementById("white");
 let black =document.getElementById("black");

white.onclick = function() {
    body.style.cssText="backGround-color:white;color:black;"
    white.style.cssText="display:none"
    black.style.cssText="display:block"
}
black.onclick = function() {
    body.style.cssText="backGround-color:#222;"
    black.style.cssText="display:none"
    white.style.cssText="display:block"
}

//  / function searchdatass(value) {
    //     let table= " ";
    // if (searchmood === "title") {
    //     for (let i = 0; i < datapro.length; i++) {
    //         if (datapro[i].title.includes(value)) {
    //         table += `
    //         <tr>
    //         <td>${i+1}</td>
    //         <td>${datapro[i].title}</td>
    //         <td>${datapro[i].price}</td>
    //         <td>${datapro[i].taxes}</td>
    //         <td>${datapro[i].ads}</td>
    //         <td>${datapro[i].descount}</td>
    //         <td>${datapro[i].total}</td>
    //         <td>${datapro[i].category}</td>
    //         <td><button onclick="updatedata(${i})"id="update">update</button></td>
    //         <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
            
    //     </tr>
    //       `  
    //     } else{
    //         if (datapro[i].category.includes(value)) {
    //             table += `
    //             <tr>
    //             <td>${i+1}</td>
    //             <td>${datapro[i].title}</td>
    //             <td>${datapro[i].price}</td>
    //             <td>${datapro[i].taxes}</td>
    //             <td>${datapro[i].ads}</td>
    //             <td>${datapro[i].descount}</td>
    //             <td>${datapro[i].total}</td>
    //             <td>${datapro[i].category}</td>
    //             <td><button onclick="updatedata(${i})"id="update">update</button></td>
    //             <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
                
    //         </tr>
    //           `
    //         }    
    // }
    // }
    // }
    // document.getElementById("tbody").innerHTML=table;
    
    // }






// function gettotal() {
//     if (price.value != "") {
//         let result = +price.value + +taxes.value + +ads.value - +descount.value
//         total.innerHTML=result;
//         total.style.cssText="backGround-color:green;"
//     }else{
//         total.style.cssText="backGround-color:red;"
//     }
// }
// let datapro;
// if (localStorage.noooo != null) {
// datapro = JSON.parse(localStorage.noooo); 
// }else{
//     datapro=[];
// }
// submit.onclick =function () {
//     let newpro = {
//         title :title.value.toLowerCase(),
//         price :price.value,
//         taxes :taxes.value,
//         ads :ads.value,
//         descount :descount.value,
//         total :total.innerHTML,
//         count :count.value,
//         category :category.value.toLowerCase(),
//     }
//     if (mood === "create") {     
//     if (newpro.count > 1) {
//         for (let i = 0; i < newpro.count; i++) {
//             datapro.push(newpro)
//         }
//     }else{
//         datapro.push(newpro) 
//     }
// }else{
//     datapro [ tmb ] = newpro;
//     total.style.cssText="backGround-color:red;"
//     submit.innerHTML="create"
//     count.style.cssText="display:block;"
//     mood = "create";
// }
//     localStorage.setItem("noooo" , JSON.stringify(datapro))
//     console.log(newpro)
//     showdata()
//     cleardata()
// }
// function cleardata() {
//     title.value="";
//     price.value="";
//     taxes.value="";
//     ads.value="";
//     descount.value="";
//     total.innerHTML="";
//     count.value="";
//     category.value="";
//     showdata() 
// }

// function showdata() {
//     let table;
//     for (let i = 0; i < datapro.length; i++) {
//         table += `
//         <tr>
//         <td>${i+1}</td>
//         <td>${datapro[i].title}</td>
//         <td>${datapro[i].price}</td>
//         <td>${datapro[i].taxes}</td>
//         <td>${datapro[i].ads}</td>
//         <td>${datapro[i].descount}</td>
//         <td>${datapro[i].total}</td>
//         <td>${datapro[i].category}</td>
//         <td><button onclick="updatedata(${i})"id="update">update</button></td>
//         <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
        
//     </tr>
//         `
//     }
//     document.getElementById("tbody").innerHTML=table;
//     gettotal()
//     let btndelete = document.getElementById("deleteAll");
// if (datapro.length > 0) {
//     btndelete.innerHTML=`<button onclick= "deleteall()" >delete All (${datapro.length})</button>
//  `
// }else{
// btndelete.innerHTML = "";
// }

// }

// function deletedata(i) {
//     datapro.splice(i,1);
//     localStorage.noooo = JSON.stringify(datapro)
//     showdata() 
// }
// function deleteall() {
//     localStorage.clear()
//     datapro.splice(0)
//     showdata()
//     cleardata()
// }
// function updatedata(i) {
//    title.value=datapro[i].title;
//    price.value=datapro[i].price;
//    taxes.value=datapro[i].taxes;
//    ads.value=datapro[i].ads;
//    descount.value=datapro[i].descount;
//    total.innerHTML=datapro[i].total;
//    category.value=datapro[i].category;
//    count.style.cssText="display:none;"
//    mood = "update"
//    tmb=i;
//    submit.innerHTML="update"
//    scroll({
//     top :0,
//     behavior : "smooth"
//    })
// }

// showdata()

// blackwhite.innerHTML=`
// <button id="black">black</button>
// <button id="white">white</button>
// `
// showdata()
// let black =document.getElementById("black");
// let white =document.getElementById("white");

// white.onclick = function () {
//     body.style.cssText="backGround-color:white;color:black;"
//     white.style.cssText="display:none;"
//     black.style.cssText="display:block;" 
//     showdata()
// }
// black.onclick = function () {
//     body.style.cssText="backGround-color:#222;"
//     black.style.cssText="display:none;"
//     white.style.cssText="display:block;"
//     showdata()
// }
// let searchmood = "title";
// function searchdata(id) {
//     if (id == "searchtitle") {
//         searchmood = "title"
//         search.placeholder="Search By Title"
//     }else{
//         searchmood = "categorey"
//         search.placeholder="Search By categorey"
//     }
//     search.focus()
// }

// function searchdatass(value) {
//     let table= " ";
// if (searchmood === "title") {
//     for (let i = 0; i < datapro.length; i++) {
//         if (datapro[i].title.includes(value)) {
//         table += `
//         <tr>
//         <td>${i+1}</td>
//         <td>${datapro[i].title}</td>
//         <td>${datapro[i].price}</td>
//         <td>${datapro[i].taxes}</td>
//         <td>${datapro[i].ads}</td>
//         <td>${datapro[i].descount}</td>
//         <td>${datapro[i].total}</td>
//         <td>${datapro[i].category}</td>
//         <td><button onclick="updatedata(${i})"id="update">update</button></td>
//         <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
        
//     </tr>
//       `  
//     } else{
//         if (datapro[i].category.includes(value)) {
//             table += `
//             <tr>
//             <td>${i+1}</td>
//             <td>${datapro[i].title}</td>
//             <td>${datapro[i].price}</td>
//             <td>${datapro[i].taxes}</td>
//             <td>${datapro[i].ads}</td>
//             <td>${datapro[i].descount}</td>
//             <td>${datapro[i].total}</td>
//             <td>${datapro[i].category}</td>
//             <td><button onclick="updatedata(${i})"id="update">update</button></td>
//             <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
            
//         </tr>
//           `
//         }    
// }
// }
// }
// document.getElementById("tbody").innerHTML=table;

// }












// let btndelete = document.getElementById("deleteAll")
// if (datapro.length > 0) {
//     btndelete.innerHTML=`
//     <button onclick="deleteall()">deleteall (${datapro.length})</button>
//     `
// }else{
//     btndelete.innerHTML= ""
// }


// function gettotal() {
//     if (price != "") {
//     let result =  +price.value + +taxes.value+ +ads.value - +descount.value
//     total.innerHTML = result;
//     total .style.cssText="backGround-color:green;"
// }else{
//     total .style.cssText="backGround-color:red;"  
// }
// }
// let datapro;
// if (localStorage.aha != null) {
//     datapro = JSON.parse(localStorage.aha);
// }else{
//     datapro=[];
// }

// submit.onclick = function () {
//    let newpro = {
//     title: title.value,
//     taxes: taxes.value,
//     price: price.value,
//     ads: ads.value,
//     descount: descount.value,
//     total: total.innerHTML,
//     count: count.value,
//     category: category.value,
//    }
//     if (mood === "create") {
// if (newpro.count > 1) {
//     for (let i = 0; i < newpro.count; i++) {
//         datapro.push(newpro);  
//     }
// }else{
//     datapro.push(newpro); 
// }
// }else{
// datapro [ tmb ] =newpro;
// submit.innerHTML="create";
// count.style.cssText="display:block;"
// mood = "create";
// }   
//    localStorage.setItem("aha" , JSON.stringify(datapro));
//    console.log(newpro);
//    showdata()
//    cleardata()
// }
// function showdata() {
//     let table = "";
// for (let i = 0; i < datapro.length; i++) {
//     table += `
//       <tr>
//            <td>${i+1}</td>
//          <td>${datapro[i].title}</td>
//          <td>${datapro[i].price}</td>
//         <td>${datapro[i].taxes}</td>
//         <td>${datapro[i].ads}</td>
//         <td>${datapro[i].descount}</td>
//        <td>${datapro[i].total}</td>
//         <td>${datapro[i].category}</td>
//         <td><button  onclick="updatedata( ${i} )"id="updata">update</button></td>
//          <td><button onclick="deletedata( ${i} )" id="delete">delete</button></td>
// </tr>       
//  `   
// }
// document.getElementById("tbody"). innerHTML = table;

// let btndelete = document.getElementById("deleteAll")
// if (datapro.length > 0) {
//     btndelete.innerHTML=`
//     <button onclick="deleteall()">deleteall (${datapro.length})</button>
//     `
// }else{
//     btndelete.innerHTML= ""
// }

// }
// showdata()
// function cleardata() {
//     title.value="";
//     price.value="";
//     taxes.value="";
//     ads.value="";
//     descount.value="";
//     total.innerHTML="";
//     category.value="";
//     count.value="";
// }
// showdata()
// function deletedata(i) {
//     datapro.splice(i,1);
//     localStorage.aha = JSON.stringify(datapro)
//     showdata()
// }
//  function deleteall() {
//     localStorage.clear();
//     datapro.splice(0)
//     showdata()
//  }
//  function updatedata(i)  {
//     title.value = datapro[i].title
//     price.value = datapro[i].price
//     taxes.value = datapro[i].taxes
//     ads.value = datapro[i].ads
//     descount.value = datapro[i].descount
//     total.innerHTML = datapro[i].total
//     category.value = datapro[i].category
// mood = "update";
// gettotal();
// tmb = i
// submit.innerHTML="update"
// count.style.cssText="display:none;"
// showdata()
//  }




//     showdata()
// }
// showdata()
// count
// update
// search
// clean data