var APP_API= {
    APP_URL : "http://python-viupho.rhcloud.com/api/",
    APP_TOKEN: "uuid=a223e322-3657-11e6-a49b-c04a00011902",
    USUARIOS: "usuario",
    PERFIL: "perfil",
    getUrl: function (api, param) {
        if (typeof param!='undefined'){
            return this.APP_URL + this[api.toUpperCase()] + "/" + param + "?" + this.APP_TOKEN;
        } else {
            return this.APP_URL + this[api.toUpperCase()] + "?" + this.APP_TOKEN
        }
    }
};

