(function(){
var content = '<div id="ie-compatibility-popover" style="z-index: 9999; position: absolute; width: 200px; height: 100px;'+
'top: 0; right: 0px; background-color: #777; color: white; padding: 16px;'+
'text-align: center">'+
'  <p>For correct display of this site, please turn of "Compatibility View".</p>'+
'  <p>You can do this by clicking on the "broken page" symbol next to the'+
'     address bar in Internet Explorer.</p>'+
'  <a href="#" id="ie-compatibility-close" style="background-color: white;'+
'  color: black; text-decoration: none; padding: 3px">CLOSE</a>'+
'</div>';

var $$ = function(id) {
  return document.getElementById(id);
};
var $$$ = function(tagName) {
  return document.getElementsByTagName(tagName);
};

window.onload = function(){
  if (navigator.userAgent.indexOf("Trident") != -1 && navigator.userAgent.indexOf("SLCC2") != -1) {
    var body = $$$('body')[0];
    body.innerHTML += content;
    $$('ie-compatibility-close').onclick = function(){
      $$('ie-compatibility-popover').style.display = 'none';
    };
  }
};
})();
