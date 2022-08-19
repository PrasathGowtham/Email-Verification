var body = document.createElement("div");
body.setAttribute("class", "body");
var container = document.createElement("div");
container.setAttribute("class", "container");
var row = document.createElement("div");
row.setAttribute("class", "row");
var column = document.createElement("div");
column.setAttribute("class", "col-md-12");
column.innerHTML = "<h1>Email Address Verification</h1>";
body.append(container);
container.append(row);
row.append(column);
document.body.append(body);



var row1 = document.createElement("div");
row1.setAttribute("class", "row");
var column1 = document.createElement("div");
column1.setAttribute("class", "col-md-12");
var div = document.createElement("div");
div.setAttribute("class", "div");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.setAttribute("placeholder", "Enter a Mail");
var button = document.createElement("button");
button.setAttribute = ("type", "button");
button.setAttribute = ("class", "name1");
button.innerHTML = "Search";
button.addEventListener("click", foo);

var content = document.createElement("div");
content.setAttribute("class", "content");
content.setAttribute("id", "active");
var content1 = document.createElement("div");
content1.setAttribute("class", "content");
content1.setAttribute("id", "active1");
var content2 = document.createElement("div");
content2.setAttribute("class", "content");
content2.setAttribute("id", "active2");
var content3 = document.createElement("div");
content3.setAttribute("class", "content");
content3.setAttribute("id", "active2");





body.append(row1);
row1.append(column1);
column1.append(div);
div.append(input);
div.append(button);
div.append(content);
div.append(content1);
div.append(content2);
div.append(content3);
document.body.append(body);

async function foo() {
  let res = document.getElementById("name").value;
  var url =`https://emailvalidation.abstractapi.com/v1/?api_key=7f65641655554b6a901879333e1048bc&email=${res}`;
  let result = await fetch(url);
  let result1 = await result.json();
  console.log(result1.email);
  console.log(result1.deliverability);

  content.innerHTML = 
  `<div class="card" style="width: 75%;">
  <div class="card-header">
  RESULT
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Provided Email Address : <span style="color: green">${result1.email}</span></b></li>
    <li class="list-group-item"><b>Deliverablity of Email : <span style="color:green">${result1.deliverability}</span></b></li>
    <li class="list-group-item"><b>Quality score : <span style="color:green">${result1.quality_score}</span></b></li>
  </ul>
</div>`
}



