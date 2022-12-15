function axsios(url){
    return new Promise((resolve,reject) => {
        fetch(url)
      .then((responce) => responce.json())
        .then(formatedData => {
            if(Array.isArray(formatedData)){
                resolve(formatedData)
            }

            throw'request can be processed';
        })
            

        
        .catch(err => {
          
            reject(err);
        });

    });

}

axsios('https://jsonplaceholder.typicode.com/albums/1/photos')
.then(data => {
    console.log('data', data);
    const wrapper = document.getElementById('wrapper');

  data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('card');
        const img = document.createElement('img');
        const h2 = document.createElement('h2')
        img.src = element.url;
        h2.textContent = element.title;
        
        
       div.appendChild(img);
       div.appendChild(h2);
        wrapper.appendChild(div);
      
  
    })

  })

  .catch(err => {
    showErorMsg(err);
  })

  function showErorMsg(message){
    const div = document.createElement('div');
    div.textContent = message;
    div.classList.add('toast');
    document.body.appendChild(div);

    setTimeout(() => {
        div.remove()
    },3000);
  }
    


 




