(function(){
  var posts = document.getElementById('posts');
  window.addEventListener('AutoPatchWork.append', function(){
    var y = document.body.scrollTop;
    var children = posts.childNodes;
    console.log('posts: ' + children.length);
    var removing = new Array();
    var current;
    for (var i = 0; i < children.length; i++) {
      var post = children[i];
      if (post.id === 'new_post') continue;
      if (children.length - i > 100) {
        removing.push(post);
        console.log('tagName: ' + post.tagName);
        console.log('id: ' + post.id);
        console.log('offsetTop: ' + post.offsetTop);
        console.log('offsetHeight: ' + post.offsetHeight);
      } else {
        if (!current && post.offsetTop > y) {
          current = post;
        }
      }
    }
    for (var i = 0; i < removing.length; i++) {
      posts.removeChild(removing[i]);
    }
    if (current) {
      var newY = current.offsetTop - 10;
      console.log('scrollTop: ' + newY);
      document.body.scrollTop = newY;
    }
  }, false);
})();
