function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    
    
     if( p == "" || parseInt(p) <=0){
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
    }
    var interest = (p*r*t)/100;

    const year = parseInt(2022) + parseInt(t);

    let string = `If you deposit <mark>${p}</mark>, <br>
     at an interest rate of <mark>${r}%</mark>.<br>
     You will receive an amount of <mark>${interest}</mark>,<br>
     in the year <mark>${year}<mark><br>
    `;

    if(0 < parseInt(p)){
        document.getElementById("result").style.display= "block";
        document.getElementById("container").style.height= "400px";
        document.getElementById("result").innerHTML = string;
    }
}
        