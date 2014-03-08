function TodoCtrl($scope) {

    // array of todo
    $scope.todos = [
        {text: 'learn angular', done: true},
        {text: 'build and angular app', done: false}
    ];

    // add todo function
    $scope.addTodo = function() {
        $scope.todos.push({text: $scope.todoText, done:false});
        $scope.todoText = '';
    };

    // return the count of remaining todos (not done)
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
        })
        return count;
    };

    // archive all done todo
    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done)
                $scope.todos.push(todo);
        });
    };
}