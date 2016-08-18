[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# Angularjs-Echarts

This is a very simple angularjs directive for [echarts](https://ecomfe.github.io/echarts/index-en.html). I had seen a few other packages like this one out there but none of them worked the way I was expecting (or was mentioned in the echarts documentation), so I decided to build this one.

## Install

The easiest way to use this directive is to install it with the bower command line interface. To do so, make sure that you have first [installed bower](https://bower.io/). Then simply run this command:

```
bower install angularjs-echarts
```

Of course, you can always use the poor mans install and simply download the source file from this repo.

## Usage

After you have installed `angularjs-echarts`, you need to make sure to include it in the same HTML files as you did for your angular app.

```html
<script type="text/javascript" src="bower_components/angularjs-echarts/angularjs-echarts.js"></script>
```

After you have included it all of your desired HTML files you will need to inject it into your angular app. To do so, add the following to your angular app:

```javascript
angular.module('your-app', ['angularjs-echarts.echarts'])
```

Pheww, now that you have jumped though all the hoops and you have smashed all of those bugs you found you are ready to use this directive. This directive supports the standard options specified in the [echarts documentation](https://ecomfe.github.io/echarts/doc/doc-en.html). So to use this plugin all you have to do is maintain the echarts options in a controller or whatever. To add this directive in your HTML file add this snippet:

```html
<echarts options="yourOptionsObj"></echarts>
```

And that is it! Now you have an echart on your HTML page in your angularjs app.

### NOTE
This directive will set a default height and width of 300px. If you would like to set a custom height and width for your chart all you need to do is include height and width as attributes on your `echarts` tag like this:

```html
<echarts options="yourOptionsObj" height="100px" width="500px"></echarts>
```

You can also use a angular scope variable for the height and width
```html
<echarts options="yourOptionsObj" height="scopeVar" width="scopeVar"></echarts>
```

## Licence
[MIT](https://github.com/Danwakeem/angularjs-echarts/blob/master/LICENSE). Copyright (c) [Danwakeem](http://wakeemmedia.com/).
