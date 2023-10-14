console.log("hello");

// fetch("https://jsonplaceholder.org/posts", {
//     method: "GET",
//     headers: {
//         "content-type": "application/json"
//     }
// })
// .then((res) =>{
//     return res.json()
// })
// .then((data) =>{
// console.log("data : ", data)
// })


const getData = async() =>{
    const response = await fetch("https://jsonplaceholder.org/posts", {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
    });
    const data = await response.json();
    return data;
};


window.addEventListener("DOMContentLoaded", async (event)=>{
    const data = await getData();
    const post = document.querySelector(".post");

    console.log(post);

    if (post == "null") {
        alert("la div des post n'a pas pu etre selectionner");
        return;
    }
console.log(post.innerHTML);
   data.forEach((posts) => {
    console.log(posts);
    post.innerHTML += `
    <div  class="posts">
        <p>${posts.title}</p>
        <img src=${posts.thumbnail}height="250">
        <p>${posts.publishedAt}</p>

        <button onClick="">Voir PLus<button/>
    </div>`;
   });
})