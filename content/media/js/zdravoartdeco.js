$(function() {
  $('img').filter(function(){
    return /(-resized\.(jpg|jpeg|png)$)/.test(this.src);
  }).each(function(){
    var img_src = $(this).attr('src');
    img_src = img_src.replace(/-resized\./, ".");
    
    var parent = $(this).wrap('<a href="' + img_src + '"></a>').parent()
    $(parent).lightBox();
  })
});