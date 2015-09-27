# Angular


### Why Angular?

* With regular web server - browser interaction, when the user comes on the app for the first time, the server loads the assets and the HTML. Further user interaction with the web page triggers the browser to ping the server for chunks of code. This interaction is time inefficient, obviously.
* With Angular, however, when subsequent user interactions occur, the server returns only JSON data, and Angular handles all the frontend interaction crunching, leaving the server free to handle the backend data crunching.
_ _ _

### Angular Directives  

* For HTML to know when to run Angular. And for Angular to know which javascript funtion to run.

##### ng-controller
```
<--! index.html -->
..
<body ng-controller="someController">
</body>


<--! index.js -->
someController = function() {
  //function body
}
```

##### ng-app
ng-app runs the required module when the document loads
```
<html ng-app="someModuleName">
```

##### ng-show
ng-show shows the HTML element only when the directive's expression is true

```
<button ng-show="alias.property.value">
<--! shows only when alias.property.value is true -->
```

##### ng-hide
Opposite behavior of ng-show

##### ng-class
The class to be appended gets appended to the HTML element when the expression gets truthy.

```
ng-class = "{classNameToBeAppended: expression}"
```
_ _ _

### Modules

* Pieces of Angular app.
* Also, where the dependencies are specified.

```
var app = angular.module('someModuleName', [..dependencies]);
```
_ _ _

### Expressions

* Inserting dynamic values into HTML

```
<p>
Ten is {{4 + 6}}
</p>
```
_ _ _

### Controllers

* Work with data. Helps data get onto the page.
* We define our app's behavior using functions and values.

```
<--! index.html -->
<div ng-controller="someControllerName as alias">
app.controller('someControllerName', function() {
  //logic
})
```
_ _ _

### Filters

Filters are put on the variable inside the expression.
```
{{ variable | filter:options }}
```
_ _ _

### Two way data-binding

* Expressions define a two way binding.
* Expressions are re-evaluated when the property changes. So each time some property connected to the directive changes, the expressions reflect the change on the web page
