(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['commentTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"comment\">\r\n            <p class=\"comment-text\">\r\n              "
    + alias4(((helper = (helper = helpers.commentContent || (depth0 != null ? depth0.commentContent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentContent","hash":{},"data":data}) : helper)))
    + "\r\n            </p>\r\n            <p class=\"date-time\">\r\n              "
    + alias4(((helper = (helper = helpers.commentDate || (depth0 != null ? depth0.commentDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentDate","hash":{},"data":data}) : helper)))
    + "\r\n            </p>\r\n          </div>";
},"useData":true});
})();