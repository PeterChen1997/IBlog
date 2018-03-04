export function UnicodeToAscii(content) {   
  let code = content.match(/&#(\d+);/g);  
  if(!code)  return 'Nothing';
  let result= '';  
  for (var i=0; i<code.length; i++)  
    result += String.fromCharCode(code[i].replace(/[&#;]/g, ''));  
  return result
} 



