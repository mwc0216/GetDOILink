 
chrome.runtime.onMessage.addListener(  
  function(request, sender, sendResponse) {  
     console.log(request.text); 
     copyToClipboard("https://doi.org/"+request.text);
     sendResponse({data: "get"});  
  });

 

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  