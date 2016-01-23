  (function(app) {
  'use strict';

  app.controller('HomeCtrl', function(blogData) {
    var home = this;

    blogData.forEach(function(post, i) {
      if (post.media.indexOf('/') === -1) {
        blogData[i].media = 'imgs/'+post.media;
      }
    });

    home.posts = blogData;
  });

})(angular.module('BlogApp'));
