import { getGalleryData } from "./galeria/datosGaleria";
import { getHeroData } from "./hero/hero";
import { getTestimonioData } from "./testimonios/datosTestimonios";
import { getGaleriaImagenesData } from "./galeria/datosGaleriaImagenes";
import { getTabla } from "./tabla/datostabla";


//----------------Nav
import navData from "./global/nav";
//--------------- Productos 

import { getProductData } from "./productos/producto1";

export const generarContextoDePagina = (page)=>{
    const contextObject = {
        ...navData,
    };
    let pageObject = {}
    switch(page){
        case '/gallery.html':
            pageObject = getGalleryData();
            break;
        case '/index.html':
            const heroData = getHeroData();
            const testimonioData = getTestimonioData();
            const galeriaimagenes = getGaleriaImagenesData();
            const tabla = getTabla();
            pageObject = {
                ...heroData,
                ...testimonioData,
                ...galeriaimagenes,
                ...tabla
            };
            break;
        case '/productos/producto1.html':
            pageObject = getProductData();
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject
    }
}