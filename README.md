# landing-page-sliding-reveal
CSS animations to reveal page content when user clicks logo

## What's going on here?
### HTML
The container section holds the main content for the page. Anything that is to be displayed to the user on the landing page should be located inside of this containing element.

The sliding elements are multiple divs with CSS properties for animation and Javascript for the "click" event handler.

### CSS
normalize.css CSS is a standard reset stylesheet

stylesheet.css contains page styling and animation bahavior
The logo animated slower that the sliders, the bahviour is set that the element will animate off the page in x seconds (.4s), therefore, the layout "breaks" because the logo has further to travel in the same amount of time as the slider. So it's worth noting that if you change the speed of the slider animation, you should also tweak the logo acordingly.

## Todo
- Make responsive!
- Update code for scroll event