// Snapchat-Memory Downloader

var go = 0;
//0 is the start number

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

download();https://app.snapchat.com/dmd/memories?uid=9678176f-645f-426b-9896-5e9571ff5bcc&sid=b02b77f6-b4c5-3689-d73f-9165d8034bcb&mid=616ec186-e6d4-d229-2b1a-6f4dfc9241f8&ts=1604014617574&proxy=true&sig=079c188fab923cdbf76d9fe9215f84e50f2f3f148a568a653ed234a971ae0c61


