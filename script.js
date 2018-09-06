$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=nbc-news&apiKey=70de3c70d23e4af78098dcb1c5f0ab5b" ,
    success: function(data)
    {  
            document.querySelector('#img-1').style["background-image"] = `url(${data.articles[1].urlToImage})`;
            document.querySelector('#title-1').innerHTML = `${data.articles[1].title}`;
            document.querySelector('#discription-1').innerHTML = `${data.articles[1].description}`;
        
    },
    error :function(error){
        alert(error.response.JSON.message);
    }
});