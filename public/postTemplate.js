(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['postTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.the,(depth0 != null ? depth0.database : depth0),{"name":"the","data":data,"indent":"              ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<article class=\"post\">\r\n        <div class=\"post-content\">\r\n          <p class=\"post-text\">\r\n            "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.postContainer : depth0)) != null ? stack1.postText : stack1), depth0))
    + "\r\n          </p>\r\n          <button type=\"button\" class=\"view-comments-button\">See Comments</button>\r\n        </div>\r\n\r\n        <div class=\"comment-container hidden\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.postContainer : depth0)) != null ? stack1.comment : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\r\n          <input type=\"text\" placeholder=\"Comment Something Here\" class=\"comment-input\" maxlength=\"100\">\r\n          <button type=\"button\" class=\"post-comment-button\">Comment</button>\r\n        </div>\r\n</article>";
},"usePartial":true,"useData":true});
})();