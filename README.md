jquery.vp
=========

A simple, lightweight jQuery plugin for detect if an element is above below or in the viewport of the browser

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html <script src="/path/to/jquery.vp.js"></script>```

**Do not include the script directly from GitHub (http://raw.github.com/...).** GitHub is not a CDN.

## Usage

There are two options

* `triggerOnLoad`: if true the event will fire also on load [default:false] (bool)
* `offset`: after how many pixel the event is fired 0 is right in the moment the element became not visibile anymore [default:0] (int)
 
```javascript
$("#element").vp({
	triggerOnLoad: false,
	offset: 10
});
```

After configuration you can use the 3 events:

* `aboveViewPort`
* `belowViewPort`
* `inViewPort`

For example like so:

```javascript
$("#element").on("aboveViewPort belowViewPort", function () {
	alert("out of view port");
});
```
The plugin has also e convenient method called `scrollInView` for brin an element in the viewport.
An example would be:

```javascript
$("#btn").on("click",function() {
    $("#element").vp({
        method:"scrollInView",
        offset: "center",
        speed: 1000,
        callback: function() {
            $("#element").css("background-color","green");
        }
    });
})
```
There are three options

* `offset`: could be center (as string) or any integer number which defines how much farway from the top the element should stop[default:0] (int)
* `speed`: the speed of the animation in milliseconds[default:100] (int)
* `easing`: the type of animation as defined in the animation method of jQuery[default:swing] (string)


See it in action and hack it [here](http://jsfiddle.net/pmcalabrese/pumLm/4/)

## Author

[Pachito Marco Calabrese](https://github.com/pmcalabrese) - pm.calabrese@gmail.com