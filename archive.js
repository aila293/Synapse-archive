document.addEventListener("DOMContentLoaded", function(event) {
     //   makeTwoColumnPage();
        makeThreeColumnPage();
  });

function makeTwoColumnPage(){

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


function makeThreeColumnPage(){
    
    for (var key in articles){
        addFeature(articles[key][0]);
    
        var row;        
        for (var i=1;i<articles[key].length;i++){
            if (i%3==1){
                row = document.createElement("div");
                row.className = "row";
                document.body.appendChild(row);
            }
            addArticleCard(articles[key][i], row);
        }
    }
}

function addFeature(article){
    var row = document.createElement("div");
    row.className = "row";
    
    var link = document.createElement("a");
 
    link.href = article.link;
    link.className = "size-large wp-image-1086 twelve columns article feature ";
    link.className += article.tags;
    link.style.backgroundImage = article.img;
    
    var caption = document.createElement("span");
    
    var title = document.createElement("span");
    title.textContent = article.title;
    title.className = "article-title";
    
    var subtitle = document.createElement("span");
    subtitle.textContent = article.subtitle;
    subtitle.className = "article-subtitle";

    var byline = document.createElement("span");
    byline.textContent = "By "+article.byline;
    byline.className = "article-byline";
    
    caption.appendChild(title);
    caption.appendChild(document.createElement("br"));
    caption.appendChild(subtitle);
    caption.appendChild(document.createElement("br"));
    caption.appendChild(byline); 
    
    link.appendChild(caption);
    row.appendChild(link);
    
    document.body.appendChild(row);
}

function addArticleCard(article, row){

    var card = document.createElement("div");
    card.className = "four columns article ";
    card.className += article.tags;

    var link = document.createElement("a");
    link.className = "four columns wp-image-1086 "
    link.href = article.link;
    link.style.backgroundImage = article.img;
    
    var caption = document.createElement("div");
    
    var title = document.createElement("span");
    title.textContent = article.title;
    title.className = "article-title";
    
    var subtitle = document.createElement("span");
    subtitle.textContent = article.subtitle;
    subtitle.className = "article-subtitle";

    var byline = document.createElement("span");
    byline.textContent = "By "+article.byline;
    byline.className = "article-byline";
    
    caption.appendChild(title);
    caption.appendChild(document.createElement("br"));
    caption.appendChild(subtitle);
    caption.appendChild(document.createElement("br"));
    caption.appendChild(byline); 
    
    card.appendChild(link);
    card.appendChild(caption);
    
    row.appendChild(card);
}