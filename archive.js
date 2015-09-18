$(document).ready(function(){
    makePage();
});

function makePage(){
    var month_counter = 0;
    var which_month = 0;
    
    addHeading("April 2015");
    
    for (var i =0;i<links.length;i++){

        addLink(links[i], i);
        month_counter++;
        
        if (month_counter == per_month[which_month]){
            month_counter = 0;
            addHeading(month_names[which_month]); 
            which_month++;

        }
    }
}


function addHeading(month_name){    
    $("body").append("<div class='title'> <h1>"+month_name+"</h1><hr></div>"); 
}

function addLink(src, index){

    var link = document.createElement("a");
   // link.textContent = src.substring(src.lastIndexOf("/")+1);
  //  link.innerHTML = titles[index]+"<br>"+subtitles[index];
    link.href = src;
    if (index%2==0){
        link.className = "alignleft size-large wp-image-1086";        
    } else {
        link.className = "alignright size-large wp-image-1086";        
    }
    link.style.backgroundImage = img_srcs[index];
    
    var caption = document.createElement("span");
    
    
    
  //  caption.innerHTML = titles[index]+"<br>"+subtitles[index];
    
    var title = document.createElement("span");
    title.textContent = titles[index];
    caption.appendChild(title);
    caption.appendChild(document.createElement("br"));
    
    var subtitle = document.createElement("span");
    subtitle.textContent = subtitles[index];
    caption.appendChild(subtitle);
    caption.appendChild(document.createElement("br"));
    
    var byline = document.createElement("span");
    byline.textContent = "By "+bylines[index];
    caption.appendChild(byline);    
    
    link.appendChild(caption);

    
    var link = $("body").append(link);
}


/*
<style>
a.wp-image-1086 {width:500px; display:inline-block; height:261px; background-size:cover; position:relative}
a.wp-image-1086:before {background-color: rgba(0,0,0,0.4); height:100%; width:100%; content: " "; display: table;}
h1 {font-size:17px !important; clear:both}
a.wp-image-1086>span {width: 80%; color:white; position:absolute; bottom: 10%; text-align: left; right: 10%;}
a.wp-image-1086>span>span:first-of-type {font-size: 26px; font-weight:bold;}
a.wp-image-1086>span>span:nth-of-type(2) {font-size: 16px;}
a.wp-image-1086>span>span:nth-of-type(3) {text-transform: uppercase;}
</style>

*/

var month_names = ["March 2015", "February 2015", "December 2014", "November 2014", "October 2014"];

var per_month = [5,4,10,4,6];

var links = ["https://synapse.atavist.com/achievement-gap", 
"https://synapse.atavist.com/duallanguage", 
"https://synapse.atavist.com/mama-dips",
"https://synapse.atavist.com/game-face",
"https://synapse.atavist.com/gum",
"https://synapse.atavist.com/marathon",
"https://synapse.atavist.com/sister_south",
"https://synapse.atavist.com/coleslaw_wrestling",
"https://synapse.atavist.com/franklin_then_and_now",
"https://synapse.atavist.com/aaadhistory",
"https://synapse.atavist.com/guardians",
"https://synapse.atavist.com/boardofgovernors",
"https://synapse.atavist.com/rewritingthecode",
"https://synapse.atavist.com/jaysmith",
"https://synapse.atavist.com/onecommunity",
"https://synapse.atavist.com/startups",
"https://synapse.atavist.com/tuition",
"https://synapse.atavist.com/church",
"https://synapse.atavist.com/collegecatch22",
"https://synapse.atavist.com/gio",
"https://synapse.atavist.com/undocumented",
"https://synapse.atavist.com/fencing",
"https://synapse.atavist.com/veterans",
"https://synapse.atavist.com/hedgepeth",
"https://synapse.atavist.com/homeless",
"https://synapse.atavist.com/patrickewing",
"https://synapse.atavist.com/chilling-effect",
"https://synapse.atavist.com/tfa",
"https://synapse.atavist.com/jones",
"https://synapse.atavist.com/sealings",
"https://synapse.atavist.com/folt",
"https://synapse.atavist.com/towing",
"https://synapse.atavist.com/scandal",
"https://synapse.atavist.com/hisownhike",
"https://synapse.atavist.com/depression"
];

