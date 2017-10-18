import { Injectable } from '@angular/core';

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
  convertToUrl(name, surname) {
    this.str = name + '-' + surname;
    this.str = this.str.replace(/\s/g, '')
    this.str = this.str.toLowerCase();
    this.str = encodeURI(this.str);

    return this.str;

  }



}
