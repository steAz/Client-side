window.onload = function ()
{
    if (sessionStorage.onload_count) {
        sessionStorage.onload_count = Number(sessionStorage.onload_count) + 1;
    } else {
        sessionStorage.onload_count = 1;
    }
    var div = document.getElementById("sessionKlub")
    div.innerHTML = " Licznik odwiedzin tej podstrony (W OBECNEJ SESJI) " +
        sessionStorage.onload_count;
}



