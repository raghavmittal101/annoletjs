var xhr = new XMLHttpRequest();
xhr.open("GET", "//localhost:5000/test", true);
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.send();

xhr.onreadystatechange = processRequest;
console.log(xhr.status)

function processRequest(e)
{
    if (xhr.readyState == 4 )
    {
        alert(xhr.responseText);
    }
}