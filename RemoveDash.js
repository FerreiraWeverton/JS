jQuery(document).ready(function(){
var count = jQuery(".select2-results__options").children().length;
for (var i = 0; i < count; i++) {
   jQuery(".select2-results__options").html(function (i, html) {
    return html.replace(/-&nbsp;/, '');
});
}
});