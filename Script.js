function demo4(val) 
{
   var v = document.getElementById('res');
   v.value += val;
}
function demo3() 
{
   var num1 = document.getElementById('res').value;
   try 
   {
      var num2 = eval(num1.replace('x', '*'));
      document.getElementById('res').value = num2;
   } 
   catch
   {
      document.getElementById('res').value = 'Error';
   }
}
function demo1() 
{
   var inp = document.getElementById('res');
   inp.value = '';
}
function demo2()
 {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function (event)
 {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key))
	   {
      demo4(key === '*' ? 'x' : key);
   } 
   else if
   (key === 'Enter') 
   {
     demo3();
   } 
   else if (key === 'Backspace')
	   {
      demo2();
   } 
   else if (key.toLowerCase() === 'c')
	   {
      demo1();
   }
});
