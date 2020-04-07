// Snapchat-Memory Downloader

var go = 0;
//This makes the variable = 0

function download(){
    var links = document.getElementsByTagName("table")[0].getElementsByTagName("a");
    //Finds all of the "download" button entities and putting them under the variable 'links'
    eval(links[go].href);
    //Is evaluating the download button with the variable 0 so you start off with the first one
    go++;
    //Makes the variable 0 go up in 1 increment everytime it gets to this part
    console.log(go);
    //Keeps progress of how many downloads you have initated (Can run behind if you have it on a high setting)
    setTimeout(download, 5000);
    //If you don't have a timeout it will just try and download all of them at once. This is the optimum speed but obviously
    //feel free to increase or decrease.
    //it starts the script again every 5 seconds so you have plenty of time to download the files.
    };

download();

