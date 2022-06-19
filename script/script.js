sendPostId.onclick = e => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }
            else {
                throw new Error(responce.status);
            }
        })
        .then(data => {
            const h1 = document.createElement('h1');
            h1.appendChild(document.createTextNode(`Id : ${data.id} Title : ${data.title}`));
            document.body.appendChild(h1);
        })
        .catch(e => {
            console.log(e);
            const h1 = document.createElement('h1');
            h1.appendChild(document.createTextNode(`Ooops 404`));
            document.body.appendChild(h1);
        })
}

