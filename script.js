$.ajax({
    url: "https://newsapi.org/v2/top-headlines?sources=nbc-news&apiKey=70de3c70d23e4af78098dcb1c5f0ab5b" ,
    success: function(data)
    {   
        
        for(let i=1; i<9; i++){
            let myCard=document.querySelector('.main');
            myCard.innerHTML+=`<div class="card">
          <div class="card-img-top" id="img-1" style = background-image:url(${data.articles[i].urlToImage});></div>
          <div class="card-body">
            <h5 class="card-title" id="title-1"> ${data.articles[i].title.slice(0,50)+ "..."}</h5>
            <p class="card-text" id="discription-1"> ${data.articles[i].description.slice(0,100)+ "..."}</p>
            <div class="btn-group" role="group" aria-label="Basic example" >
              <a href=" ${data.articles[i].url}" id="more-detail-1" target="_blank">
              <button type="button" class="btn btn-primary" >More <span><i class="fas fa-angle-double-right"></i></span></button>
              </a>
            </div>
            </div>
          </div>`
        }


            // document.querySelector('#img-1').style["background-image"] = `url(${data.articles[1].urlToImage})`;
            // document.querySelector('#title-1').innerHTML = `${data.articles[1].title}`;
            // document.querySelector('#more-detail-1').href = `${data.articles[1].url}`;

            // let desc = data.articles[i].description;
            // if (desc.length > 100) {
            //     desc  = desc.slice(0,100);
            //     desc += "...";
            // }
            // document.querySelector('#discription-1').innerHTML = `${desc}`;
            

            // document.querySelector('#img-2').style["background-image"] = `url(${data.articles[2].urlToImage})`;
            // document.querySelector('#title-2').innerHTML = `${data.articles[2].title}`;
            // document.querySelector('#discription-2').innerHTML = `${data.articles[2].description}`;
            // document.querySelector('#more-detail-2').href = `${data.articles[2].url}`;

            // document.querySelector('#img-3').style["background-image"] = `url(${data.articles[3].urlToImage})`;
            // document.querySelector('#title-3').innerHTML = `${data.articles[3].title}`;
            // document.querySelector('#discription-3').innerHTML = `${data.articles[3].description}`;
            // document.querySelector('#more-detail-3').href = `${data.articles[3].url}`;

            // document.querySelector('#img-4').style["background-image"] = `url(${data.articles[4].urlToImage})`;
            // document.querySelector('#title-4').innerHTML = `${data.articles[4].title}`;
            // document.querySelector('#discription-4').innerHTML = `${data.articles[4].description}`;
            // document.querySelector('#more-detail-4').href = `${data.articles[4].url}`;


            // document.querySelector('#img-5').style["background-image"] = `url(${data.articles[5].urlToImage})`;
            // document.querySelector('#title-5').innerHTML = `${data.articles[5].title}`;
            // document.querySelector('#discription-5').innerHTML = `${data.articles[5].description}`;
            // document.querySelector('#more-detail-5').href = `${data.articles[5].url}`;

            // document.querySelector('#img-6').style["background-image"] = `url(${data.articles[6].urlToImage})`;
            // document.querySelector('#title-6').innerHTML = `${data.articles[6].title}`;
            // document.querySelector('#discription-6').innerHTML = `${data.articles[6].description}`;
            // document.querySelector('#more-detail-6').href = `${data.articles[6].url}`;


            // document.querySelector('#img-7').style["background-image"] = `url(${data.articles[7].urlToImage})`;
            // document.querySelector('#title-7').innerHTML = `${data.articles[7].title}`;
            // document.querySelector('#discription-7').innerHTML = `${data.articles[7].description}`;
            // document.querySelector('#more-detail-7').href = `${data.articles[7].url}`;

            // document.querySelector('#img-8').style["background-image"] = `url(${data.articles[8].urlToImage})`;
            // document.querySelector('#title-8').innerHTML = `${data.articles[8].title}`;
            // document.querySelector('#discription-8').innerHTML = `${data.articles[8].description}`;
            // document.querySelector('#more-detail-8').href = `${data.articles[8].url}`;

            // document.querySelector('#img-9').style["background-image"] = `url(${data.articles[9].urlToImage})`;
            // document.querySelector('#title-9').innerHTML = `${data.articles[9].title}`;
            // document.querySelector('#discription-9').innerHTML = `${data.articles[9].description}`;
            // document.querySelector('#more-detail-9').href = `${data.articles[9].url}`;

            // document.querySelector('#img-10').style["background-image"] = `url(${data.articles[10].urlToImage})`;
            // document.querySelector('#title-10').innerHTML = `${data.articles[10].title}`;
            // document.querySelector('#discription-10').innerHTML = `${data.articles[10].description}`;
    },
    error :function(error){
        alert(error.response.JSON.message);
    }
});