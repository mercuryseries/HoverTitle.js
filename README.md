##HoverTitle:  A Jquery Plugin


Here is a jQuery Plugin that allow you to add a title to any element of the DOM.  
This title appears when the user hover the given element.

> See a [Demo here](http://teachersdunet.hostei.com/hovertitle/).


## How does it work?

Firstly you have to download two files: `hovertitle.js` and `hovertitle.css`

## Straightforward way
`HoverTitle` plugin is simple to use with the  straightforward way. Look at this examples:

``` js
$("a").HoverTitle("This text is for all anchor");

$("img#google").HoverTitle("Pretty Logo of Google");
```

```html
<a href="#">Link1</a>
<a href="#">Link2</a>
<a href="#">Link3</a>

<img id="google" src="google.png" alt="LOGO GOOGLE" />
```

## Set title in your HTML code
If you want to set the title in your HTML code, just use the custom `data-hovertitle` attribute.

```html
<a id="special" data-hovertitle="I am a special link" href="#" >Special Link</a>
```

``` js
$("a#special").HoverTitle();
```

### Manage Options

``` js
$("p#facebook").HoverTitle({
  theme: 'blue',
  text: 'A popular social network',
  animation: 'slideDown',
  duration: 500
});
```

``` html
<p id="facebook">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, adipisci, saepe, ea porro ad eveniet nihil ipsum reiciendis labore magni fugiat nesciunt voluptatibus sint voluptatum aspernatur aliquid magnam provident veritatis!
</p>
```

#### Create your own theme

You case use many themes for your title. By default, the default theme is used :)  
But of course, you can use others themes like `blue, gray, black ` or create your own theme.

For creating your own theme, you just have to modify the css file **hovertitle.css** and add a new class `hovertitle-name_of_your_theme`. For example` hovertitle-red`.

``` css
.hovertitle-red{
  display: none;
  position: absolute;
  font-size: 14px;
  background-color: red;
  color: #e3e3e3;
  border: 1px solid #555;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.4);
}
```

Now in order to use your custom theme just add `theme: 'red'` to your options.  
Note that you don't have to write `theme: 'hovertitle-red'` but just `theme: 'red'`.
``` js
$("p#facebook").HoverTitle({
  theme: 'red',
  text:"A popular social network",
  animation: 'slideDown',
  duration: 500
});
```
#### Change Animation and Duration

Your can use animation like `animation: 'slideDown'`, `animation: 'fadeIn'`. It's just the same as in the jQuery Library.  
In order to set a `duration` for your animation, the value must be specified in milliseconds.  
For example `animation: 1000` for an animation of `1s`.

### Overwrite default options

You can overwrite the default options defined by the plugin at the top like:
``` js
$.fn.HoverTitle.options = {
   theme: 'black',
   text: 'Have fun guys!',
   animation: 'fadeIn',
   duration: 500
}

$("img#google").HoverTitle({
  text: "Pretty Logo of Google",
  theme: 'gray'
});

$("a#funky").HoverTitle();
```
