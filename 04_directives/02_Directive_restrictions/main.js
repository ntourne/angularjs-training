var app = angular.module("superhero", []);

app.directive("superman", function() {
    return {
        restrict: "A", // E: element, A: attribute, C: class, M: comment
        link: function() {
            alert("I am working");
        }
    }
});

app.directive("flash", function() {
    return {
        restrict: "M", // E: element, A: attribute, C: class, M: comment
        link: function() {
            alert("I am working faster");
        }
    }
});