'use strict';

const apiName = document.querySelectorAll('.api-name');
const apiStatus = document.querySelectorAll('.api-status');
const comprobarLasApis = document.getElementById('comprobar_apis');
const codigoNavegador = document.getElementById('codigo__navegador');
const nombreNavegador = document.getElementById('nombre__navagador');
const versionNavegador = document.getElementById('version__navegador');
const comprobarNavegador = document.getElementById('comprobar__navegador');

const comprobarApis = async () => {
    const apiInfo = await fetch('apis.txt');
    const apis = await apiInfo.json();

    return apis;
}

comprobarLasApis.addEventListener('click', () => {
    comprobarApis()
        .then(apis => {
            let cont = 0;
            for (const api of apis) {
                if (api.object) {
                    apiName[cont].innerHTML = api.api_Name;
                    apiStatus[cont].innerHTML = `La API ${api.api_Name} es compatible con el navegador`;            
                } else {
                    apiName[cont].innerHTML = api.api_Name;
                    apiStatus[cont].innerHTML = `La API ${api.api_Name} no es compatible con el navegador`;
                }
                cont++;
            }
    });
});

comprobarNavegador.addEventListener('click', () => {
    codigoNavegador.innerHTML = navigator.appCodeName;
    nombreNavegador.innerHTML = navigator.appName;
    versionNavegador.innerHTML = navigator.appVersion;
});