const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

window.addEventListener("load", async () => {
  //データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  //DOM操作
  users.forEach((user) => {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);    
  });
});