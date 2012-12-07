// ==UserScript==
// @name           Turbo VIOIS
// @author          bodqhrohro
// @description  Мелкие улучшения в пользовательском интерфейсе сайта viois.ru
// @version        0.1.1 alpha
// @include        http://viois.ru/*
// ==/UserScript==

(function(){
var unsafeWindow= this.unsafeWindow;
(function(){
 var test_scr= document.createElement("script");
 var tid= ("t" + Math.random() + +(new Date())).replace(/\./g, "");
 test_scr.text= "window."+tid+"=true";
 document.querySelector("body").appendChild(test_scr);
 if (typeof(unsafeWindow) == "undefined" || !unsafeWindow[tid]) {
  if (window[tid]) {
   unsafeWindow= window;
  } else {
   var scr= document.createElement("script");
   scr.text= "(" +
    (function() {
     var el= document.createElement('unsafeWindow');
     el.style.display= 'none';
     el.onclick=function(){return window};
     document.body.appendChild(el);
    }).toString() + ")()";
   document.querySelector("body").appendChild(scr);
   this.unsafeWindow= document.querySelector("unsafeWindow").onclick();
   unsafeWindow= window.unsafeWindow;
  };
 }
})();
function show_settings(){
var nmp2=unsafeWindow.document.createElement('div');
nmp2.style.display='block';
nmp2.setAttribute('id','nmp2');
var nmp3=unsafeWindow.document.createElement('div');
nmp3.setAttribute('class','wcvdgCSS-bg');
nmp3.style.opacity=0.7;
nmp3.style.width='100%';
nmp3.style.height='150%';
var nmp4=unsafeWindow.document.createElement('div');
nmp4.setAttribute('class','wcvdgCSS');
nmp4.setAttribute('tabindex','0');
nmp4.style.left='396px';
nmp4.style.top='20%';
nmp4.setAttribute('role','dialog');
nmp4.setAttribute('arialabelledby',':0');
var nmp5=unsafeWindow.document.createElement('div');
nmp5.setAttribute('class','wcvdgCSS-title');
nmp5.setAttribute('id',':0');
var nmp6=unsafeWindow.document.createElement('span');
nmp6.setAttribute('class','wcvdgCSS-title-text');
nmp6.innerText='Настройки Turbo VIOIS';
var nmp7=unsafeWindow.document.createElement('span');
nmp7.setAttribute('class','wcvdgCSS-title-close');
nmp7.onclick=function(){unsafeWindow.document.body.removeChild(unsafeWindow.document.getElementById('nmp2'));};
var nmp8=unsafeWindow.document.createElement('img');
nmp8.setAttribute('src','/styles/images/archive_event.gif');
nmp8.style.display='inline';
nmp8.style.width='16px';
nmp8.style.height='16px';
nmp8.setAttribute('title','Закрыть');
var settingsBody = unsafeWindow.document.createElement('div');
settingsBody.setAttribute('class','wcvdgCSS-content');
var labelFieldReplace = addCheckbox(settingsBody, 'Увеличивать аватарки при наведении курсора');
labelFieldReplace.addEventListener('click', function () { toggleSetting('tv_thread_avatar'); }, true);
displaySetting(labelFieldReplace, 'tv_thread_avatar', false);    
var labelFieldReplace = addCheckbox(settingsBody, 'Не загружать миничат');
labelFieldReplace.addEventListener('click', function () { toggleSetting('tv_disable_chat'); }, true);
displaySetting(labelFieldReplace, 'tv_disable_chat', false);    
nmp7.appendChild(nmp8);
nmp5.appendChild(nmp6);
nmp5.appendChild(nmp7);
nmp4.appendChild(nmp5);
nmp4.appendChild(settingsBody);
nmp2.appendChild(nmp3);
nmp2.appendChild(nmp4);
unsafeWindow.document.body.appendChild(nmp2);
//<div style="display:none;" id="nmp2"><div class="wcvdgCSS-bg" style="opacity: 0.7; width: 100%; height: 150%; "></div><div class="wcvdgCSS" tabindex="0" style="left: 396px;top:20%;" role="dialog" arialabelledby=":0"><div class="wcvdgCSS-title" id=":0"><span class="wcvdgCSS-title-text">Настройки Turbo VIOIS</span><span class="wcvdgCSS-title-close" onclick="document.getElementById('nmp2').style.display='none';"><img src="/styles/images/archive_event.gif" style="display: inline; width:16px;  height:16px;" title="Закрыть"></span></div><div class="wcvdgCSS-content"></div><div class="wcvdgCSS-buttons" style="display: none; "></div></div></div>
}
function addCheckbox(settingsBody, text) {
  if (!settingsBody) return null;
  var option = document.createElement('input');
  option.setAttribute('type', 'checkbox');
  settingsBody.appendChild(option);
  settingsBody.appendChild(document.createTextNode(text));
  settingsBody.appendChild(document.createElement('br'));
  return option;
}
function toggleSetting(name) {
  var result = readSetting(name);
  result = !result;
  createCookie(name, result ? 'true' : 'false', 90);
  return result;
}
function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else expires = "";
  document.cookie = name + "=" + escape(value) + expires + "; path=/";
}
function readSetting(name) {
  return readCookie(name) == 'true';
}
function displaySetting(option, name, defaultChecked) {
  var result = readSetting(name);
  result = (result && !defaultChecked) || (!result && defaultChecked);
  if (option) option.checked = result;
  return result;
}
function readCookie(name) {
  var nameEq = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEq) == 0) return unescape(c.substring(nameEq.length, c.length));
  }
  return null;
}
function addStyle(s) {
  var head = document.getElementsByTagName('head')[0];
  if (!head) {
    return;
  }
  var style = document.createElement('style');
  style.type = 'text/css';
  var stylecontent = document.createTextNode(s);
  style.appendChild(stylecontent);
  head.appendChild(style);
}
function processAskPage(){
}
function processThreadPage(){
 if (readSetting('tv_thread_avatar')){
  addStyle('a:hover .wciuasCSS { width:auto; height:auto; position:absolute; z-index:150; }');
 }
}
function processBlogPage(){
 if (readSetting('tv_thread_avatar')){
  addStyle('a:hover .wciuasCSS { width:auto; height:auto; position:absolute; z-index:150; }');
 }
}
function processPage(){
 if (readSetting('tv_disable_chat')){
  unsafeWindow.document.body.removeChild(unsafeWindow.document.getElementById('chatbar'));
 }
 if ( /viois\.ru\/ask/ .test(window.location.href)) {
    processAskPage();
  }
 if ( /viois\.ru\/thread/ .test(window.location.href)) {
    processThreadPage();
  }
 if ( /viois\.ru\/blog/ .test(window.location.href)) {
    processBlogPage();
  }
}
var vfh=document.getElementById('vfh');
vfh=vfh.getElementsByTagName('*')[0];
vfh=vfh.getElementsByTagName('*')[0];
vfh=vfh.getElementsByTagName('*')[0];
var tvbutton=document.createElement('td');
tvbutton.innerHTML='<img id=\'tvbutton\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAT7SURBVHjaZNRJbFsFHsfx73vPz37x0vglTtImKUmaZUjTluCZpAlqKaUoUttDi4TEckAjcUQccuYyp9FohMRhxGXggDghIdCA1CGXClUDRSXqQrok7hZqY8f2c7y9xX47J8IM87v/P/pd/j9hdXWVXxONRpFlGVEUSSaTw/tS+87IoryALww4YQhiqIWhu24Y+mXDMEpBEOC6Lo7j7BkRfhff98n0Z86nYqm3d7XdU1pLi3dEi5QSIAQpYrFBK9OvXpFl+YNqtXrp9/d7YBiGAMnxg+P/KBVKf15rrGGMGnSO2mijRf4ijTPTHCTf2IjfftB3VhAPnx0ZHfu4kN9+JwxDQxAEAKTl5WXCMEQQhNT4wbGvbt658fKX41+xeXGTqcgUL9w7RUPRaTxWiV8d4uRxk1NZnZZZZKsQzA8PTSy3240vwhBHEASkbDaL4zhMjD/14Wbu3sVvF6/wbPoo87f/SEtskdnOMGNPk+70ojXaiG6czjWdo+ou/fJPXH4cmZgYnRypViv/CoIAaW5uDlXdd7bblf7+6ecz+NpFBu6OMSJpzARzpNQUuCGyIJHM9KLpHo/yj5nJ3efIRA9PbjcpKEPPxGPyD61W62FEEIT9fX3x1Uv/Dgi6zzJj3qFvuog6MIjeNmn5LWqaBoFDTBbpmiUudO6zXpDY+qzF68U277V/IHbmxVVxd/emGI/3rNh253mtup9Dkz8zO/8dsdg2QSjSaDYolkqYlkWpXObWnXu8GtygN+/xN3+Gh5pAIhHwh1KRlmE835NIrEQURTreajmxVmuYen2E/v4plpZ0tre3MQwDXdcp7ewgdjq8e6jCbL7NG9YRnn7uMA+2PEJbI9vU+VHTYmI6fTwCQcayFCxL5qWXPiIWa6BpQ7iuS7Vaxfd9zl94mbmIwZlr/+SVXJoHvTq5tTWmRY9yTw3f7aVtWKTT6Yzouh6RSJcwlLh79zkcZxDHMcnn8xQKBbLZLGPD+zH3z/DXzCt8HwQMJRP8aXGRTLSH8eQwYkTB9lw81yWi691aMpnk8OHPMM0xgsAjCEI0TcNxHJ48yXPs2DMIgsCGVgXPp1bbxQ9DLN3kVUNixzKYUmK4plmL7OxUrs3O9r2VSt2KqWqOSsXhxo0KEOK5IVev/odypYBrw4OHOSBgt1anWq0AUACQJI6rqv3T9vY1SVGUiqqqWYhMlst1arVdbNum2/FYeavB9IKJLZU4tLhDUnU4/ZpPx/LRCr/979EjRxgYGPhmc3PzPdGyrPLGxsb7o6OjNJtNms0m3a5Np9Ph6UWHQ8cCDozBiQsw+BTMLYeMTP7XGEQiLC4usrGx8b5pmmXR933K5fLXuVzuk/n5eQzDwDQMut0Oph5gtiGRhmoRHBuiCrj2b+C5c+coFouflEqlr33fRzhw4AAAruumFhYWvoxGo6fX1tawbZuD0xGmZjMggNORsMwuTtDg/q0AMYixsrKC53nfrK+vX5BlWQeQUqkUAKIoOo8ePfq8p6dneGlpaT4ajVL52WVq5AQJaZKRgWPgqGzdbDE5McXJkycoFosfX79+/U1FUfbma68hgOM4mKZJIpE4Pzs7+3ZfX98pz/PirusCIMsysixbtVrtytbW1gemaV5KJBJEo9E94/9A13WxLIswDIf7+/vPqKq6oCjKQBiG2Lat1ev19Xq9flkQhFI8HkeW5f8BfxkA+0CAVvtMYt8AAAAASUVORK5CYII=\'>';
vfh.appendChild(tvbutton);
tvbutton=unsafeWindow.document.getElementById('tvbutton');
tvbutton.onclick=function () {show_settings();};
processPage();
}
)();