import { Injectable } from '@angular/core';

import {getAyoba} from '../../lib/microapp.js';

@Injectable({
  providedIn: 'root'
})
export class AyobaService {
  
  ayoba = getAyoba();

  constructor() { }

  getSelfJid() {
    return this.getURLParameter("jid")
}

startConversation(jid: string): any {
  this.ayoba.startConversation(jid);
}

  getURLParameter(sParam: string): any {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

}
