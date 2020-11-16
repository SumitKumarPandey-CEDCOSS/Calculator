var a,numberfirst='',secondnumber='',result,k,i=0,count=0;
function cal(a)
{
    debugger;
    if(a =='+' || a=='-'|| a =='*' || a== '/' || a=='=')
    {
        if(count==0){
            if(numberfirst=='')
            {
                numberfirst=document.getElementById("disp").value;
                return;
            } else {
                secondnumber = document.getElementById("disp").value;
                res(a);
                return;
            }
        }count++;
    }
    if (numberfirst!="")
    {
    if(i==0) 
    {
        document.getElementById("disp").value="";
        i++;
    }
    document.getElementById("disp").value += a;
}
    else {
        document.getElementById("disp").value += a;
    }
}
    function res(k) {
        if (k=='+')
        {
            result = parseInt(numberfirst)+parseInt(secondnumber);
            document.getElementById("disp").value=result;
        }
        if (k=='-')
        {
            result = parseInt(numberfirst)-parseInt(secondnumber);
            document.getElementById("disp").value=result;
        }
        if (k=='*')
        {
            result = parseInt(numberfirst)*parseInt(secondnumber);
            document.getElementById("disp").value=result;
        }
        if (k=='/')
        {
            result = parseInt(numberfirst)/parseInt(secondnumber);
            document.getElementById("disp").value=result;
        }
    }
    function clr()
    {
        document.getElementById("disp").value="";
        location.reload();
    }
