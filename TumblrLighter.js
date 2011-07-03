(function(){

  var posts = document.getElementById('posts');
  var step1, step2;
  var removing;
  var current;

  window.addEventListener('AutoPatchWork.append', function(){
    if (step1) return;
    step1 = true;
    var y = document.body.scrollTop;
    var children = posts.childNodes;
    removing = new Array();
    current = null;
    for (var i = 0; i < children.length; i++) {
      var post = children[i];
      if (post.id === 'new_post') continue;
      if (children.length - i > 50) {
        removing.push(post);
      } else {
        if (post.tagName == 'LI' && post.id.match('post_.+')) {
          current = post;
        }
        if (post.offsetTop > y) {
          break;
        }
      }
    }
  }, false);

  window.addEventListener('AutoPatchWork.pageloaded', function(){
    if (step2) return;
    step2 = true;
    window.setTimeout(function(){
      for (var i = 0; i < removing.length; i++) {
        if (current) {
          document.body.scrollTop = current.offsetTop - 10;
        }
        posts.removeChild(removing[i]);
      }
      if (current) {
        console.log('id of current element: ' + current.id);
        var newY = current.offsetTop - 10;
        console.log('scrollTop: ' + newY);
        document.body.scrollTop = newY;
      } else {
        console.log('no scroll');
      }
      step1 = false;
      step2 = false;
    }, 50);
  }, false);

})();
