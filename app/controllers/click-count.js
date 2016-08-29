module.exports = function(scope){
	scope.clicks = 0;
    scope.registerClick = function () {
        scope.clicks++;
    }
};
