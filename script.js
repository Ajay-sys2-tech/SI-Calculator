function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;

    var interest = (p*r*t)/100;

    const year = parseInt(2022) + parseInt(t);

    let string = `If you deposit ${p}, <br>
     at an interest rate of ${r}%.<br>
     You will receive an amount of ${interest},<br>
     in the year ${year}<br>
    `;

    document.getElementById("result").style.display= "block";
    document.getElementById("container").style.height= "400px";
    document.getElementById("result").innerHTML = string;
    
}
        