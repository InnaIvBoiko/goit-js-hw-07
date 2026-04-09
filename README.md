# goit-js-hw-07

Homework Topic 12. DOM Model. Events

## General requirements

- Create a repository `goit-js-hw-07`.
- Read each task and complete it in the code editor.
- Tasks must be completed in strict accordance with the technical specification (modifying the original task HTML is not
  allowed).
- There must be no errors or warnings in the console when opening the live page of a task.
- Make sure the code is formatted using Prettier and that there are no errors or warnings in the console when opening
  the live page.
- Submit the homework for review.

## Submission format

- The homework contains two links: the source files (link to the repository with the code) and the live page on GitHub
  Pages.
- Attach the repository file in `.zip` format.

> ☝ **IMPORTANT** Review the instructions for uploading a working file from the repository to GitHub.

## Grading format

- Grade from 0 to 100.

## Starter files

Download the starter files (alternative link) with ready-made markup and linked script files for each task. Copy them
into your project. Note that the starter files are located in the `src` folder. However, for creating a live page on
GitHub, it is very important that the `index.html` file is in the root of the project, i.e. without any additional
nesting. Therefore, you should transfer only the contents of the `src` folder into your project — the `src` folder
itself is not needed.

Use this layout to style the markup of your tasks.

---

## Task 1

The HTML contains a list of categories `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Using properties and methods of DOM elements, write a script that:

- Counts and logs to the console the number of categories in `ul#categories`, i.e. the `li.item` elements.
- For each `li.item` element in the `ul#categories` list, finds and logs to the console the text of the element's
  heading (the `<h2>` tag) and the number of elements in the category (all `<li>` nested inside it).

### What the mentor will check

- The number of categories, their names and the number of elements are obtained using properties and methods of DOM
  elements.
- Data for each category is obtained and logged to the console inside a loop body or a `forEach()` method.
- The console must display the following message:

---

## Task 2

Write a script to create an image gallery based on an array of data. The HTML contains a list `ul.gallery`.

```html
<ul class="gallery"></ul>
```

Use the `images` array of objects to create `<img>` elements nested inside `<li>`.

You can create and add HTML elements using `document.createElement()` and `elem.append()` or using template strings and
`elem.insertAdjacentHTML()`.

- All gallery elements must be added to the DOM in a single append operation.
- Add minimal gallery styling with flexbox via CSS classes.

```js
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
```

### What the mentor will check

- A gallery of three images is created and added to the DOM.
- The gallery is added to the `ul.gallery` list and consists of 3 `<li>` elements with nested `<img>` elements.
- Data from the `images` array of objects is used to create the `<img>` elements.
- All gallery elements are added to the DOM in a single append operation.
- There is minimal gallery styling with flexbox via CSS classes.

---

## Task 3

Write a script that, as the user types in the `input#name-input` (the `input` event), substitutes its current value into
`span#name-output` as the greeting name. Be sure to trim the edges of the input value. If the input is empty or contains
only spaces, the string `"Anonymous"` should be substituted into the span instead of a name.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

### What the mentor will check

- The `input` event is listened for on the `input#name-input` element.
- As text is typed in the input, its current value is substituted into `span#name-output` as the greeting name.
- The input value is trimmed of whitespace on the edges.
- If the input is empty or contains only spaces, the string `"Anonymous"` is substituted into the span instead of a
  name.

---

## Task 4

Write a script to manage the login form.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>
```

- The `form.login-form` submission must happen on the `submit` event.
- When the form is submitted, the page must not reload.
- If there are empty fields in the form on submit, show an `alert` with a warning:
  `'All form fields must be filled in'`. Do not add the `required` attribute on the inputs — validation must happen via
  JS.
- If the user has filled in all fields and submitted the form, collect the field values into an object with two
  properties, where the key is the input name and the value is the corresponding input value trimmed of whitespace on
  the edges. Use the `elements` property to access form elements.
- On form submit, log the object with the entered data to the console and clear the form field values using the `reset`
  method.

### What the mentor will check

- The `submit` event is listened for.
- The page does not reload when the form is submitted.
- If there are empty fields on submit, an `alert` is shown.
- On submit, an object with two properties is logged to the console, where the keys are the input names and the values
  are the corresponding input values trimmed of whitespace on the edges.
- After submit, the form elements are cleared.

---

## Task 5

Write a script that changes the background color of the `<body>` element via inline style on click of
`button.change-color` and sets this color value as the text content of `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

Use the `getRandomHexColor()` function to generate a random color.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

Note that the `getRandomHexColor()` function returns a color in hex format, while the background color on `<body>` will
be in `rgb` format. This is normal and does not require any fixes.

### What the mentor will check

- The background of `<body>` is set only after a click on `button.change-color`.
- On each click on the `button.change-color` element, the background of `<body>` is painted with a new random color.
- `<body>` and `span.color` have the same color value.

---

## Task 6

Write a script for creating and clearing a collection of elements with the following functionality.

There is an `input` where the user enters the desired number of elements. After clicking the `Create` button, a
collection with the corresponding number of elements must be rendered (added to the DOM), and the input value must be
cleared. On repeated clicks of the `Create` button, a new collection must be rendered on top of the old one. After
clicking the `Destroy` button, the collection of elements must be cleared.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

After the user clicks the `Create` button, you need to validate the input value — it must be in the range from 1 to 100
inclusive. Only if it satisfies the condition should new `<div>` elements be added to the DOM.

To render elements on the page, create a function `createBoxes(amount)` that accepts one parameter — a number that
stores the number of elements to render.

The function must create as many `<div>` elements as specified in the `amount` parameter and add them to the DOM as
children of `div#boxes`.

- The dimensions of the first `<div>` element must be 30px by 30px.
- Each subsequent element must be 10px wider and taller than the previous one.
- All elements must have a random background color. Use the ready-made `getRandomHexColor()` function to get a random
  color.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

To clear the collection after clicking the `Destroy` button, create a function `destroyBoxes()` that clears the content
of `div#boxes`, thereby removing all created elements.

### What the mentor will check

- After clicking the `Create` button, if the input value is outside the range 1-100, nothing happens.
- After clicking the `Create` button, the number of multi-colored squares specified in the input is added to
  `div#boxes`. The input value is cleared.
- After repeated clicks on the `Create` button, previous squares are completely removed and replaced with new ones in
  the number specified in the input. The input value is cleared.
- All squares in `div#boxes` are multi-colored and have a random background color.
- The first square in `div#boxes` has dimensions 30px by 30px, and each subsequent one is 10px taller and wider than the
  previous one.
- After clicking the `Destroy` button, all squares must be removed from `div#boxes`.
