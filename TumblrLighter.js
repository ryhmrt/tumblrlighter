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
      console.log('i: ' + i);
      console.log('tagName: ' + post.tagName);
      console.log('id: ' + post.id);
      console.log('offsetTop: ' + post.offsetTop);
      console.log('offsetHeight: ' + post.offsetHeight);
      if (post.id === 'new_post') continue;
      if (children.length - i > 100) {
        removing.push(post);
      } else {
        console.log('tagName: ' + post.tagName);
        if (post.tagName == 'LI') {
          current = post;
        }
        if (post.offsetTop > y) {
          break;
        }
      }
    }
    for (var i = 0; i < removing.length; i++) {
      posts.removeChild(removing[i]);
    }
    if (current) {
      window.setTimeout(function(){
        var newY = current.offsetTop - 10;
        console.log('scrollTop: ' + newY);
        document.body.scrollTop = newY;
      }, 100);
    } else {
      console.log('no scroll');
    }
  }, false);
})();
