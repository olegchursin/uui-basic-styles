import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1 class="uui-h1">UnitedUI with vanilla CSS</h1>
      <p class="uui-body">
        Basic implementation of <a href="">Aon Style Guide</a> in a form of a
        single <code>styles.css</code> file that can be thrown in a project for
        an immediate use.
      </p>

      <section>
        <h2>Typography</h2>
        <hr />
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <h3>Body text</h3>
        <p class="uui-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          voluptatibus ea optio deserunt quia quibusdam esse obcaecati
          repellendus eveniet ipsum aperiam. Alias, sunt. Nesciunt similique
          consectetur nulla expedita, non repudiandae.
        </p>
        <h3>Body large text</h3>
        <p class="uui-body-large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eius
          amet assumenda necessitatibus dolores a recusandae. Deleniti
          doloremque fugit ipsam aliquid nemo quas debitis officiis ex sequi
          quidem! Provident, sequi!
        </p>
        <h3>Body small text</h3>
        <p class="uui-body-small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ullam nesciunt aperiam dolorum amet nulla at recusandae earum quam
          sunt natus, nobis nihil sapiente atque molestias aspernatur mollitia?
          Laboriosam, odit.
        </p>
        <h3>Body extra small text</h3>
        <p class="uui-body-extra-small">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          fugiat, deleniti inventore iste tempora sit temporibus aliquid
          corporis eaque quam perspiciatis, sequi nostrum nulla unde omnis
          voluptatum. Ut, eos exercitationem!
        </p>
        <h3>Links</h3>
        <a class="uui-body" href="#">
          This is a link
        </a>
      </section>

      <section>
        <h2>Colors</h2>
        <hr />
        <p class="uui-body">Color values are available as CSS variables:</p>
      </section>

      <section>
        <h2>Buttons</h2>
        <hr />
        <button class="uui-button uui-button__default m-r-20">
          Default Button
        </button>
        <button class="uui-button uui-button__prominent m-r-20">
          Prominent Button
        </button>
        <button class="uui-button uui-button__subtle m-r-20">
          Subtle Button
        </button>
        <button class="uui-button uui-button__ghost">Ghost Button</button>
      </section>

      <section>
        <h2>Inputs</h2>
        <hr />

        <form>
          <div class="uui-form-group">
            <label for="inputField">Text input</label>
            <input
              type="text"
              id="inputField"
              name="inputField"
              placeholder="Placeholder text"
            />
          </div>

          <div class="uui-form-group">
            <label for="textareaField">Text input</label>
            <textarea
              id="textareaField"
              name="textareaField"
              placeholder="Placeholder text"
            />
          </div>
          <div class="uui-form-group">
            <label for="selectField">Select</label>
            <select class="uui-select">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </form>
      </section>
    </div>
  );
}
