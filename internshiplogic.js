function addedu()
{
    let newtext=document.createElement("textarea");
    newtext.classList.add("edu");
    newtext.setAttribute("placeholder","enter here");
    let old=document.getElementById("edu_btn");
    old.before(newtext);
}
function addproject()
{
    let newtext=document.createElement("textarea");
    newtext.classList.add("proj");
    newtext.setAttribute("placeholder","enter here");
    let old=document.getElementById("project_btn");
    old.before(newtext);
}
function addworkexp()
{
    let newtext=document.createElement("textarea");
    newtext.classList.add("wrkex");
    newtext.setAttribute("placeholder","enter here");
    let old=document.getElementById("workexp_btn");
    old.before(newtext);
}
function addskills()
{
    let newtext=document.createElement("textarea");
    newtext.classList.add("skl");
    newtext.setAttribute("placeholder","enter here");
    let old=document.getElementById("skills_btn");
    old.before(newtext);
}
function genresume()
{ 
    let name=document.querySelector("#name").value;
    document.querySelector("#Tname").innerHTML=name;
    let phone=document.querySelector("#phone").value;
    document.querySelector("#Tphone").innerHTML=phone;
    let address=document.querySelector("#address").value;
    document.querySelector("#Taddress").innerHTML=address;
    let email=document.querySelector("#email").value;
    document.querySelector("#Temail").innerHTML=email;
    let linkedin=document.querySelector("#linkedin").value;
    document.querySelector("#Tlinkedin").innerHTML=linkedin;
    let twitter=document.querySelector("#twitter").value;
    document.querySelector("#Ttwitter").innerHTML=twitter;
    let github=document.querySelector("#github").value;
    document.querySelector("#Tgithub").innerHTML=github;
    let obj=document.querySelector("#obj").value;
    document.querySelector("#Tobjh").innerHTML=obj;
    var str="";
    let edu=document.querySelectorAll(".edu");
    for(let i of edu)
    {
        str=str+`<li>${i.value}</li>`;
    }
    document.querySelector("#Tedulist").innerHTML=str;
    str="";
    let proj=document.querySelectorAll(".proj");
    for(let i of proj)
    {
        str=str+`<li>${i.value}</li>`;
    }
    document.querySelector("#Tprojectlist").innerHTML=str;
    str="";
    let wrkex=document.querySelectorAll(".wrkex");
    for(let i of wrkex)
    {
        str=str+`<li>${i.value}</li>`;
    }
    document.querySelector("#Tworkexplist").innerHTML=str;
    str="";
    let skl=document.querySelectorAll(".skl");
    for(let i of skl)
    {
        str=str+`<li>${i.value}</li>`;
    }
    document.querySelector("#Tskillslist").innerHTML=str;
    document.querySelector("#infouter").style.display="none";
    document.querySelector("#tempouter").style.display="block";
    document.querySelector("body").style.backgroundImage="none";
    document.querySelector("body").style.backgroundColor="rgb(214, 150, 72)";
    let printtemplate=document.querySelector("#printtemplate");
    printtemplate.addEventListener("click",(e)=>{
        document.querySelector("#Tprint").style.display="none";
    });
    printtemplate.addEventListener("click",(e)=>{
        window.print();
    });
}