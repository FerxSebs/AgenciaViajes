import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimonial.js';

const paginaInicio = async(req, res)=>{
    const promises =[];
    promises.push(Viaje.findAll({limit:3}));
    promises.push(Testimonial.findAll({limit:3}));
    try{
        const resultado =await Promise.all(promises);
        console.log(resultado[0]);
        res.render('inicio',{
            viajes: resultado[0],
            testimoniales: resultado[1],
            clase: 'home',
            page: 'Inicio',
        });
    }catch(error){
        console.log(error);
    }
}
const paginaNosotros= (req, res)=>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}
const paginaViajes = async (req, res)=>{
    const viajes =await Viaje.findAll();
    res.render('viajes',{
        pagina: 'Proximos Viajes',
        viajes,
    });
}
const paginaTestimoniales = async (req, res)=>{
    try{
        const testimoniales =await Testimonial.findAll();
        res.render('testimoniales',{
            testimoniales,
            page: 'Testimoniales'
        });
    }catch(error){
        console.log(error)
    }
}
const paginaDetalleViaje = async (req, res)=>{
    const {slug} = req.params;
    try{
        const viaje= await Viaje.findOne({where: {slug}});
        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje
        });
    }catch(error){
        console.log(error);
    }
}
export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}