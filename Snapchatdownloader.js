// Snapchat-Memory Downloader

var go = 0;
//0 is the start number

function download(){
    var links = document.getElementsByTagName("table")[0].getElementsByTagName("a");
    //Finds all of the "download" button entities and putting them under the variable 'links'
    links.value = go;
    //Mixes links and go into the [array]
    links[go].click();
    //Clicks each "download" starting from 'go = 0'
    console.log(go);
    //Keeps progress of how many downloads you have initated (Can run behind if you have it on a high setting) seems to be glitchy on firefox.
    go++;
    //Makes the variable 0 go up in 1 increment everytime it gets to this part
    setTimeout(download, 5000);
    //If you don't have a timeout it will just try and download all of them at once. This is the optimum speed but obviously
    //feel free to increase or decrease.
    //it starts the script again every 5 seconds so you have plenty of time to download the files.
};

download();

