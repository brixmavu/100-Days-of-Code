# Day 2

I will use [Scrimba](https://scrimba.com/) please check out the platform if you want to learn programing interactively

Biggest reason  of using scrimba is it make playing with code easy

### The Plan

Copy code from day 1

Make login and registration toggle using js 

Link *.js page to the index.html file

> `<script src="./*.js"></script>`

Inside *.js file create two functions next() and prev()

The idea is to toggle between login interface and registration interface

By default we see login interface when click event is clicked we see registration interface

Just changing css propeties via js in a way
>Currently in style.css
>```
>#registration{
>    display: none
>}
>```
>
>JavaScript will dynamically add css style to #login and #registration
>
>```
>#login{
>    display: none
>}
>
>>#registration{
>    display: block
>}
>```
>
>The inverse happens when click event is clicked again

### JavaScript code to achieve that

>```
>function next() {
>    document.getElementById('login').style.display = "none";
>    document.getElementById('registration').style.display = "block";
>}
>function prev() {
>    document.getElementById('registration').style.display = "none";
>    document.getElementById('login').style.display = "block";
>}
```

In index.html we setup for the click event on the event on a new user

1. Login form

`<a href="#" onclick="next()" >You don't have an account yet? Register Here</a>`

2. Registration form

> `<a href="#" onclick="prev()" >You have an account already? Login Here</a>`
