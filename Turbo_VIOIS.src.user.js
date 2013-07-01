// ==UserScript==
// @name           Turbo VIOIS
// @author          bodqhrohro
// @description  Мелкие улучшения в пользовательском интерфейсе сайта viois.ru
// @version        0.7.0 alpha
// @include        http://*viois.ru/*
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
}
)();
var fld1;
function show_settings(){
var nmp2=unsafeWindow.document.createElement('div');
nmp2.style.display='block';
nmp2.setAttribute('id','nmp2');
var nmp3=unsafeWindow.document.createElement('div');
nmp3.setAttribute('class','wcvdgCSS-bg');
nmp3.style.opacity=0.7;
nmp3.style.animation='appear1 1s';
nmp3.style.width='100%';
nmp3.style.height='150%';
var nmp4=unsafeWindow.document.createElement('div');
nmp4.setAttribute('class','wcvdgCSS');
nmp4.setAttribute('tabindex','0');
nmp4.style.left='396px';
nmp4.style.top='20%';
nmp4.style.animation='appear2 1s';
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
var labelFieldReplace = addCheckbox(settingsBody, 'Редактор BB-кодов');
labelFieldReplace.addEventListener('click', function () { toggleSetting('tv_bb_editor'); }, true);
displaySetting(labelFieldReplace, 'tv_bb_editor', false);
var labelFieldReplace = addCheckbox(settingsBody, 'Не отображать стили VIP-статуса');
labelFieldReplace.addEventListener('click', function () { toggleSetting('tv_hide_vip_style'); }, true);
displaySetting(labelFieldReplace, 'tv_hide_vip_style', false);
var labelFieldReplace = addCheckbox(settingsBody, 'Аватарки слева');
labelFieldReplace.addEventListener('click', function () { toggleSetting('tv_avatars_to_left'); }, true);
displaySetting(labelFieldReplace, 'tv_avatars_to_left', false);
var labelFieldReplace = addCheckbox(settingsBody, 'Восстанавливать HTML в профилях (не рекомендуется)');
labelFieldReplace.addEventListener('click', function () { toggleSetting('tv_repair_profile_html'); }, true);
displaySetting(labelFieldReplace, 'tv_repair_profile_html', false);
var labelFieldReplace = addCheckbox(settingsBody, 'Цитировать выделенный на странице текст');
labelFieldReplace.addEventListener('click', function () { toggleSetting('tv_quote_body'); }, true);
displaySetting(labelFieldReplace, 'tv_quote_body', false);
var labelFieldReplace = addCheckbox(settingsBody, 'Отображать контакты на панели');
labelFieldReplace.addEventListener('click', function () { toggleSetting('tv_contact_list'); }, true);
displaySetting(labelFieldReplace, 'tv_contact_list', false);
var labelFieldReplace = addButton(settingsBody, 'Восстановить все скрытые блоки');
labelFieldReplace.addEventListener('click', function () {var tmp1={}; localStorage.setItem('tv_hide_panels',JSON.stringify(tmp1)); }, true);
nmp7.appendChild(nmp8);
nmp5.appendChild(nmp6);
nmp5.appendChild(nmp7);
nmp4.appendChild(nmp5);
nmp4.appendChild(settingsBody);
nmp2.appendChild(nmp3);
nmp2.appendChild(nmp4);
unsafeWindow.document.body.appendChild(nmp2);
}
function addCheckbox(settingsBody, text) {
  if (!settingsBody) return null;
  var option = unsafeWindow.document.createElement('input');
  option.setAttribute('type', 'checkbox');
  settingsBody.appendChild(option);
  settingsBody.appendChild(unsafeWindow.document.createTextNode(text));
  settingsBody.appendChild(unsafeWindow.document.createElement('br'));
  return option;
}
function addButton(settingsBody, text) {
  if (!settingsBody) return null;
  var button = unsafeWindow.document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value',text);
  settingsBody.appendChild(button);
  return button;
}
function toggleSetting(name) {
  var result = readSetting(name);
  result = !result;
  localStorage.setItem(name, result ? 'true' : 'false');
  return result;
}
function readSetting(name) {
  return localStorage.getItem(name) == 'true';
}
function displaySetting(option, name, defaultChecked) {
  var result = readSetting(name);
  result = (result && !defaultChecked) || (!result && defaultChecked);
  if (option) option.checked = result;
  return result;
}
function addStyle(s) {
  var head = unsafeWindow.document.getElementsByTagName('head')[0];
  if (!head) {
    return;
  }
  var style = unsafeWindow.document.createElement('style');
  style.type = 'text/css';
  var stylecontent = unsafeWindow.document.createTextNode(s);
  style.appendChild(stylecontent);
  head.appendChild(style);
}
function insertAtCursor(field, str) {
  if (!field || !str) return;
  var startPos = 0;
  if (field.selectionStart || field.selectionStart == '0') {
    startPos = field.selectionStart;
    var endPos = field.selectionEnd;
    field.value = field.value.substring(0, startPos) + str + field.value.substring(endPos, field.value.length);
  } else field.value += str;
  var newPos = startPos + str.length;
  field.setSelectionRange(newPos, endPos);
  field.focus();
}
function insertAtCursor2(field, str1, str2) {
  if (!field || !str1 || !str2) return;
  var startPos = 0,s1='';
  var bSel=unsafeWindow.getSelection();
  if (bSel) {bSel=bSel.toString();}
  if (field.selectionStart || field.selectionStart == '0') {
   startPos = field.selectionStart;
   var endPos = field.selectionEnd;
  } else {
   startPos=endPos=field.value.length;
  }
  if ((startPos==endPos)&&bSel&&(str1=='[quote]')&&(readSetting('tv_quote_body'))) {
   s1=bSel;
  } else {
   s1=field.value.substring(startPos, endPos);
  }
  field.value = field.value.substring(0, startPos) + str1 + s1 + str2 + field.value.substring(endPos, field.value.length);
  startPos+=str1.length;
  endPos+=str1.length;
  field.setSelectionRange(startPos, endPos);
  field.focus();
}
function strokeSelection(field) {
 if (!field) return;
 var startPos=0;
 if (field.selectionStart || field.selectionStart == '0') {
  startPos=field.selectionStart;
  var endPos=field.selectionEnd;
  var s1=field.value.substring(startPos,endPos), s2='';
  for (var i=0;i<s1.length;i++) {
   s2+='̶'+s1.charAt(i);
  }
  s2+='̵';
  field.value=field.value.substring(0,startPos)+s2+field.value.substring(endPos,field.value.length);
  endPos=startPos+s2.length;
  field.setSelectionRange(startPos,endPos);
  field.focus();
 }
}
function parseSmileys(fld,smileys){
 var s=fld.value;
 for (smile in smileys){
  s=s.replace(smileys[smile],'[img]http://www.freesmileys.org/smileys/smiley-basic/'+smile+'.gif[/img]');
 }
 fld.value=s;
 fld.focus();
}
function previewBB(bb){
 var display=unsafeWindow.document.getElementById('dspfld');
 display.style.display='block';
 var s1=bb;
 s1=s1.replace(/\n/,'<br>');
 s1=s1.replace(/\[b\]/,'<b>');
 s1=s1.replace(/\[[/]b\]/,'</b>');
 s1=s1.replace(/\[i\]/,'<i>');
 s1=s1.replace(/\[[/]i\]/,'</i>');
 s1=s1.replace(/\[u\]/,'<u>');
 s1=s1.replace(/\[[/]u\]/,'</u>');
 s1=s1.replace(/\[url=(.*?)\]/,'<a href=\"$1\">');
 s1=s1.replace(/\[[/]url\]/,'</a>');
 s1=s1.replace(/\[quote\]/,'<div style=\"width:98%;background:#F6F9F9;padding:5px;margin-top:5px;margin-bottom:5px;\"><b>Цитата:</b><br>');
 s1=s1.replace(/\[[/]quote\]/,'</div>');
 s1=s1.replace(/\[youtube\].+?vi?=(.{11}).*?\[[/]youtube\]/,'<iframe src=\"http://www.youtube.com/embed/$1\" allowfullscreen=\"\" frameborder=\"0\" height=\"315\" width=\"420\"></iframe>');
 s1=s1.replace(/\[img\](.*?)\[[/]img\]/,'<img src=\"$1\" alt=\"\" style=\"max-width:300px; !important;display:block;\">');
 display.innerHTML=s1;
 fld.focus();
}
function drawBBeditor(pnl,m1){
 var smileys={
  'angel':/[0o]:-?\)/gi,
  'biggrin':/:-?}/g,
  'blink':/(8-?[\|\)])|(o_o)|(о_о)/gi,
  'cool':/B-?\)/g,
  'dry':/\|-?[\\/]/g,
  'laugh':/:-?D/g,
  'mad':/:-?\|\|/g,
  'ohmy':/(omg)|(:-?o)/gi,
  'sad':/:-?\(+/g,
  'smile':/:-?\)+/g,
  'tongue':/:-?P/gi,
  'unsure':/:-[\\/]/g,
  'wink':/;-?\)/g,
  'cry':/:'-?\(/g,
  'lol':/lo+l!*/gi,
  'rant':/:-?@/g,
  'tears':/;-?\(/g,
  'shy':/:-?s/gi,
  'what':/wtf\?*/gi
 };
 addStyle('a:hover .bbtn { background-color:#ebeff9;}');
 addStyle('img.bbtn { display:inline; margin: 0 2px; }');
 var bbpanel=pnl;
 if (m1==1) {
  bbpanel=bbpanel.getElementsByTagName('tbody')[0];
  bbpanel=bbpanel.getElementsByTagName('tr')[0];
  bbpanel=bbpanel.getElementsByTagName('td')[0];
 } else {
  bbpanel=bbpanel.parentNode;
 }
 fld1=bbpanel.getElementsByTagName('textarea')[0];
 if (m1<2) {
  bbpanel=bbpanel.getElementsByTagName('div')[0];
  bbpanel.onmousedown='';
  bbpanel.innerHTML='';
 } else {
  tmpnl=unsafeWindow.document.createElement('div');
  bbpanel.appendChild(tmpnl);
  bbpanel=tmpnl;
 }
 var bbtn=unsafeWindow.document.createElement('a');
 bbtn.setAttribute('class','bbtn');
 bbtn.innerHTML='<img id=\'bbtn\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAX0lEQVQ4y2P8//8/AzUBEwOVwaiBg9BAhv///2PFDAwMZxgYGP7jwGcYGBjSsOknxsByNDe4IBmshK6PEi/fY2BgeE8tL8NdTg0vCyLJdVDDy++xepVWXmYcLW1GgIEAm1vA6E+CY9UAAAAASUVORK5CYII=\' title=\'Жирный\' class=\'bbtn\'>';
 var ibtn=unsafeWindow.document.createElement('a');
 ibtn.setAttribute('class','bbtn');
 ibtn.innerHTML='<img id=\'ibtn\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAj0lEQVQ4y+3UsQkCYQzF8d8nVm4g6AIu4CQOYO8SbuAo198CgpWVCwiWFoKVGJvPTswVVwjeg3Qv/+QRSIkIfWqkZw3AHwSOu5hKKec6fIIn7hEx+2iOiLTq4A0C2299GeitOY64YtEHcF2j7rJkXYBT7HHBMgN2ufKqghqcUneyYYsbHjigzQ5Yhm/zB8AXmE7ocsOKwO0AAAAASUVORK5CYII=\' title=\'Курсив\' class=\'bbtn\'>';
 var ubtn=unsafeWindow.document.createElement('a');
 ubtn.setAttribute('class','bbtn');
 ubtn.innerHTML='<img id=\'ubtn\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAdklEQVQ4y2P8//8/AzUBEwOVwaiBVAD////HwAwMDMYMDAz/odgYTUsokpwgut6hG4bvB8LA91jV4YgUBgYGhjPQgN+NpmUVVPwMNv34DBRkYGDoQIpRGH4HFRfEZiDjoC8cWHBJMDIy/iciUzDS3IWMI6+ABQDdNHFjxNx/6wAAAABJRU5ErkJggg==\' title=\'Подчёркивание\' class=\'bbtn\'>';
 var sbtn=unsafeWindow.document.createElement('a');
 sbtn.setAttribute('class','bbtn');
 sbtn.innerHTML='<img id=\'sbtn\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0UlEQVQ4y2P8//8/AzUBEwOVwQg0kAWf5IRp01lu3rxl+PTZUz2G/wyM4hJiV6Slpc82VFb+xqWHEVcst/dPYD96+PC6x4+feLGwsDD8/fuX4e/fvwySkpJHbGxt3OrKy76T5OWrly8H3blz14ufn/9WdEy0SHBosKKgoMDdZ8+e2dy9e9eDZC+zs7MzcHNzMzAyMQg9eHDfRUZG9mRgUJDf548fn/Dy8n4j2sspWTkFP3/+kPv86bPxqzev7Rj+/2f4+fMXAxsbG4OoiMg2QUHBXSysLCw/vv9Q5OTivDtn2tR+vC58//6d3pevX9U52DkeS4pLzPvz9y/r////OD99+qz44uULr5evXnkxMzMz8PDwnObj5WUn6OWAAP/knz9/Mt+//8D57du3uirKyvtL8vPOLluzmmXXrj3zLl26HCspKXHax8fHjpOD4ydBA2PDw/8zMDD8iU1OtTl06FCNqorqJQ4OTjdePt7PX7985Xz37h2Dto72oZS42B8kRYq3j1f3m7dvHB7cf2AzZ+7cF0xMTAw/fvxk0NLSOuLu7t5McjpkYGBgWL91K+vVK1d1nzx5Kv3z5092eXn5B4ZGBhf9PT1/k2XgaGkzMAYCAFTbwilUR+IfAAAAAElFTkSuQmCC\' title=\'Зачёркивание\' class=\'bbtn\'>';
 var lbtn=unsafeWindow.document.createElement('a');
 lbtn.setAttribute('class','bbtn');
 lbtn.innerHTML='<img id=\'lbtn\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAgUlEQVQ4y+2U2wmAMAxFT8RF3KBuoBu4WVdyAx3BDTpC/KkQgviAfPZCaSiXQ5ILFVUlUh3BasAAmZQzoO4UYDH2pb55X/bAO5iFXioPvgwgqoqIXG2OwF7r6WW4td4J2GotHih2Gy/AO+/QO1MyHc4fY0imPsJ3GJ6ytM+hAf/rBAhGVoaeusxUAAAAAElFTkSuQmCC\' title=\'Вставить ссылку...\' class=\'bbtn\'>';
 var qbtn=unsafeWindow.document.createElement('a');
 qbtn.setAttribute('class','bbtn');
 qbtn.innerHTML='<img id=\'qbtn\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAdUlEQVQ4y+2U0QmAMAxE37lBV3AFXcERXMEVOouzuIIr6AqOEH+KlFoKQn+EHhyBg3sQApGZUVMdldWAfwJKWiVZ8CIpzfw/V8bMsg4aAAPmqPJk2V4B2AM7cEQwB2whc7leaWUPnMCYZBcwhfk+ZnsODfhdN0SuWLeWjG7PAAAAAElFTkSuQmCC\' title=\'Цитата\' class=\'bbtn\'>';
 var imgbtn=unsafeWindow.document.createElement('a');
 imgbtn.setAttribute('class','bbtn');
 imgbtn.innerHTML='<img id=\'imgbtn\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAo0lEQVQ4y+2UsQ2DMBRE7xDTsAAzIFZKmT1AYgZkKUyQBbxDpjgaI5nIlm3iIgXXfLn4707/26Yk1FSDyvp/YOsfSD4AdIUMK+kZS5iCWQCTq8GetjDNW9JGMmpeCuwdrM+aYYa61FhSWzY1r80saQlAzSWgpJerPtRETJIznL/gC8mPb+KWM+QkXI/GUGLfBMCak3AkOdZ6y/YC49TD+z/8WTtJU0JMFaR51AAAAABJRU5ErkJggg==\' title=\'Вставить изображение...\' class=\'bbtn\'>';
 var ytbtn=unsafeWindow.document.createElement('a');
 ytbtn.setAttribute('class','bbtn');
 ytbtn.innerHTML='<img id=\'ytbtn\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEPklEQVQ4y6WU3WsUVxjGnzNnPjaT3ZlszGbJWq2EdtMkbl0qloWCe5PYxkDAO0FKoJRKbmrvQq/qH1By68e19ANEMBKiMR/qijBlURBaU2uRxLhNStidr3VmZ+bM6UW6JbW5EPrAe3He9+XHgfM8B5xztOvBgwdfVqvVLzjnuHfv3terq6sTu+dvUv86zMzMzA8MDPB6vf6Vqqr80aNHn/0vIOe879SpU7xUKvGzZ8/+HIbh+OnTp59OTU09DYJg6NKlS9/duXNn5vLly7dv3rz5zV5Aev78eeyS6zjO0IULF4avXr367cWLF89sbm7mt7a20s1ms2gYRgFA1/z8/HHOuV0ul3/AaxJebxQKheVsNotDhw4tP3v2TJucnPzx5MmTsxsbG3379+93MpnM2oEDB/5Ip9MN7KH/AFutFuWcA4DjOI7y/Pnzd2q12tuU0sjzPGaaZrZWq3VFUYQ3Avb29v6ez+frnPNfp6enp69du/bhkydP3j137tznAwMDlYWFhffDMHQLhcJPewHJ37eBaZqf2radC8Ow37btD1RVrSYSCadarZ5RVdXL5/NX6vV62TTNvmw2u62q6m+yLP/S1dW1oWna97uB0sOHDxdnZ2ePt5uiKEJRFHDO0dnZCc/z4LouNE2DLMuI4xhxHCMMQwDA6Ojo7WKxOAaAia7rfry0tHR8ZGQEyWQSAEAp5Xfv3iWEEERRhFwuh/7+fjx+/BhBEECWZXDOoSgKbNtGpVIZHRwcLCuKsixYlvUeYwwdHR28WCyiWCwiiiLYto0wDNFoNNDT04NSqQTXdWGaJgghcBwHlmWBUgrOOSzLGgQAMQiCbkopbty4QTKZDKIowvXr18mJEydQq9UwPDyMMAzhui4mJiawvr4OwzBQLpeRy+Vw//59rK2twff9DAAIQRDocRxDlmWIogjOOfr6+nDs2DH09vaiVCpBkiR4nodUKoWjR4/i8OHDGBoaQhzHGBsbQxRF8H0/BQACY0zlnIMQsvNKhCCOY1iWhVarBdM0IUkSms0mKpUKGo0GstksgiCA7/vYt28fZFlGGIYUAARK6as27HUxxtC2FaUUHR0dAADf95FOp+H7Pm7dugVCCCRJYgAgyLJsEUJ2gk0pBEGAIOz4XZIkJBIJxHEMURRBCAGlFOl0Gi9fvoRhGDh48CAopRBF0QUAIZFI1CmliOO4PYDjONB1HaVSCYIgoNVqIZVKoVwuQ1EUGIYBTdMwNTUFTdPgeR5UVf0TAERd11cppaCUYnFxEZxziKKIubk5CILwj33m5uag6zosy8L29jYWFhaQyWRgGAaSySS6u7tX20mRq9Xq8srKykfNZhOEECSTSTiOg93J2f0ZaJoG13XRdsf4+PjikSNHPgHAdmd50rbttxhjKmNMYYx1MsYk3l7YcQChlLYopa9EUWwJgtDUdf2FrutX2jt/AS41dUaC5TOOAAAAAElFTkSuQmCC\' title=\'Вставить видео с YouTube...\' class=\'bbtn\'>';
 var smbtn=unsafeWindow.document.createElement('a');
 smbtn.setAttribute('class','bbtn');
 smbtn.innerHTML='<img id=\'smbtn\' src=\'data:image/png;base64,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\' title=\'Вставить смайлик...\' class=\'bbtn\'>';
 var smfld=unsafeWindow.document.createElement('span');
 smfld.style.position='absolute';
 smfld.style.top='140px';
 smfld.style.left='170px';
 smfld.style.backgroundColor='#ebeff9';
 smfld.style.display='none';
 smfld.id='smfld';
 smfld.style.zIndex=1;
 var cursmrow, i=0, cursmile;
 for (smile in smileys){
  if (i%5==0){
   if (cursmrow) {smfld.appendChild(cursmrow);}
   cursmrow=unsafeWindow.document.createElement('div');
  }
  cursmile=document.createElement('img');
  cursmile.setAttribute('src','http://www.freesmileys.org/smileys/smiley-basic/'+smile+'.gif');
  cursmile.setAttribute('alt',smile);
  cursmile.setAttribute('title',smile);
  cursmrow.appendChild(cursmile);
  cursmile.onclick=function() {insertAtCursor(fld1,'[img]'+this.src+'[/img]');};
  i++;
 }
 smfld.appendChild(cursmrow);
 var ppbtn=unsafeWindow.document.createElement('a');
 ppbtn.setAttribute('class','bbtn');
 ppbtn.innerHTML='<img id=\'ppbtn\' src=\'data:image/png;base64,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\' title=\'Автозамена\' class=\'bbtn\'>';
 var pvbtn=unsafeWindow.document.createElement('a');
 pvbtn.setAttribute('class','bbtn');
 pvbtn.innerHTML='<img id=\'pvbtn\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAACPElEQVR42uyUzYvNcRTGn+d8v9/fvXPvnTvXOyN5KSspkkY2srGyoCyUrJR/QUoWxH9ga2FDrFgQhZSXkrBVSImGmRovM9fc3+93vo/FGDVsLRRnc3af8zznnB5Kwp8swx+ufxAYAWB5K6AIhpyFDAAkXBz+Vvn+WtqVM7aQqCPxrDDeaSS7ZsZZAIAEEhi4MDlTg5IWAAWg7zg6U+WTgZjMwqgLXQI5Eh8AzDjUHS7CsVayi/oFGOelcq71pgb5SpU11i3sSOk66MBEM+ABgUHl2B0D36RgDz/N+oWB60CvwcME+wt2SBAurZ2Y9acClq5ox9UCe2XWynbkGQmj07WOF4E3S8+bzfh+RSeur1zbJvv+KAvLOU+UhF7DdkbDRBF4e7Qdi9XdhGa0W53EU0ORl42YAqBAvG0nnmgnO7+mm7CqE0eKwOfJ+LrXtB2S5hSKHHKhS2LaydJlyEIgkCUUiXg6P59AKSAAhAszAPouDWeh8dNyMN5e1AxjlWv3l4FfDyY0I2+UGWPNyMsp8EkgPrajnSxdexqBVzMUPw/yfc9aN9KwHQG49xMoAcn4fNlQ2FrVeePH6epFI/AugcHAtc+I8U6y46W0NxhfBuP4+HT9NmcVS1pxm5Gv5hOBkrC4lZAIRAKCWl8rnf1W61AiHtfCJpdWzr0NXxn5rsra3irsXKew08qqSheyhKlZXwgMP04VAlE51vcrP1i5truwAUAdiJfJ8HioCJdi4Puc5+z9BvyfNn8X8PsAvCEn8GkdL0gAAAAASUVORK5CYII=\' title=\'Предпросмотр\' class=\'bbtn\'>';
 dspfld=unsafeWindow.document.createElement('div');
 dspfld.setAttribute('id','dspfld');
 dspfld.setAttribute('class','wpcpfCSS');
 dspfld.style.color='#000000';
 dspfld.style.fontSize='13px';
 dspfld.style.border='solid 1px Black';
 dspfld.style.display='none';
 bbpanel.appendChild(bbtn);
 bbpanel.appendChild(ibtn);
 bbpanel.appendChild(ubtn);
 bbpanel.appendChild(sbtn);
 bbpanel.appendChild(lbtn);
 bbpanel.appendChild(qbtn);
 bbpanel.appendChild(imgbtn);
 bbpanel.appendChild(ytbtn);
 bbpanel.appendChild(smbtn);
 bbpanel.appendChild(smfld);
 bbpanel.appendChild(ppbtn);
 bbpanel.appendChild(pvbtn);
 bbpanel.appendChild(dspfld);
 bbtn=unsafeWindow.document.getElementById('bbtn');
 bbtn.onclick=function() {insertAtCursor2(fld1,'[b]','[/b]');};
 ibtn=unsafeWindow.document.getElementById('ibtn');
 ibtn.onclick=function() {insertAtCursor2(fld1,'[i]','[/i]');};
 ubtn=unsafeWindow.document.getElementById('ubtn');
 ubtn.onclick=function() {insertAtCursor2(fld1,'[u]','[/u]');};
 sbtn=unsafeWindow.document.getElementById('sbtn');
 sbtn.onclick=function() {strokeSelection(fld1);};
 lbtn=unsafeWindow.document.getElementById('lbtn');
 lbtn.onclick=function() {if (lurl=prompt("Введите URL:","")) {if (!/:\/\//.test(lurl)) {lurl='http://'+lurl;}; insertAtCursor2(fld1,'[url='+lurl+']','[/url]');}};
 qbtn=unsafeWindow.document.getElementById('qbtn');
 qbtn.onclick=function() {insertAtCursor2(fld1,'[quote]','[/quote]');};
 imgbtn=unsafeWindow.document.getElementById('imgbtn');
 imgbtn.onclick=function() {if (iurl=prompt("Вставьте URL изображения:","")) {insertAtCursor(fld1,'[img]'+iurl+'[/img]');}};
 ytbtn=unsafeWindow.document.getElementById('ytbtn');
 ytbtn.onclick=function() {if (yturl=prompt("Вставьте URL видео:","")) {insertAtCursor(fld1,'[youtube]'+yturl+'[/youtube]');}};
 smbtn=unsafeWindow.document.getElementById('smbtn');
 smbtn.onclick=function() {var tmp1=document.getElementById('smfld');tmp1.style.display=tmp1.style.display=='none'?'inline-block':'none';};
 smfld=unsafeWindow.document.getElementById('smfld');
 ppbtn=unsafeWindow.document.getElementById('ppbtn');
 ppbtn.onclick=function() {parseSmileys(fld1,smileys);};
 pvbtn=unsafeWindow.document.getElementById('pvbtn');
 pvbtn.onclick=function() {previewBB(fld1.value);};
 fld1.onmouseover=null;
}
function setPanelState(pnlname,state){
 var pnlstng=JSON.parse(localStorage.getItem('tv_hide_panels'));
 if (pnlstng==null) pnlstng={};
 pnlstng[pnlname]=state;
 localStorage.setItem('tv_hide_panels',JSON.stringify(pnlstng));
}
function getPanelState(pnlname){
 try {
  return JSON.parse(localStorage.getItem('tv_hide_panels'))[pnlname];
 } catch(e) {
  return null;
 }
}
function processVIP1(){
 if (readSetting('tv_hide_vip_style')){
  try {
   var nicks1=unsafeWindow.document.getElementsByClassName('wpcpaCSS');
   for (i=0;i<nicks1.length;i++) {
    nicks1[i].getElementsByTagName('a')[0].setAttribute('style','font-size: 12px; vertical-align: top !important;');
   }
  } catch(e) {
   console.log(e);
  }
 }
}
function avatarsToLeft(){
 processAvatars(unsafeWindow.document.getElementsByClassName('wpcppCSS'));
 processAvatars([unsafeWindow.document.body]);
 addStyle('.wpcpvbCSS{width:44px;height:50px;background:transparent;margin-bottom:4px;transition: background ease 0.5s;}.wpcpvbCSS:hover{background:#ebeff9};');
}
function drawContacts(vfh){
 addStyle('#cli{height:auto !important;width:300px !important;} #contacts:hover .vfh_notifications{display:block;}');
 vfh=vfh.getElementsByTagName('td')[1];
 var cond=document.createElement('div');
 cond.setAttribute('class','vfh_item');
 cond.id='contacts';
 var cin=document.createElement('a');
 cin.style.cursor='pointer';
 cin.id='online_num';
 cin.innerHTML='Загрузка...';
 var cli=document.createElement('div');
 cli.setAttribute('class','vfh_notifications');
 cli.id='cli';
 cond.appendChild(cin);
 cond.appendChild(cli);
 vfh.insertBefore(cond,vfh.getElementsByTagName('span')[0]);
 unsafeWindow.loadContacts();
 unsafeWindow.setInterval(function(){
  unsafeWindow.loadContacts();
  var cli=document.getElementById('cli');
  var s1=cli.getElementsByTagName('span'),s2=[],s3=[];
  for (var i=0;i<s1.length;i++){
   s2.push(s1[i].innerHTML);
  }
  for (i=0;i<s2.length;i++){
   if (s2[i]=='В сети&nbsp;&nbsp;'){
    s3.push(s2[i]);
   }
  }
  document.getElementById('online_num').innerHTML=s3.length+'/'+s2.length+' в сети';
 }, 2000);
}
function processAvatars(nodes){
 var avatar,avstr;
 for (i=0;i<nodes.length;i++) {
  avatar=nodes[i].getElementsByClassName('wciuasCSS')[0];
  if (avatar) {
   avstr=avatar.src;
   avatar.parentNode.parentNode.removeChild(avatar.parentNode);
   nodes[i].getElementsByClassName('wrpthbCSS')[0].style.backgroundImage='url('+avstr+')';
  }
  nodes[i].getElementsByClassName('wrpthbCSS')[0].style.backgroundSize='cover';
 }
}
function processAskPage(){
 if (readSetting('tv_bb_editor')){
  drawBBeditor(unsafeWindow.document.getElementById('wavdi'),0);
 }
}
function processThreadPage(){
 if (readSetting('tv_thread_avatar')){
  addStyle('a:hover .wciuasCSS { width:auto; height:auto; position:absolute; z-index:150; }');
 }
 if (readSetting('tv_bb_editor')){
  try {unsafeWindow.document.getElementById('wpiprdi').onmouseover=function () {drawBBeditor(this,0);}} catch(e) {};
  try {unsafeWindow.document.getElementById('wpiprdi').onmouseover=function () {drawBBeditor(this,0);}} catch(e) {};
 }
 if (readSetting('tv_avatars_to_left')){
  avatarsToLeft();
 }
 processVIP1();
}
function processBlogPage(){
 processVIP1();
 if (readSetting('tv_thread_avatar')){
  addStyle('a:hover .wciuasCSS { width:auto; height:auto; position:absolute; z-index:150; } a .wciuasCSS { transition: width 1s !important; }');
 }
 if (readSetting('tv_avatars_to_left')){
  avatarsToLeft();
 }
 if (readSetting('tv_bb_editor')){
  unsafeWindow.document.getElementById('wpiprdi').onmouseover=function () {drawBBeditor(this,0);}
  var cmnts=unsafeWindow.document.getElementsByName('pfid');
  for (i=0;i<=cmnts.length;i++){
   unsafeWindow.document.getElementById('cbcfid_'+cmnts[i].value).onmouseover=function () {drawBBeditor(this,0);}
  }
 }
 if (readSetting('tv_avatars_to_left')){
  avatarsToLeft();
 }
}
function processNewBlogPage(){
 if (readSetting('tv_bb_editor')){
  unsafeWindow.document.getElementById('wavdi').onmouseover=function () {drawBBeditor(this,0);}
 }
}
function processSupportPage(){
 if (readSetting('tv_bb_editor')){
  drawBBeditor(unsafeWindow.document.getElementById('wavdi'),2);
 }
}
function processTicketPage(){
 if (readSetting('tv_bb_editor')){
  drawBBeditor(unsafeWindow.document.getElementById('wpiprdi'),2);
 }
}
function processUserPage(){
 if (readSetting('tv_bb_editor')){
  try {drawBBeditor(unsafeWindow.document.getElementById('wcvdi'),0);} catch(e) {console.log(e);};
  try {drawBBeditor(unsafeWindow.document.getElementById('wpiprdi'),0);} catch(e) {console.log(e);};
 }
 if (readSetting('tv_hide_vip_style')){
  try {
   var nicks1=unsafeWindow.document.getElementsByClassName('wvantCSS')[1];
   nicks1.getElementsByTagName('span')[1].setAttribute('style','');
   nicks1=unsafeWindow.document.getElementsByClassName('wuvunmCSS')[0];
   nicks1.getElementsByTagName('span')[0].setAttribute('style','');
   var nicks2=nicks1.getElementsByTagName('font')[0];
   if (nicks2) {nicks2.parentNode.removeChild(nicks2);}
   nicks1=unsafeWindow.document.getElementsByClassName('wpmopCSS')[0];
   nicks1.getElementsByTagName('a')[0].setAttribute('style','');
  } catch(e) {
   console.log(e);
  }
 }
 processVIP1();
 if (readSetting('tv_repair_profile_html')){
  var profinfo=unsafeWindow.document.getElementsByClassName('wuitCSS')[1];
  profinfo=profinfo.getElementsByTagName('td')[1];
  profinfo.innerHTML=profinfo.textContent;
 }
}
function processUpdatePage(){
 if (readSetting('tv_bb_editor')){
  drawBBeditor(unsafeWindow.document.getElementById('wavdi'),0);
 }
}
function processPage(){
 var vfh=unsafeWindow.document.getElementById('vfh');
 vfh=vfh.getElementsByTagName('*')[0];
 vfh=vfh.getElementsByTagName('*')[0];
 vfh=vfh.getElementsByTagName('*')[0];
 var tvbutton=unsafeWindow.document.createElement('td');
 tvbutton.innerHTML='<img class=\'vfh_item\' src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAT7SURBVHjaZNRJbFsFHsfx73vPz37x0vglTtImKUmaZUjTluCZpAlqKaUoUttDi4TEckAjcUQccuYyp9FohMRhxGXggDghIdCA1CGXClUDRSXqQrok7hZqY8f2c7y9xX47J8IM87v/P/pd/j9hdXWVXxONRpFlGVEUSSaTw/tS+87IoryALww4YQhiqIWhu24Y+mXDMEpBEOC6Lo7j7BkRfhff98n0Z86nYqm3d7XdU1pLi3dEi5QSIAQpYrFBK9OvXpFl+YNqtXrp9/d7YBiGAMnxg+P/KBVKf15rrGGMGnSO2mijRf4ijTPTHCTf2IjfftB3VhAPnx0ZHfu4kN9+JwxDQxAEAKTl5WXCMEQQhNT4wbGvbt658fKX41+xeXGTqcgUL9w7RUPRaTxWiV8d4uRxk1NZnZZZZKsQzA8PTSy3240vwhBHEASkbDaL4zhMjD/14Wbu3sVvF6/wbPoo87f/SEtskdnOMGNPk+70ojXaiG6czjWdo+ou/fJPXH4cmZgYnRypViv/CoIAaW5uDlXdd7bblf7+6ecz+NpFBu6OMSJpzARzpNQUuCGyIJHM9KLpHo/yj5nJ3efIRA9PbjcpKEPPxGPyD61W62FEEIT9fX3x1Uv/Dgi6zzJj3qFvuog6MIjeNmn5LWqaBoFDTBbpmiUudO6zXpDY+qzF68U277V/IHbmxVVxd/emGI/3rNh253mtup9Dkz8zO/8dsdg2QSjSaDYolkqYlkWpXObWnXu8GtygN+/xN3+Gh5pAIhHwh1KRlmE835NIrEQURTreajmxVmuYen2E/v4plpZ0tre3MQwDXdcp7ewgdjq8e6jCbL7NG9YRnn7uMA+2PEJbI9vU+VHTYmI6fTwCQcayFCxL5qWXPiIWa6BpQ7iuS7Vaxfd9zl94mbmIwZlr/+SVXJoHvTq5tTWmRY9yTw3f7aVtWKTT6Yzouh6RSJcwlLh79zkcZxDHMcnn8xQKBbLZLGPD+zH3z/DXzCt8HwQMJRP8aXGRTLSH8eQwYkTB9lw81yWi691aMpnk8OHPMM0xgsAjCEI0TcNxHJ48yXPs2DMIgsCGVgXPp1bbxQ9DLN3kVUNixzKYUmK4plmL7OxUrs3O9r2VSt2KqWqOSsXhxo0KEOK5IVev/odypYBrw4OHOSBgt1anWq0AUACQJI6rqv3T9vY1SVGUiqqqWYhMlst1arVdbNum2/FYeavB9IKJLZU4tLhDUnU4/ZpPx/LRCr/979EjRxgYGPhmc3PzPdGyrPLGxsb7o6OjNJtNms0m3a5Np9Ph6UWHQ8cCDozBiQsw+BTMLYeMTP7XGEQiLC4usrGx8b5pmmXR933K5fLXuVzuk/n5eQzDwDQMut0Oph5gtiGRhmoRHBuiCrj2b+C5c+coFouflEqlr33fRzhw4AAAruumFhYWvoxGo6fX1tawbZuD0xGmZjMggNORsMwuTtDg/q0AMYixsrKC53nfrK+vX5BlWQeQUqkUAKIoOo8ePfq8p6dneGlpaT4ajVL52WVq5AQJaZKRgWPgqGzdbDE5McXJkycoFosfX79+/U1FUfbma68hgOM4mKZJIpE4Pzs7+3ZfX98pz/PirusCIMsysixbtVrtytbW1gemaV5KJBJEo9E94/9A13WxLIswDIf7+/vPqKq6oCjKQBiG2Lat1ev19Xq9flkQhFI8HkeW5f8BfxkA+0CAVvtMYt8AAAAASUVORK5CYII=\' title=\'Настройки Turbo VIOIS\'>';
 vfh.appendChild(tvbutton);
 tvbutton.onclick=function () {show_settings();};
 addStyle('@keyframes appear1{0%{opacity:0;}100%{opacity:0.7;}}');
 addStyle('@keyframes appear2{0%{top:-20%;opacity:0;}100%{top:20%;opacity:1;}}');
 if (readSetting('tv_contact_list')){
  drawContacts(vfh);
 }
 if (readSetting('tv_hide_vip_style')){
  var head=unsafeWindow.document.getElementsByTagName('head')[0];
  head.removeChild(head.getElementsByTagName('style')[0]);
  try {
   var nicks1=unsafeWindow.document.getElementById('csuid1');
   nicks1=nicks1.getElementsByTagName('tr');
   for (i=1;i<nicks1.length;i++) {
    nicks1[i].getElementsByTagName('td')[3].getElementsByTagName('a')[0].setAttribute('style','font-size: 12px;');
   }
  } catch(e) {
   console.log(e);
  }
  try {
   var nicks1=unsafeWindow.document.getElementById('csuid1');
   nicks1=nicks1.getElementsByTagName('tr');
   for (i=1;i<nicks1.length;i++) {
    nicks1[i].getElementsByTagName('td')[1].getElementsByTagName('a')[0].setAttribute('style','font-size: 12px;');
   }
  } catch(e) {
   console.log(e);
  }
 }
 mppnls=unsafeWindow.document.getElementsByClassName('wmcCSS');
 var clbut=unsafeWindow.document.createElement('span');
 var clbutimg=unsafeWindow.document.createElement('img');
 clbutimg.setAttribute('src','/styles/images/archive_event.gif');
 clbutimg.style.display='inline';
 clbutimg.style.width='16px';
 clbutimg.style.height='16px';
 clbutimg.setAttribute('title','Скрыть');
 clbutimg.style.cursor='pointer';
 clbut.appendChild(clbutimg);
 var pbutcont=unsafeWindow.document.createElement('div');
 pbutcont.style.textAlign='right';
 pbutcont.style.position='absolute';
 pbutcont.style.top='0.5em';
 pbutcont.style.right='0.5em';
 pbutcont.appendChild(clbut);
 for (i=0;i<mppnls.length;i++) {
 try {
  mppnls[i].style.position='relative';
  mppnls[i].appendChild(pbutcont.cloneNode(true));
  mppnls[i].getElementsByTagName('div')[0].getElementsByTagName('span')[0].onclick=function(){setPanelState(this.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML,'hide'); this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);};
  if (getPanelState(mppnls[i].getElementsByTagName('span')[0].innerHTML)=='hide') {
   mppnls[i].parentNode.parentNode.removeChild(mppnls[i].parentNode);
   i--;
  }
 } catch(e) {
  console.log(e);
 }
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
 if ( /viois\.ru\/newblog/ .test(window.location.href)) {
    processNewBlogPage();
 }
 if ( /viois\.ru\/support/ .test(window.location.href)) {
    processSupportPage();
 }
 if ( /viois\.ru\/ticket/ .test(window.location.href)) {
    processTicketPage();
 }
 if ( /viois\.ru\/user/ .test(window.location.href)) {
    processUserPage();
 }
 if ( /viois\.ru\/update/ .test(window.location.href)) {
    processUpdatePage();
 }
}
processPage();
}
)();