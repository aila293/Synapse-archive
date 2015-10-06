document.addEventListener("DOMContentLoaded", function(event) {
   
    $("#preloader").remove();
    
    var all = $(".twelve .row");
    
    $("nav a").click(function(){
        $(".selected").removeClass("selected");
        this.className += " selected";    
                
        if (this.id=="all"){
//            $("a.wp-image-1086").slideDown();
//            $("a.wp-image-1086").each(function(i, el){
//                if (alignments[i]){
//                    $(this).removeClass("alignright").addClass("alignleft");
//                } else {
//                    $(this).removeClass("alignleft").addClass("alignright");
//                }
//            });
            
            $(".article").show();
        } else {
                        
            $(".article").hide();
            var selector = ".article."+this.id;
            $(selector).show();

            
//            all.hide();
//            $(".filtered").remove();
//            
//            $(".page-body").append("<div class='filtered'></div>");
//            
//            var selector = ".article."+this.id;
//            var counter = 0;
//            var row;
//            $(selector).slideDown().each(function(i,el){
//                console.log(counter);
//                if (counter==0){
//                    $(".filtered").append( $(this).addClass("feature").wrap("<div class='row'></div>"));
//                    counter = 1;
//                } else if (counter==1 || counter==4){
//                    row = document.createElement("div");
//                    row.className = "row";
//                    row.appendChild($(this).removeClass("feature")[0]);
//                    $(".filtered").append(row);
//                    counter++;
//                    
//                } else {
//                    row.appendChild($(this).removeClass("feature")[0]);
//                    $(".filtered").append(row); 
//                    if (counter==6) counter=0;
//                }
//            });
        }
        
    });

});


                        