import React, { Component } from 'react';

import Header from './Header';
import Reminder from './Reminder';
import Exercise from './Exercise';
import Tasks from './Tasks';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Reminder />
        <Exercise />
        <Tasks />

        <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSdkGPtAW0AoG_TnURFPZt1DfdRGueDwuJe6_kkkH-mQ0NzUFA/formResponse"
            method="POST"
            id="ss-form"
            target="_self"
            autocomplete="on"
        >

          <label for="entry_887477206">Samassa taloudessa kanssani asuu (valitse yksi tai useampia)...</label>
          <ul role="group" aria-label="Samassa taloudessa kanssani asuu (valitse yksi tai useampia)...">
            <li>
              <label>
                <input
                  type="checkbox"
                  name="entry.830111926"
                  value="Kumppani"
                  id="group_830111926_1"
                  role="checkbox"
                />
                <span>Kumppani</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="entry.830111926"
                  value="Lapsia"
                  id="group_830111926_2"
                  role="checkbox"
                />
                <span>Lapsia</span>
              </label>
            </li>
            <li>
              <label>
                <input
                    type="checkbox"
                    name="entry.830111926"
                    value="Kämppäkaveri/-kavereita"
                    id="group_830111926_3"
                    role="checkbox"
                />
                <span>Kämppäkaveri/-kavereita</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="entry.830111926"
                  value="Koira ja/tai muita lemmikkieläimiä"
                  id="group_830111926_4"
                  role="checkbox"
                />
                <span>Koira ja/tai muita lemmikkieläimiä</span>
              </label>
            </li>

            <li>
              <label>
                  <input
                      type="checkbox"
                      name="entry.830111926"
                      value="Asun yksin"
                      id="group_830111926_5"
                      role="checkbox"
                  />
                  <span>Asun yksin</span>
              </label>
            </li>

            <li>
              <label>
                <input
                  type="checkbox"
                  name="entry.830111926"
                  value="__other_option__"
                  id="group_830111926_6"
                  role="checkbox"
                />
                <span>Muu:</span>
              </label>
              <input
                type="text"
                name="entry.830111926.other_option_response"
                id="entry_830111926_other_option_response"
                dir="auto"
                aria-label="Muu"
              />
            </li>
          </ul>


          <label for="entry_23452119">Olisitko kiinnostunut kokeilemaan/käyttämään edellä esiteltyä koiranomistajille suunniteltua sovellusta?</label>
            <ul
              role="radiogroup"
              aria-label="Olisitko kiinnostunut kokeilemaan/käyttämään edellä esiteltyä koiranomistajille suunniteltua sovellusta?"
            >
              <li>
                <label>
                  <input
                      type="radio"
                      name="entry.552273402"
                      value="Kyllä"
                      id="group_552273402_1"
                      role="radio"
                      aria-label="Kyllä"
                  />
                  <span>Kyllä</span>
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    name="entry.552273402"
                    value="En"
                    id="group_552273402_2"
                    role="radio"
                    aria-label="En"
                  />
                  <span>En</span>
                </label>
              </li>

              <li>
                <label>
                    <input
                      type="radio"
                      name="entry.552273402"
                      value="En osaa sanoa"
                      id="group_552273402_3"
                      role="radio"
                      aria-label="En osaa sanoa"
                    />
                    <span>En osaa sanoa</span>
                </label>
              </li>
            </ul>

            <label for="entry_552623391">Mikä olisi mielestäsi sopiva hinta kyseiselle sovellukselle?</label>

            <ul role="radiogroup" aria-label="Mikä olisi mielestäsi sopiva hinta kyseiselle sovellukselle?">
              <li>
                <label>
                  <input
                    type="radio"
                    name="entry.1700650709"
                    value="6-10€"
                    id="group_1700650709_1"
                    role="radio"
                    aria-label="6-10€"
                  />
                  <span>6-10€</span>
                </label>
              </li>

              <li>
                <label>
                  <input
                      type="radio"
                      name="entry.1700650709"
                      value="1-5€"
                      id="group_1700650709_2"
                      role="radio"
                      class="ss-q-radio"
                      aria-label="1-5€"
                  />
                  <span>1-5€</span>
                </label>
              </li>

              <li>
                <label>
                    <input
                        type="radio"
                        name="entry.1700650709"
                        value="0€"
                        id="group_1700650709_3"
                        role="radio"
                        aria-label="0€"
                    />
                    <span>0€</span>
                </label>
              </li>

              <li>
                  <label>
                    <input
                        type="radio"
                        name="entry.1700650709"
                        value="En osaa sanoa"
                        id="group_1700650709_4"
                        role="radio"
                        aria-label="En osaa sanoa"
                    />
                    <span>En osaa sanoa</span>
                  </label>
              </li>
            </ul>

            <label for="entry_1545576348">Ideoita, kommentteja?</label>
            <textarea
              name="entry.1545576348"
              rows="8"
              cols="0"
              id="entry_1545576348"
              dir="auto"
              aria-label="Ideoita, kommentteja?"
            ></textarea>


            <label for="entry_507886312">Jos haluat kuulla sovelluksesta lisää, voit jättää sähköpostiosoitteesi alle.</label>

            <input
              type="text"
              name="entry.507886312"
              id="entry_507886312"
              dir="auto"
              aria-label="Jos haluat kuulla sovelluksesta lisää, voit jättää sähköpostiosoitteesi alle."
            />

          <input
            type="hidden"
            name="draftResponse"
            value="[null,null,&quot;1916443793915452635&quot;]"
          />

          <input
            type="hidden"
            name="pageHistory"
            value="0"
          />

          <input
            type="hidden"
            name="fbzx"
            value="1916443793915452635"
          />

          <input
              type="submit"
              name="submit"
              value="Lähetä"
              id="ss-submit"
              class="jfk-button jfk-button-action"
          />
        </form>
        
      </div>
    );
  }
}

export default App;
