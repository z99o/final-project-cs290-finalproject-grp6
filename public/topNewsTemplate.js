(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['topNewsTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href = \"a1\">\r\n      "
    + container.escapeExpression(((helper = (helper = helpers.newsText || (depth0 != null ? depth0.newsText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"newsText","hash":{},"data":data}) : helper)))
    + "\r\n</a>\r\n";
},"useData":true});
})();