var q = '';
function onclik(a)
{
    var val = document.getElementById('result');
    val.value += a;
}
function clr()
{
    var val = document.getElementById('result');
    val.value = '';
    q = '';
}
function ans()
{
    var val = document.getElementById('result');
    val.value = eval(val.value).toFixed(9);
    q = val.value;
}
function Anss()
{
    var val = document.getElementById('result');
    val.value = '';
    val.value = q;
}