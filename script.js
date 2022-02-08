function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    
    if(p == ""){
        alert("Principal amount can not be left blank");
    }
    var interest = (p*r*t)/100;

    const year = parseInt(2022) + parseInt(t);

    let string = `If you deposit ${p}, <br>
     at an interest rate of ${r}%.<br>
     You will receive an amount of ${interest},<br>
     in the year ${year}<br>
    `;

    if(p != ""){
        document.getElementById("result").style.display= "block";
        document.getElementById("container").style.height= "400px";
        document.getElementById("result").innerHTML = string;
    }
}
        