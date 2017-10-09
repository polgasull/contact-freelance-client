import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {
  tags: string;
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

}
