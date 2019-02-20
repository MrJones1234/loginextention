// ==UserScript==
// @name     ebayLogInScript
// @version  1
// @grant    none
// @include *
// ==/UserScript==


var getUrlVars = function(){
  var vars = {};
  var param = location.search.substring(1).split('&');
  for(var i = 0; i < param.length; i++) {
    var keySearch = param[i].search(/=/);
    var key = '';
    if(keySearch != -1) key = param[i].slice(0, keySearch);
    var val = param[i].slice(param[i].indexOf('=', 0) + 1);
    if(key != '') vars[key] = decodeURI(val);
  }
  return vars;
}
var getVal = getUrlVars();

if(location.hostname == ('www.ebay.co.uk' || 'www.ebay.co.de' || 'www.ebay.com') && getVal.userid && getVal.pass){

  (function(d, i, v) {

    d[i]("userid")[v] = atob(getVal.userid);
    d[i]("pass")[v] = atob(getVal.pass);
    d[i]("SignInForm").submit();

  })


  (document, "getElementById" ,"value");
	}


if((location.hostname == 'www.ebay.com' && getVal.redirect) ){

    window.location = "https://" + getVal.redirect;

   }
