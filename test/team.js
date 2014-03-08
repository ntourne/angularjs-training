function TeamController($scope) {

    $scope.nombreDelEquipo = "Boca";

    $scope.teams = [
        { name: "River", country: "Argentina"},
        { name: "Real Madrid", country: "Espana"},
        { name: "Milan", country: "Italia"}
    ];

    $scope.addTeam = function() {
        $scope.teams.push( { name: $scope.name, country: $scope.country });
    };

    $scope.removeTeam = function(name) {
        var newTeams = $scope.teams;
        $scope.teams = [];
        angular.forEach(newTeams, function(team) {
            if (team.name != name) {
                $scope.teams.push(team);
            }
        });
    }

}