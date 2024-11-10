export default {
    "nav" : [
        {label: 'Inicio', url: '../index.html', active:''},
        {label: 'Menu', url: '../pages/menu.html', active:''},
        {label: 'Testimonios', url: '../pages/testimonios.html', active:''},
        {label: 'Nosotros', url: '../pages/nosotros.html', active:''},
        {label: 'Enviar', url: '../pages/contactanos.html', active:''},
    ]
}

export function changeActive(label,data){
    data.nav.map((datum)=>{
        if(datum.label===label){
            datum.active = 'active';
        }else{
            datum.active = '';
        }
    })
}