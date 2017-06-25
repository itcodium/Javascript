var API_URL_PROTOCOLO = "";
var API_URL = "";


//var ENTORNO = '//python-viupho';
var ENTORNO = '//127.0.0.1:5000';

if (ENTORNO == '//python-viupho') {
    API_URL_PROTOCOLO = "";
    API_URL = API_URL_PROTOCOLO + "//python-viupho.rhcloud.com/api/";
}

if (ENTORNO == '//127.0.0.1:5000') {
    API_URL_PROTOCOLO = "http:";
    API_URL = API_URL_PROTOCOLO + "//127.0.0.1:5000/api/";
}

//  URL SERVICES
var APP_USER=        API_URL + "user";


