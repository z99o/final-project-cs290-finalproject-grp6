(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['postTemplate'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.commentTemplate,depth0,{"name":"commentTemplate","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"post\">\r\n        <button type=\"button\" class=\"hide-post-button\"><i class=\"fas fa-chevron-up\"></i></button>\r\n        <div class=\"post-content visible\">\r\n          <p class = postId>"
    + alias4(((helper = (helper = helpers.postId || (depth0 != null ? depth0.postId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postId","hash":{},"data":data}) : helper)))
    + "</p>\r\n          <p class=\"post-text\">\r\n            "
    + alias4(((helper = (helper = helpers.postContent || (depth0 != null ? depth0.postContent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postContent","hash":{},"data":data}) : helper)))
    + "\r\n          </p>\r\n          <button type=\"button\" class=\"view-comments-button\">See Comments</button>\r\n        </div>\r\n\r\n        <div class=\"comment-container hidden\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          <input type=\"text\" placeholder=\"Comment Something Here\" class=\"comment-input\" maxlength=\"100\">\r\n          <button type=\"button\" class=\"post-comment-button\">Comment</button>\r\n        </div>\r\n      </article>";
},"usePartial":true,"useData":true});
})();