const notepad = document.getElementById('notepad');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

//save button
saveBtn.addEventListener('click', () => {

 const file = new Blob([notepad.value],{type : "plain/text"});
const url = URL.createObjectURL(file);
const a = document.createElement("a");
a.href= url;
a.download = "notepad.txt";
a.click();
                                  });


//clear button

 clearBtn.addEventListener('click', () => {


notepad.value = "";




 }




);


// copy button 

copyBtn.addEventListener('click', () => {

navigator.clipboard.writeText(notepad.value);
alert("copied bro now you can paste anywher you want");





}


);