import navData from "./global/nav";
import { changeActive } from "./global/nav";

export const generarContextoDePagina = (page)=>{
    let contextObject = {};
    let pageObject = {}
    switch(page){
        case '/pages/menu.html':
            pageObject = {};
            changeActive('Menu',navData)
            contextObject = {...navData};
            break;
        case '/index.html':
            pageObject = {};
            changeActive('Inicio',navData)
            contextObject = {...navData};
            break;
        case '/pages/nosotros.html':
            pageObject = {};
            changeActive('Nosotros',navData)
            contextObject = {...navData};
            break;
        case '/pages/contactanos.html':
            pageObject = {};
            changeActive('Enviar',navData)
            contextObject = {...navData};
            break;
        default:
            pageObject = {};
            changeActive('',navData)
            contextObject = {...navData};
    }
    return {
        ...contextObject,
        ...pageObject
    }
}