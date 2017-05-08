window.onload = function ()
{
    if (localStorage.onload_count)
    {
        localStorage.onload_count = Number(localStorage.onload_count) + 1;
    } else
    {
        localStorage.onload_count = 1;
    }
    var div = document.getElementById("localKlub")
    div.innerHTML = "Licznik odwiedzin strony (OGOLNIE): " +
        localStorage.onload_count;
}