$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=nbc-news&apiKey=70de3c70d23e4af78098dcb1c5f0ab5b" ,
    success: function(data)
    {
        for(i=0; i<data.article8 ; i++){
            document.querySelector(".row").innerHTML += `
            <div class="column">
                <div class="content">
                    <img class="img-1" src='${data.articles[i].urlToImage}'>
                    <h3>${data.articles[i].title}</h3>
                    <p>${data.articles[i].description}</p>
                </div>
            </div>`
        }
    },
    eror:function(error){
        alert(error.response.JSON.message);
    }
});