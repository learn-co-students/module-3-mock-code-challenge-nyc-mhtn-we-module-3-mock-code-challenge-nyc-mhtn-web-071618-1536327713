## Objectives
- DOM Manipulation
- Events and Event Handlers
- Callbacks
- ES6 Classes
- Fetching from APIs

## Instructions

build Master Detail Interface (Master-Detail.png)

side of screen: see a list of "all things" (i.e. all Messages) containing some info about each message (sender & first few lines of message)

clicking on a message on master list, app shows more info about particular message
-------------------------------------------------------------------------
Build Beer App 🍺🍺🍺

when page loads: see list of beer names retrieved from an API on left hand side of screen

click beer name: app reveals more info about particular beer.

looking at details of a beer, edit current description of beer
Clicking 'Save' button save changes added to description in database

![beer gif](code-challenge-mod-iii-round-ii.gif)

## Deliverables
### Step 1 - Display All Beer Names

#### Styling

[Bootstrap](https://getbootstrap.com/docs/3.3/components/#list-group) is loaded into this project via a link tag in the head of the html. Generally, do not worry about styling in this application.

**One important point** is that for the beer names to show up correctly, the html should have the following class names:

```html
<ul class="list-group">
  <li class="list-group-item">Beer title 1</li>
  <li class="list-group-item">Beer title 2</li>
  /* etc... */
</ul>
```

### Step 2 - Display Single Beer Details

When I click a beer name, the application should reveal more information about that particular beer.
See the example above for the additional information that should be displayed.

* **Route:** GET `http://localhost:3000/beers/:id`

The beer details should be added to this div

```html
<div id="beer-detail">

</div>
```
The html should look something like:

```html
<h1>Beer Name</h1>
<img src="<add beer img url here>">
<h3>Beer Tagline</h3>
<textarea>Beer Description</textarea>
<button id="edit-beer" class="btn btn-info">
  Save
</button>
```

### Step 3 - Edit Beer Details

When looking at the details of a beer, I can edit the current description of a beer. Clicking the 'Save' button will save any changes added to the description in the database.

To update a beer you'll need to make a PATCH request
* **Route:** PATCH `http://localhost:3000/beers/:id`
* **Body:**
```js
  {description: "your new description"}
```
* **Headers:**
```js
  {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  ```

  **Important Notes:**
  * For all intents and purposes, PATCH behaves the same as POST. If you know how to POST, you know how to PATCH
  * When using `fetch` to make a PATCH request, be sure to capitalize method: 'PATCH'


## Considerations

You are free to solve this in any way you choose. It is not required that you have ES6 classes or use Object Orientation. We would recommend beginning with a straightforward functional implementation and refactoring to objects as needed.

jQuery is included in this project, you can choose to use jQuery or vanilla JS.

When you click on an individual `<li>` you will need some of way of determining which particular beer was clicked on. How will you solve this problem?
