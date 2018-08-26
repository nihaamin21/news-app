$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=nbc-news&apiKey=70de3c70d23e4af78098dcb1c5f0ab5b" ,
    success: function(data)
    {  
            document.querySelector('.img-1').style.background-image = `url(${data.articles[0].urlToImage});`
            document.querySelector('h3').innerHTML = `${data.articles[0].title}`;
            document.querySelector('p').innerHTML = `${data.articles[0].description}`;
        }
    },
    eror:function(error){
        alert(error.response.JSON.message);
    }
});