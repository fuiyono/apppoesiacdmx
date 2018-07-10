import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DpoetasPage} from '../index.paginas';
/**
 * Generated class for the PoetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poetas',
  templateUrl: 'poetas.html',
})
export class PoetasPage {

 poetas:any[] = [
   {
     nombre: "Ko Un",
     imagen: "assets/poetas/ko.jpg",
     foto: "assets/foto/ko.jpg",
     origen: "(Corea del Sur)",
     semblanza: "Nació en Gun San en 1933. Es uno de los principales candidatos a recibir el Premio Nobel de Literatura. Este año se le otorga en México el Premio Internacional de Poesía Nuevo Siglo de Oro 2018, como un reconocimiento de la lengua española para otra tradición lírica. Además, Círculo de Poesía Ediciones publica una antología de sus poemas este año (2018). Ko Un, procedente de una familia campesina, desde muy pequeño estudió los clásicos chinos y se interesó por la poesía. Durante su juventud, traumatizado por el ambiente de la guerra en su país, superó un intento de suicidio ingresando en la orden budista donde permaneció hasta 1962. Es el poeta más representativo de la Corea del Sur contemporánea.",
     reproduciendo: false
   },
   {
     nombre: "Michael Augustin",
     imagen: "assets/poetas/augustin.jpg",
     origen: "(Alemania)",
     semblanza: "Nació en Lübeck, Alemania en 1953. Poeta, narrador, dramaturgo, traductor y conductor de Radio Bremen. Obtuvo los premios Friederich Hebbel Prize y Kurt Magnus Prize. Fue parte del International Writers program of Iowa University en 1984. Ha publicado varios libros de poesía como Un tal Koslowski y otras miniaturas (2005) y Valles apilados: Poemas y miniaturas (2007). En 2015 Círculo de Poesía y Valparaíso México publicaron su libro Los poemas no leen poemas. Su poesía se ha traducido al español, inglés, polaco, italiano y griego.",
     foto: "assets/foto/augustin.jpg",
     reproduciendo: false
   },
  {
    nombre: "Sujata Bhatt",
    imagen: "assets/poetas/sujata.jpg",
    origen: "(India)",
    semblanza: "Nació en Ahmedabad, India, en 1954. Pronto se mudó a Estados Unidos y estudió en la Universidad de Iowa. Ha publicado ocho colecciones de poesía. Por su primer libro, Brunizem, mereció el Commonwealth Poetry Prize de Asia y el Premio Alice Hunt Bartlett. Ha recibido distinciones en Alemania (Das neueBuch) e Italia (Premio de Poesía Tratti). Fue la primera poeta en recibir, en 2014, el Premio de Poesía Nuevo Siglo de Oro que, a través del Encuentro Internacional de Poesía Ciudad de México, ofrece la lengua española a las literaturas del mundo. En 2018 Círculo de Poesía Ediciones publicó su libro Shérdi y otros poemas. Actualmente vive en Bremen.",
    foto: "assets/foto/sujata.jpg",
    reproduciendo: false
  },
  {
    nombre: "James Byrne",
    imagen: "assets/poetas/byrne.jpg",
    origen: "(Gran Bretaña)",
    semblanza: "Nació en Buckinghamshire, Gran Bretaña en 1977. Poeta, traductor, editor y profesor universitario. Maestría en Escritura Creativa por la Universidad de Nueva York con la prestigiosa beca Stein. Su primer poemario, Passages of Time (2003), lo ubicó en la vanguardia de la nueva poesía inglesa. A ese libro le siguieron Blood/Sugar (2009), Everything Broken Up Dances (2015) y White Coins (2015). Coeditor de la antología que definió a su generación, Voice Recognition: 21 Poets for the 21st Century (2009). Co-traductor de la primera antología de la poesía birmana publicada en Occidente, Bones Will Crow (2012). Sus poemas han sido traducidos a varios idiomas, y una antología suya se publicó en Serbia. Fue poeta en Residencia en Clare Hall, University of Cambridge (el primero después de Joseph Brodsky), y en la actualidad enseña poesía en Edge Hill University. Dirige la prestigiosa revista de poesía The Wolf.",
    foto: "assets/foto/byrne.jpg",
    reproduciendo: false
  },
  {
    nombre: "Efe Duyan",
    imagen: "assets/poetas/efe.jpg",
    origen: "(Turquía)",
    semblanza: "Nació en Estambul en 1980. Poeta, traductor y arquitecto. Es autor de tres libros de poesía Takas (2006), Tek Şiirlik Aşklar (2012) y Sıkça Sorulan Sorular (2016). Poemas suyos han sido traducidos al francés, italiano, chino, griego, entre otras lenguas. Colabora con el Offline Istanbul Poetry Festival y distintos festivales en el mundo.",
    foto: "assets/foto/efe.jpg",
    reproduciendo: false
  },
  {
    nombre: "Bas Kwakman",
    imagen: "assets/poetas/Bas.png",
    origen: "(Holanda)",
    semblanza: "Nació en 1964. Poeta, editor y artista visual holandés. Es director del Director del Festival Internacional de Poesía de Rotterdam, uno de los más aclamados festivales del mundo. Es editor del colectivo editorial Poetry International Web. Círculo de Poesía Ediciones junto a Visor Libros México acaban de publicar su libro: Historias de habitaciones de Hotel (2018). ",
    foto: "assets/foto/Bas.png",
    reproduciendo: false
  },
  {
    nombre: "Nii Parkes",
    imagen: "assets/poetas/parkes.jpg",
    origen: "(Ghana)",
    semblanza: "Nacido en 1974 en el Reino Unido, pero hijo de padres ghaneses y criado en Ghana, forma parte de la punta de lanza de la nueva poesía africana. Es escritor, poeta y comentador sociocultural. En 2014 en el marco del festival Hay y del proyecto Africa39, fue nombrado como uno de los 39 escritores del África subsahariana menores de cuarenta años de mayor relevancia. En 2007 fue galardonado con el Premio nacional ACRAG de Ghana por su obra poética y su compromiso con la literatura. Su último libro, titulado The makings of You, apareció en Peepal Tree Press en 2010.",
    foto: "assets/foto/parkes.jpg",
    reproduciendo: false
  },
  {
    nombre: "Abreu Paxe",
    imagen: "assets/poetas/paxe.png",
    origen: "(Angola)",
    semblanza: "Nació en el Valle de Loge, municipio Bembe, provincia de Uíge. Se graduó en el Instituto de Ciencias de la Educación (CINE), en Luanda, en la especialidad en lengua portuguesa. Es miembro de la Unión de Escritores Angoleños (UEA). Es profesor de literatura angoleña en el Instituto de Ciencias de la Educación (CINE) de la Universidad Agostinho Neto. Figura en varias revistas y antologías. Entre sus obras publicadas se encuentran A chave no repouso da porta (2003), O vento fede de luz (2007). Fue galardonado con el Premio Literario António Jacinto con su obra A chave no repouso da porta.",
    foto: "assets/foto/paxe.png",
    reproduciendo: false
  },
  {
    nombre: "Sasha Pimentel",
    imagen: "assets/poetas/pimentel.jpg",
    origen: "(Filipinas)",
    semblanza: "Nació en Manila, en las Islas Filipinas y se crio en los Estados Unidos y en Arabia Saudita. Want of Water: And Other Poems fue seleccionado por Gregory Pardlo como ganador de las National Poetry Series (EEUU) en 2016. También es la autora de Insides She Swallowed (West End Press, 2010), y ganadora de la American Book Award en el 2011. Actualmente es profesora asociada del Departamento de Creación Literaria en la Universidad de Texas en El Paso.",
    foto: "assets/foto/pimentel.jpg",
    reproduciendo: false
  },
  {
    nombre: "Paura Rodríguez Leytón",
    imagen: "assets/poetas/paura.jpg",
    origen: "(Bolivia)",
    semblanza: "Nació en 1973. Poeta y periodista boliviana. Círculo de Poesía Ediciones acaba de publicar su más reciente libro Instante claro (2018). Entre su otros libros destaca Del Árbol y la arcilla azul azul (1989); Ritos de viaje (2002, 2007); Pez de Piedra (2007); Como monedas viejas sobre la tierra (2012) y Deshilvanando el misterio de la hierba (2014). Coexistencia, disco de poemas musicalizados (2016). Con Ritos de viaje obtuvo el Premio Nacional de Poesía convocado por el Gobierno Municipal de Sucre (1999). Su poema “Te atribuyo el torrente de mi sangre” mereció el segundo Premio Internacional César Vallejo de la Casa del Poeta Peruano en Londres (2006). Poemas suyos han sido traducidos 16 idiomas. Su libro Pequeñas mudanzas obtuvo el Accésit del Premio Internacional de Poesía Pilar Fernández Labrador en Salamanca, en 2017. En 2013, la Unión Boliviana de Clubes del Libro premió su aporte literario con una Medalla al Mérito",
    foto: "assets/foto/paura.jpg",
    reproduciendo: false
  },
  {
    nombre: "Enrique Solinas",
    imagen: "assets/poetas/Solinas.png",
    origen: "(Argentina)",
    semblanza: "Nació en Buenos Aires en 1969. Poeta, narrador, traductor, crítico literario y periodista cultural. Ha recibido distinciones como el primer Premio Rotary Club Bienio 1990/1991, primer Premio Nacional Iniciación Bienio 1992/1993, de la Secretaría de Cultura de la Nación, el primer Premio Estímulo a la Creación año 2000 de la Secretaría de Cultura de la Nación. Entre sus libros destacan Signos oscuros (1995), El gruñido (1997), El lugar del principio (1998), Jardín en movimiento (2003), Noche de San Juan (2008) y El gruñido y otros poemas (2011).",
    foto: "assets/foto/Solinas.png",
    reproduciendo: false
  },
  {
    nombre: "Miguel Ángel Zapata",
    imagen: "assets/poetas/zapata.png",
    origen: "(Perú)",
    semblanza: "Nació en Piura, Perú en 1955. Poeta, ensayista y profesor universitario. Actualmente es profesor principal de literaturas hispánicas en la Universidad de Hofstra, Nueva York. Entre sus libros destacan Escribir bajo el polvo (2000), Cuervos (2003), El cielo que me escribe (2002, 2005), Un pino me habla de la lluvia (2007). Su poesía ha sido traducida al inglés, francés, portugués, árabe e italiano.",
    foto: "assets/foto/Zapata.png",
    reproduciendo: false
  },
  {
    nombre: "Uchechi Kalu",
    imagen: "assets/poetas/uchechi.jpg",
    origen: "(Nigeria)",
    semblanza: "Nació en Nigeria. Es poeta, activista y profesora universitaria. Estudió Escritura Creativa en UC Berkeley. Su obra ha aparecido en diversas antologías y ha participado en distintos festivales. En 2006 publicó su primer libro Flowers Blooming Against A Bruised Grey Sky, con el cual fue nominada al Northern California Book Award.",
    foto: "assets/foto/uchechi.jpg",
    reproduciendo: false
  },
  {
    nombre: "Michael Brennan",
    imagen: "assets/poetas/brennan.jpg",
    origen: "(Australia)",
    semblanza: "Nació en Sydney en 1973. Poeta, editor y académico. Es director de la prestigiosa editorial Vagabond Press. Ha merecido distintas distinciones como el Mary Gilmore Award, el William Baylebridge Award y el Grace Leven Prize. Es autor de libros como The Imageless World (2003), Unanimous Night (2008), Autoethnographic (2012) y The earth here (2018). Su poesía ha sido traducida al francés, español, italiano, japonés, chino y vietnamita. Actualmente radica en Tokio.",
    foto: "assets/foto/brennan.jpg",
    reproduciendo: false
  }
];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoetasPage');
  }

  irDpoetas(  poeta:any ){

    console.log( poeta );

    this.navCtrl.push( DpoetasPage, { 'poeta': poeta } );

  }

}
