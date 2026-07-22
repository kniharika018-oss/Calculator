function appendCharacter(ch)
{
    const display=document.getElementById("display");
    let text=display.innerText;
    text=text+ch;
    document.getElementById("display").innerText=text;
}

function clearDisplay()
{
    document.getElementById("display").innerText='';
}

function backSpace()
{
    let text=document.getElementById('display').innerText
    text=text.slice(0,-1)
    document.getElementById('display').innerText=text
    
}

function calculate()
{
  const display=document.getElementById("display");
  let text=display.innerText
  text=eval(text) 
  document.getElementById("display").innerText=text;
}