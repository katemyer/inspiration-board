# Inspiration Board

## Deployed here: https://katemyer.github.io/inspiration-board
## At a Glance

- Pair, [stage 2](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/classroom/rule-of-three.md#stage-2) project
- Due *Mon April 27 at 9AM*

## Introduction

In the common Ada space, we have an Inspiration Board that asks people to take notes of encouragement. Similarly, it's fairly easy to leave notes of encouragement!

![Adas inspiration Board](./images/board.jpg)

## Learning Goals
This project should enable you to demonstrate learning in:
- Using an API within a React app
- Designing a React application with multiple interacting components
- Creating test files with snapshot tests

## Objective

Your objective is to build an application which displays a set of cards containing encouraging notes and emoji images, like the board in the Ada common room.

Your project will be a front-end in React that uses a provided API to interface with a backend.

The users should be able to access different, unique boards. Each unique board has their own set of unique notes. Users should be able to add and remove cards to specific boards.

## Getting Started

This project provides some scaffolding. To get started, make sure that you do the following:

- Fork and clone, install your dependencies, and run the server
- Read through the details of the Inspiration Board API (section below)
- Read through the details of the provided CSS styles
- Read through the provided code
- Read through the setup requirements

### The Inspiration Board API

The API is hosted at **https://inspiration-board.herokuapp.com/**.  You can find the API documentation and source code hosted [here](https://github.com/AdaGold/inspiration-board-api).

You should spend time exploring the API with Postman to get a feel for how to make requests and how the data is returned.

### A Note About Styles

We have provided styles for you in `.css` files. Styling is not a major learning goal for this project, so please limit the amount of time you spend on styling.

To ease the use of our styles, the project conforms to a naming methodology/naming convention standard known as [BEM, or Block Element Modifier](http://getbem.com/).

<details>

  <summary>
    For an abbreviated explanation of BEM, read more here!
  </summary>

  Essentially, you can count on the provided styles to conform to the following naming rules:
- There aren't any, or rarely any element/tag selectors or ID selectors, and all styles selectors are on classes. That means there are are a lot more classes to set, but it relies less on assuming a specific HTML structure before understanding how to use it
- Classes are named in [block__element--modifier](http://getbem.com/naming/) format:
  - The first section, `block`, will describe the semantic block that the style applies to
  - The second section, `element` (after two underscores), will describe the specific element within that block that the style applies to
  - The third section `modifier` (after two hyphens), will describe any sort of modifier (ie `enabled`, `success`, `green`) for that block and element that the style applies to

Here's an example:
```css
.new-card-form__header {
  text-align: center;
  ...
}
```

In this case, there is some "block" (section, idea, maybe component) named `new-card-form`, and this style is for the "element" that represents the header by name of `header`. This style makes the header in the new card form `text-align: center;`. Note that this does not dictate what kind of HTML tag this is, or what its parent or children are.
</details>

<br>
Again, please limit the time you spend on styling, and reach out often and frequently.

## Setup Requirements

Create a board for yourself, with a name that will be unique for you. This will be your own board to do development and manual-testing on. To do so, do the following:

1. Pick your board's name. Examples include your first name, like `dee`, or your first and last name combined, like `dee-del-rosario`.
1. Use the Inspiration Board API documentation to create a specific board with a specific board name, and how to read from that specific board name.
1. Once you've confirmed that your specific board name works as an endpoint, open up in your project files `App.js`. In this file, find and observe the following code:
    ```javascript
    <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Ada-Lovelace`}
          />
    ```
1. Replace the value of `boardName` with your unique board name.
1. Use the props `url` and `boardName` throughout your project to create your API endpoints as you work through the project.

## Implementation Requirements

### Wave 1

Create `Card` and `Board` components and use the provided hardcoded data to populate the board.

- Build the Card component to display a single inspirational quote and optional emoji
- Build a `Board` component which renders a list of Cards from hardcoded data

Note there is a package installed called [`emoji-dictionary`](https://github.com/IonicaBizau/emoji-dictionary) which you can elect to use to display the emojis listed.

### Wave 2

In wave 2 you will add API functionality.
- Modify the `Board` component to use `axios` to retrieve card data from the end point, using the board endpoint you configured in the setup requirements.

### Wave 3

- Add a delete button on each card which will remove a card from the `Board` and delete it from the API.
- Create a `NewCardForm` component which will add new cards to the board and trigger POST requests to the API to create a card on the API.
- Create a shallow snapshot tests for the `Card` and `NewCardForm` components

### Optional Enhancements

- Allow the user to switch between boards with a drop-down list
- Add user interaction testing
- Allow the `NewCardForm` to post to different boards on the API.
- Try to deploy the app on Github pages [(nice tutorial, here!)](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d)

## What we're looking for

You can see what your instructors are looking for [here](./feedback.md)
