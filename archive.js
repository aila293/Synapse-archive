document.addEventListener("DOMContentLoaded", function(event) {
        makePage();
  });

function makePage(){

    for (var key in articles){
        addHeading(key);
        
        for (var i=0;i<articles[key].length;i++){
            addArticle(articles[key][i], i);
        }
    }
    
}

function addHeading(month_name){    
    var title = document.createElement("div");
    title.className = "title";
    
    var heading = document.createElement("h1");
    heading.textContent = month_name;
    
    title.appendChild(heading);
    title.appendChild(document.createElement("hr"));
    
    document.body.appendChild(title);
}

function addArticle(article, index){

    var link = document.createElement("a");
 
    link.href = article.link;
    if (index%2==0){
        link.className = "alignleft size-large wp-image-1086 ";        
    } else {
        link.className = "alignright size-large wp-image-1086 ";        
    }
    link.className += article.tags;
    link.style.backgroundImage = article.img;
    
    var caption = document.createElement("span");
    
    var title = document.createElement("span");
    title.textContent = article.title;
    
    var subtitle = document.createElement("span");
    subtitle.textContent = article.subtitle;

    var byline = document.createElement("span");
    byline.textContent = "By "+article.byline;
    
    caption.appendChild(title);
    caption.appendChild(document.createElement("br"));
    caption.appendChild(subtitle);
    caption.appendChild(document.createElement("br"));
    caption.appendChild(byline); 
    
    link.appendChild(caption);
    
    document.body.appendChild(link);
}
