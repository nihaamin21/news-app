$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=nbc-news&apiKey=70de3c70d23e4af78098dcb1c5f0ab5b" ,
    success: function(data)
    {
        for(i=0; i<data.length; i++){
            console.log("lanat")
            document.querySelector(".content").innerHTML += `
            <img class="img-1" src=`url(${data.articles[0].urlToImage})`>
            <h3>${data.articles[0].title}</h3>
            <p>${data.articles[0].description}</p>`
        document.querySelector('.img-1').src = `url(${data.articles[0].urlToImage})`;
        }
    },
    eror:function(error){
        alert(error.response.JSON.message);
    }
});