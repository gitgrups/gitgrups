var creds = '';

if (Meteor.isClient) {

  Meteor.Router.add({
    '/': 'home',
    '/grups': 'grups',
  });

  Template.splash.events({

    'submit .form-inline' : function (e) {
      e.preventDefault();
      var repo_url = $('.input-xxlarge').val();
      var git_re = /\.git$/;
      getUserRepo(repo_url.replace(git_re, ""));
    }

  });

  Template.addrepo.events({

    'submit .form-horizontal' : function (e) {
      e.preventDefault();
      var repo_url = $('.input-xxlarge').val();
      getUserRepo(repo_url);
    }

  });

  var getUserRepo = function(repo_url) {

    var repo_link = repo_url.split('/');

    repo = repo_link[repo_link.length - 1];
    user = repo_link[repo_link.length - 2];

    var api_link = 'https://api.github.com/repos/' + user + '/' + repo + '?' + creds;

    Meteor.http.get(api_link, {
      contentType: 'application/json',
      dataType: 'jsonp'
    }, function (err, res) {
      if (err) throw 'callback failed' ;
      console.log(res.data);
      console.log(res.data.archive_url);
    });
  };

};

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
