import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class HelpersService {
  tags: string;
  str: string;
  constructor() { }

  formatTags(tags, cb) {
    for (let i = 0; i < tags.length; i++) {
      if (i == 0) {
        this.tags = tags[i].value;
      } else {
        this.tags += ', ' + tags[i].value;
      }
    }
    cb(this.tags);
  }

  // función que detecta 2 parametros, los junta, elimina espacio, minusculas y lo convierte en url
  convertToUrl(name, surname, cb) {
    this.str = surname ? name + '-' + surname : name;
    this.str = encodeURI(this.str.replace(/\s/g, '').replace("'", '').toLowerCase());
    if (cb) cb(this.str)
    return this.str;
  }
}
