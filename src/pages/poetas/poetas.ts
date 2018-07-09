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
    origen: "(Grab Bretaña)",
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
    nombre: "Michael Brennan",
    imagen: "assets/poetas/brennan.jpg",
    origen: "(Australia)",
    semblanza: "",
    reproduciendo: false
  },
  {
    nombre: "Uchechi Kalu",
    imagen: "assets/poetas/uchechi.jpg",
    origen: "(Nigeria)",
    semblanza: "",
    foto: "assets/foto/",
    reproduciendo: false
  },
  {
    nombre: "Miguel Ángel Zapata",
    imagen: "assets/poetas/zapata.png",
    origen: "(Perú)",
    semblanza: "",
    foto: "assets/foto/",
    reproduciendo: false
  },
  {
    nombre: "Bas Kwakman",
    imagen: "assets/poetas/Bas.png",
    origen: "(Holanda)",
    semblanza: "",
    foto: "assets/foto/",
    reproduciendo: false
  },
  {
    nombre: "Paura Rodríguez Leytón",
    imagen: "assets/poetas/paura.jpg",
    origen: "(Bolivia)",
    semblanza: "",
    foto: "assets/foto/",
    reproduciendo: false
  },
  {
    nombre: "Enrique Solinas",
    imagen: "assets/poetas/Solinas.png",
    origen: "(Argentina)",
    semblanza: "",
    foto: "assets/foto/",
    reproduciendo: false
  },
  {
    nombre: "Abreu Paxe",
    imagen: "assets/poetas/paxe.png",
    origen: "(Angola)",
    semblanza: "",
    foto: "assets/foto/",
    reproduciendo: false
  },
  {
    nombre: "Nii Parkes",
    imagen: "assets/poetas/parkes.jpg",
    origen: "(Ghana)",
    semblanza: "",
    foto: "assets/foto/",
    reproduciendo: false
  },
  {
    nombre: "Sasha Pimentel",
    imagen: "assets/poetas/pimentel.jpg",
    origen: "(Filipinas)",
    semblanza: "",
    foto: "assets/foto/",
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
