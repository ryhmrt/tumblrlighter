(function(){
  var posts = document.getElementById('posts');
  window.addEventListener('AutoPatchWork.append', function(){
    var y = document.documentElement.scrollTop || document.body.scrollTop;
    var children = posts.childNodes;
    console.log('posts: ' + children.length);
    var removing = new Array();
    for (var i = 0; i < children.length; i++) {
      var post = children[i];
      if (post.id === 'new_post') continue;
      if (children.length - i > 100) {
        removing.push(children[i]);
      } else {
        break;
      }
    }
    for (var i = 0; i < removing.length; i++) {
      posts.removeChild(removing[i]);
    }
  }, false);
})();
