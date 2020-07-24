var boxes=document.getElementsByClassName("row-boxes");

var operand1=0;
var operand2=null;
var operator=null;

var workspace=document.getElementById("workspace");

for(var i=0; i<boxes.length; i++){

    boxes[i].addEventListener('click',function(){

        var value=this.getAttribute('data-value');

        if(value == 'ac')
        {
            workspace.innerText='';
        }

        else if(value == 'sign')
        {
            workspace.innerText=-workspace.innerText;
        }

        else if(value == '%')
        {
            workspace.innerText=workspace.innerText/100;
        }

        else if(value == '+')
        {
            operator='+';
            operand1=parseFloat(workspace.textContent);
            workspace.innerText=" ";
        }

        else if(value == '-')
        {
            operator='-';
            operand1=parseFloat(workspace.textContent);
            workspace.innerText=" ";
        }

        else if(value == '*')
        {
            operator='*';
            operand1=parseFloat(workspace.textContent);
            workspace.innerText=" ";
        }

        else if(value == '/')
        {
            operator='/';
            operand1=parseFloat(workspace.textContent);
            workspace.innerText=" ";
        }


        else if(value == '='){

            operand2=parseFloat(workspace.textContent);


            if(operator == '/')
            {
                if(operand2 == 0)
                {
                    
                    workspace.innerText="Error";
                }
            }

            else{
                var result=eval(operand1 + operator + operand2);
                // console.log(result);
            //  var ans=toString(result);
                workspace.innerText=result;  

            }
        }

        else{
            workspace.innerText+=value;
        } 

    })
}
