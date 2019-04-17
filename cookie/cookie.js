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
  var cookie_date = new Date ( );  //Ткущая дата и время
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

function saveCookie() {
    if (!get_cookie('username')) {
        var username = document.getElementById('insert').value;
        
        if (username) {
            set_cookie('username', username, 2020, 01, 01);
            console.log(get_cookie('username'));
            document.location.reload( );
        } 
    } else {
        var username = get_cookie('username');
        document.write('Hi, ' + username + ' asd');
    }
}

var btn = document.getElementById('btn');
btn.addEventListener('click', saveCookie);

var cObj = getCookies();
console.log(cObj);
