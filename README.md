# Magneta Bricks - Kevin Tran

To whom it may concern, this is my attempt at the coding challenge. For the sake of an mvp to present, I've used [this](https://github.com/srinisoundar/react-webpack-babel-kit) as the boilerplate. I know from the requirements that React components need to be made, so I'm making some technical assumptions before I get too deep into the project. This has been chosen for the following requirements:

- Optimization out of the box, webpack will completely minify a production ready build.
- Quality of life measures: allows the compiling of ES5 and sass painlessly. Using gulp to do this can be quite involved, as well as things like Hot Reloading are much easier to get without having to patch on more plugins.

# Requirements: 

1. **Use HTML5/SASS/JavaScript/Bootstrap  ✓**

2. **Create page called index.html ✓**

3. **Make the "Buyer's details" box collapse/expand when user presses hide/show in top right corner. ✓**

The chevron changes to up/down depending on state of the dropdown

4. **When users clicks the 'submit offer' button, validate the price, show an in-line error message accordingly. The price must be formatted into Integer. Put the price in a dummy object and output its contents to the console. ✓**

I've made some assumptions in that the price validation is so you can't enter letters into the input field. On submit, it does an alert as well as a console log

5. **The page must be responsive. ✓**

6. **Use MVVM library/framework such as KnockoutJS or ReactJS etc. ✓**

React is used for both the input field and drop down

7. **Format the price input (180,000 instead of 180000) as the user types ✓**

Leveraged a library to format on input

8. **Use build tools (Gulp, Grunt etc.) ✓**

Webpack is primarily for the hot reloading and auto transpiling of SASS and ES5/6. For the sake of the prototype, it hasn't really leveraged the bundling, but I've kept the components reasonably modular.

# Challenges: 

- Unsure if this was intentional but all of the buttons and font sizing is different across the board. While there is definitely hierarchy on the page, I personally prefer to work with defined styles for fonts, headings, buttons etc to help with consistency. 
- The home logo was an interesting one. Although not 1:1, I feel it is a reasonable compromise and stays true to the designs.
- This ties into the first point, but there are a lot of messy responsive overrides made to different buttons to stay aligned with the design. Could have been dealt with more elegantly.