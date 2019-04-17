/* eslint-disable */

function set_cookie ( name, value, expires_year, expires_month, expires_day, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );

  if ( expires_year )
  {
    var expires = new Date ( expires_year, expires_month, expires_day );
    cookie_string += "; expires=" + expires.toGMTString();
  }

  if ( path )
	cookie_string += "; path=" + escape ( path );

  if ( domain )
	cookie_string += "; domain=" + escape ( domain );

  if ( secure )
	cookie_string += "; secure";

  document.cookie = cookie_string;

}

function delete_cookie ( cookie_name )
{
  var cookie_date = new Date ( );
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function getCookies(){
	if(!document.cookie || document.cookie.length<2) return {};

	var res = {}, coo,
		cArr = document.cookie.split(/;\s?/);
	for (var i = 0; i < cArr.length; i++) {
		coo = cArr [i].split('=');
		res[coo[0]] = decodeURIComponent(coo[1]);
	}
	return res;
};

var inputElem = document.getElementById('insert').value;

function saveCookie() {
    var username = get_cookie('username');

    if (username) {
        delete_cookie('username');
        var current_date = new Date;
        var cookie_year = current_date.getFullYear ( ) + 1;
        var cookie_month = current_date.getMonth ( );
        var cookie_day = current_date.getDate ( );
        set_cookie('username', inputElem, cookie_year, cookie_month, cookie_day);
        document.location.reload();
    } else {
        set_cookie('username', inputElem);
    }
}

var elem = document.getElementById('par');

var btn = document.getElementById('btn');
btn.addEventListener('click', saveCookie);

document.addEventListener('DOMContentLoaded', function() {
    if (get_cookie('username')) {
        var username = get_cookie('username');
        elem.innerHTML = `<h3>Your name is ${username}</h3>`;
        console.log(get_cookie('username'));
    };
});

console.log(getCookies());
