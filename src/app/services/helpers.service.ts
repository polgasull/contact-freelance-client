import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class HelpersService {
  tags: string;
  str: string;
  constructor() { }

  formatTags(tags, cb) {
    console.log(tags)
    this.tags = '';
    for (let i = 0; i < tags.length; i++) {
      if(tags[i].value && i === 0){
        this.tags = tags[i].value;
      } 
      if(!tags[i].value && i === 0) {
        this.tags = tags[i];
      }
      if (tags[i].value && i !== 0) {
        this.tags += ', ' + tags[i].value;
      }
      if (!tags[i].value && i !== 0) {
        this.tags += ', ' + tags[i];
      }  
      
    }
    console.log(this.tags)
    cb(this.tags);
  }

  // función que detecta 2 parametros, los junta, elimina espacio, minusculas y lo convierte en url
  convertToUrl(name, surname, cb) {
    this.str = surname ? name + '-' + surname : name;
    this.str = this.str.toLocaleLowerCase();
    this.str = this.str.replace("à", "a");
    this.str = this.str.replace("á", "a");
    this.str = this.str.replace("â", "a");
    this.str = this.str.replace("ä", "a");
    this.str = this.str.replace("è", "e");
    this.str = this.str.replace("é", "e");
    this.str = this.str.replace("ê", "e");
    this.str = this.str.replace("ë", "e");
    this.str = this.str.replace("ì", "i");
    this.str = this.str.replace("í", "i");
    this.str = this.str.replace("î", "i");
    this.str = this.str.replace("ï", "i");
    this.str = this.str.replace("ò", "o");
    this.str = this.str.replace("ó", "o");
    this.str = this.str.replace("ô", "o");
    this.str = this.str.replace("ö", "o");
    this.str = this.str.replace("ù", "u");
    this.str = this.str.replace("ú", "u");
    this.str = this.str.replace("û", "u");
    this.str = this.str.replace("ü", "u");
    this.str = this.str.replace("ç", "c");
    this.str = this.str.replace(/\s/g, '');
    this.str = this.str.replace("'", '');
    this.str = this.str.replace("ñ", "n");
    this.str = this.str.replace("@", "ae");
    this.str = this.str.replace("ø", "o")
    this.str = encodeURI(this.str);
    if (cb) cb(this.str)
    return this.str;
  }

  arrayReassign(originArray, newArray) {
    originArray.forEach((e) => {
      newArray.push(e)
    })
  }
 


}

