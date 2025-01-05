'use strict';

const apiName = document.querySelectorAll('.api-name');
const apiStatus = document.querySelectorAll('.api-status');
const comprobar = document.getElementById('comprobar');

const comprobarApis = async () => {
    const apiInfo = await fetch('apis.txt');
    const apis = await apiInfo.json();

    return apis;
}

comprobar.addEventListener('click', () => {
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