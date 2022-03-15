let displaytext=document.getElementById("txt1");
function display(n){
    displaytext.value+=n;
}
function calculate()
{
    var txt=document.getElementById("txt1").value;
    if(txt)
    {
        document.getElementById("txt1").value=eval(txt);
    }
    else{
        alert("Please Enter value");
    }
}
function allclear()
{
    displaytext.value="";
}
function del(){
    displaytext.value=displaytext.value.slice(0,-1);
}