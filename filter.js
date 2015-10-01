document.addEventListener("DOMContentLoaded", function(event) {
   
    $("#preloader").remove();
    
    var alignments = [];
    $("a.wp-image-1086").each(function(i,el){
        alignments.push($(this).is(".alignleft"));
    });
    
    var filters = $("nav a");
    
    filters.click(function(){
        $(".selected").removeClass("selected");
        this.className += " selected";    
                
        if (this.id=="all"){
            $(".title").show();
            $("a.wp-image-1086").show();
            $("a.wp-image-1086").each(function(i, el){
                if (alignments[i]){
                    $(this).removeClass("alignright").addClass("alignleft");
                } else {
                    $(this).removeClass("alignleft").addClass("alignright");
                }
            });
        } else {
            $(".title").hide();
            $("a.wp-image-1086").hide();
            var selector = "a.wp-image-1086."+this.id;
            $(selector).show().each(function(i,el){
                if (i%2==0){
                    $(this).removeClass("alignright").addClass("alignleft");
                } else {
                    $(this).removeClass("alignleft").addClass("alignright");
                }
            });
        }
        
    });

});


                        