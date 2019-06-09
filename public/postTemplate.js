(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['postTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<article class=\"post\">\r\n        <div class=\"post-content\">\r\n          <p class=\"post-text\">\r\n            "
    + container.escapeExpression(((helper = (helper = helpers.postContent || (depth0 != null ? depth0.postContent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"postContent","hash":{},"data":data}) : helper)))
    + "\r\n          </p>\r\n          <button type=\"button\" class=\"view-comments-button\">See Comments</button>\r\n        </div>\r\n\r\n        <div class=\"comment-container hidden\">\r\n            <div class=\"comment\">\r\n              <p class=\"comment-text\">\r\n              </p>\r\n              <p class=\"date-time\">\r\n              </p>\r\n            </div>\r\n          <input type=\"text\" placeholder=\"Comment Something Here\" class=\"comment-input\" maxlength=\"100\">\r\n          <button type=\"button\" class=\"post-comment-button\">Comment</button>\r\n        </div>\r\n</article>";
},"useData":true});
})();