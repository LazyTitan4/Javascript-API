function generatePosts() {
    getPostDataJSON()
}

function getPostDataJSON() {
    //Telle inlegg for test
    var postCount = 0;

    //Går inn i JSON filen
    function loadJSON(path, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    //Hvis får kontakt med API
                    success(JSON.parse(xhr.responseText));
                }
                else {
                    //Hvis ikke får kontakt med API
                    error(xhr);
                }
            }
        };
        xhr.open("GET", path, true)
        xhr.send();
    }
    
    //Kjører funksjonen som går inn i JSON API
    loadJSON("https://jsonplaceholder.typicode.com/posts", myData,'jsonp');
    //Kjører myData funsjonen med JSON data for parameter

    function myData(Data) {
        //Data er json innhold
        //allPostDiv er diven i html
        let allPostsDiv = document.getElementById("allPosts");

        //Går igjennom alle innleggene i JSON fil
        for (var i = 0; i < 100; i++) {
            //Lager HTML elementer
            let postDiv = document.createElement("div");
            let postTitle = document.createElement("h2");
            let postBody = document.createElement("h4");
            let breakPoint = document.createElement("br");
            let viewComments = document.createElement("button");
            let commentList = document.createElement("div");

            //Legger til tekst i elementene som blir lagd over
            postTitle.textContent = Data[postCount].title;
            postBody.textContent = Data[postCount].body;

            //Setter CSS class name for styling
            postDiv.className = "postDiv" + postCount + " post";
            //Setter ID navn for javascript funksjoner
            postDiv.setAttribute("id", "postDiv" + postCount);

            //Legger til tekst i elementene som blir lagd over
            viewComments.textContent = "View Comments";
            viewComments.className = "btn viewComments";
            //Legger til en onclick funksjon til view comments knappen
            viewComments.setAttribute("onclick", "viewComments(" + postCount + ")");

            commentList.className = "commentList";
            commentList.setAttribute("id", "commentList" + postCount);

            //Legger til alle elementer til postDiv
            postDiv.appendChild(postTitle);
            postDiv.appendChild(breakPoint);
            postDiv.appendChild(postBody);
            postDiv.appendChild(breakPoint);
            postDiv.appendChild(viewComments);
            postDiv.appendChild(commentList);

            //Legger til postDiv til allPostsDiv
            allPostsDiv.appendChild(postDiv);

            //Øker postCount med 1
            postCount++;
        }
    }
}

//Funksjon for å legge til riktig kommentarer
function viewComments(num) {
    //Num er ID til inlegg - 1
    function loadJSON(path, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(JSON.parse(xhr.responseText));
                }
                else {
                    error(xhr);
                }
            }
        };
        xhr.open("GET", path, true)
        xhr.send();
    }
    //Samme funksjon som over for å hente inn JSON data
    loadJSON("https://jsonplaceholder.typicode.com/comments", myData,'jsonp');

    function myData(Data) {
        dataNum = num + 1;
        //Data num er ID til inlegg
        let commentList = document.getElementById("commentList" + num);

        for (var i = 0; i < 100; i++) {
            if (Data[i].postId == dataNum) {
                //Ser om postID til kommentar sammenlignes med postID til inlegg
                let comments = document.createElement("div");
                let CommentEmail = document.createElement("h4");
                let CommentName = document.createElement("h4");
                let CommentBody = document.createElement("h5");
                //Lage HTML elementer

                CommentEmail.textContent = Data[i].email;
                CommentName.textContent = Data[i].name;
                CommentBody.textContent = Data[i].body;
                //Legger til tekst i elementene som blir lagd over

                //Legger til CSS class name
                comments.className = "commentList";

                comments.appendChild(CommentEmail);
                comments.appendChild(CommentName);
                comments.appendChild(CommentBody);
                //Appeneder elementene til comments

                //Appender comments til commentList
                commentList.appendChild(comments);
            }
            else {
                //break;
            }
        }
    }
}






//------------------------------------------------------------------------------------------
//                         BARE FOR TESTING
//------------------------------------------------------------------------------------------ 





function getDataJson(num) {
    num = num - 1;

    function loadJSON(path, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    success(JSON.parse(xhr.responseText));
                }
                else {
                    error(xhr);
                }
            }
        };
        xhr.open("GET", path, true)
        xhr.send();
    }
    
    // loadJSON("https://jsonplaceholder.typicode.com/posts", myData,'jsonp');
    loadJSON("https://jsonplaceholder.typicode.com/users", myData,'jsonp');

    function myData(Data) {

        // var obj = JSON.parse(Data);

        if (num > 99) {
            document.getElementById("userid").textContent = "";
            document.getElementById("id").textContent = "";
            document.getElementById("title").textContent = "Please enter an ID between 1-100";
            document.getElementById("body").textContent = "";
        }
        else {
            // document.getElementById("userid").textContent = Data[num].userId;
            // document.getElementById("id").textContent = Data[num].id;
            // document.getElementById("title").textContent = Data[num].name;
            // document.getElementById("body").textContent = Data[num].username;


            console.log(Data[num].id);
            console.log(Data[num].name);
            console.log(Data[num].username);
            console.log(Data[num].email);
            console.log(Data[num].phone);
            console.log(Data[num].website);
            console.log(Data[num].address.street);
            console.log(Data[num].address.suite);
            console.log(Data[num].address.city);
            console.log(Data[num].address.zipcode);
            console.log(Data[num].address.geo.lat);
            console.log(Data[num].address.geo.lng);
            console.log(Data[num].company.name);
            console.log(Data[num].company.catchPhrase);
            console.log(Data[num].company.bs);

            // console.log(obj);

        }

        
    
        // console.log("First post");
        // console.log(Data[0]);
    
        // console.log("First three posts");
        // for (var i = 0; i < 3; i++){
        //     console.log(Data[i]);
        // }
    
        // console.log("First five ID");
        // for (var i = 0; i < 5; i++){
        //     console.log(Data[i].id);
        // }
    
    
    }

}


