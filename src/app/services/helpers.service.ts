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
    this.str = encodeURI(this.str.replace(/\s/g, '').replace("'", '').toLowerCase());
    if (cb) cb(this.str)
    return this.str;
  }

  arrayReassign(originArray, newArray) {
    originArray.forEach((e) => {
      newArray.push(e)
    })
  }
 


}

