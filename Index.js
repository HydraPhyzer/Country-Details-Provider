// import XMLHttpRequest from "./node_modules/xhr2/lib/xhr2";
function Country()
{
    let XHR=new XMLHttpRequest();
    
    XHR.onreadystatechange=function ()
    {
        if(XHR.status==200 && XHR.readyState==4)
        {
            let X=XHR.responseText;
            let Data=JSON.parse(X);

            document.querySelector('.Info').style.setProperty('display' , 'grid' , 'important');
            document.querySelector('.Flag').style.setProperty('display' , 'block' , 'important');

            document.querySelector('.Flg').src=Data[0].flags.png;
    
            document.querySelector('.CName').innerHTML=Data[0].name.official;
            document.querySelector('.CapName').innerHTML=Data[0].capital;
            document.querySelector('.PopNum').innerHTML=Data[0].population;
            document.querySelector('.AreaNum').innerHTML=Data[0].area;
        }
        else if(XHR.onerror=()=>
        {
            document.querySelector('.CName').innerHTML="Error Occured , Please !! Try Again After Sometime";
        });
    }

    let Inp=document.querySelector('input').value;
    let URL=`https://restcountries.com/v3.1/name/${Inp}?fullText=true`;
    XHR.open('GET' , URL);
    XHR.setRequestHeader('Accept' , 'application/json');
    XHR.send();
};
document.getElementById('Btn').addEventListener('click' , Country);
// Country();
                                