var img_srcs = ["url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~well-1430067287-55.jpg )",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~dsc0184-1430106231-56.jpg )",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~mamad-1430089322-22.jpg )", "url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~img2291-1430063972-100.jpg )", 
"",
"",
"",
"",
"",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~bsm5-1423518193-38.jpg )", "url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~hemlockscon-1424191674-89.jpg )",
"",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~ssimg5367-1423516818-10.jpg )", "url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~simg5353-1423516148-51.jpg )", 
"",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~dsc0332-1423081641-56.jpg )",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~wilsonsynaps-1424050174-66.jpg )",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~1102littlec-1414961818-37.jpg )",
"",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~dsc1907-1418917882-25.jpg )", "url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~img4570cv-1418002908-8.jpg )",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~img3745-1417810508-81.jpg )",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~studentvets-1417918845-20.jpg )",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~1004hedgepe-1414988458-15.jpg )",
"",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~patrickewin-1412367761-2.jpg )",
"",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~1014tfacon-1414963186-10.jpg )",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~img3253-1414966758-89.jpg )",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~img8926105-1409081113-13.jpg )", "url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~foltceremon-1412295486-6.jpg )", "url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~img8519-1412124467-16.jpg )", "url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~tocscandal-1412270022-33.jpg )", "url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~massachusett-1412014361-91.jpg )",
"url(https://synapse.atavist.com/data/files/organization/7429/image/derivative/scale~1200x1200~quotecrop-1412187549-53.jpg )"];

var titles = ["Closing the Achievement Gap", 
  "Learning in Two Languages", 
  "Home Cooked", 
  "Game Face", 
  "Gum", 
  "Marathon", 
  "Sister South, Principal", 
  "Coleslaw", 
  "Franklin", 
  "An Overlooked History", 
  "Guardians of the Forest", 
  "BOG", 
  "Rewriting the Code", 
  "'Bustin' the Envelope'", 
  "Column", 
  "The Story of a Startup", 
  "Pushing the Limit", 
  "The Little Church That Could", 
  "College Catch-22", 
  "RUN GIO 2012", 
  "Undocumented but Undaunted", 
  "The Advance of a Legend", 
  "In Transition", 
  "'Distressed, but not in despair'", 
  "Homeless and Need Your Help Thank You", 
  "A Basketball Player, the KKK and a Rally No One's Ever Heard Of", 
  "The Chilling Effect", 
  "Teach for North Carolina", 
  "A Homeless Man with a Place to Live", 
  "In the Shadow of the Sealings", 
  "A Tall Order", 
  "King of a Small Empire", 
  "The Cost of a Scandal", 
  "His Own Hike", 
  "Depression in the Southern Part of Heaven"];

var subtitles = ["After a turbulent year, the UNC-system is wondering what's next", 
   "An historic Chapel Hill elementary school explores what could represent the future of education in the U.S.", 
   "How the story of a restaurant parallels the story of a life", 
   "Student-athletes learn to care for every part of the body, but the mind is often overlooked", 
 "",  "", 
"", 
"", 
"", 
   "African American studies was born from the struggles of black students and staff on campus in the 1960s", 
   "How a tiny bug is destroying millions of acres of our forests", 
   "", 
   "How the gender disparity in computer science represents a larger trend in a growing industry", 
   "How Jay Smith, 65 and still running, defies time and age", 
   "", 
   "How UNC has become a launchpad for student innovators", 
   "Some feel slighted by a tuition policy that encourages students to get a degree in eight semesters", 
   "In the midst of student living, one Northside church fights to keep a separate, struggling community on its feet", 
   "", 
   "An oral history of Giovani Bernard's punt return against N.C. State", 
   "In the college town where they grew up, young Hispanic immigrants come together to find opportunity and community.", 
   "A chronicle of the shifting fencing world through one man's memory", 
   "For many student veterans, a new battle begins after arriving on campus", 
   "After two years of Faith Hedgepeth's murder going unsolved, fresh grief lingers among her family and friends. ", 
   "", 
   "The Strange Tale of Patrick Ewing's Recruitment to UNC", 
   "Why UNC can't clear one of the last hurdles to campus sustainability", 
   "How UNC fuels the TFA pipeline and what that says about education", 
   "A story of escaping homelessness but remaining trapped", 
   "Information related to UNC student Faith Hedgepeth's 2012 murder remains sealed by court order", 
   "New to the University, Chancellor Carol Folt already has a lengthy to-do list", 
 "",  "", 
   "An 18-year-old puts school on hold to find education in a 2,000-mile wilderness.", 
   ""];

var bylines = ["Liz Crampton", 
              "Camila Molina", 
               "Jackson Knapp", 
               "Sarah Niss", 
               "Dylan Howlett", 
               "Emily Overcarsh", 
               "Emily Byrd", 
               "Rob Harms", 
               "Chris Conway", 
               "Jordan Bailey", 
               "Liz Crampton", 
               "Carolyn Bahar", 
               "Emily Byrd", 
               "Rob Harms", 
               "Layla Quran", 
               "Emily Hackeling", 
               "Sarah Niss", 
               "Megan Cassella", 
               "Caitlin McCabe", 
               "Rob Harms and Dylan Howlett", 
               "Rachel Herzog", 
               "Amy Tsai", 
               "Sarah Niss", 
               "Brooke Eller", 
               "Rob Harms", 
               "Rob Harms", 
               "Emily Byrd", 
               "Liz Crampton", 
               "Rob Harms", 
               "Chelsey Dulaney", 
               "Liz Crampton",
               "Claire McNeill",
               "Caitlin McCabe",
               "Claire McNeill",
               "Claire McNeill"
            ];


