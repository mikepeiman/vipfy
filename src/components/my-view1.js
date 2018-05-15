/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html }             from '@polymer/lit-element';
import { SharedStyles }     from './shared-styles.js';
import { PageViewElement }  from './page-view-element.js';

class MyView1 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
		<section>
        <h2>VIP For You</h2>
        <h3>You deserve the VIP treatment; we make it as easy as the click of a button!</h3>
        <p>VIPFY ("Vipify") is the world's first platform to arbitrage the one thing we all have a finite supply of: time.
        Have you ever wasted your valuable time waiting in line? Running errands when you had better things to do?
        Wait no longer! Vipify yourself - VIP's don't wait in line. VIP's don't run petty errands, unless they want to.
        Explore some examples of <a href="#">our services</a>, <a href="#">locations</a>, or <a href="#">post a request</a> to have one of our Humble Servants complete
        your task for you.</p>
        <h3>No more need to wait - welcome to the life of a V.I.P.!</h3>
        <br><br>
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
