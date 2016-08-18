angular.module('angularjs-echarts.echarts', []) // eslint-disable-line

.directive('echarts', function () {
  return {
    restrict: 'EA',
    scope: {
      options: '=options',
      height: '@height',
      width: '@width'
    },
    link: function (scope, elem, attrs) {
      var updateGraph = function (newValue, oldValue) {
        // Get specified height and width
        var height = scope.height
        var width = scope.width
        if (height === undefined) height = '300px'
        if (width === undefined) width = '300px'

        // Set a default width and height
        var chartElement = document.getElementById(attrs.id)
        chartElement.style.width = width
        chartElement.style.height = height

        // Create chart
        var chart = echarts.init(document.getElementById(attrs.id)) // eslint-disable-line
        chart.setOption(scope.options)
      }
      scope.$watch('height', updateGraph)
      scope.$watch('width', updateGraph)
      scope.$watch('options.series[0].data', updateGraph, true)
    }
  }
})
