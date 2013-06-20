Repos = new Meteor.Collection("repos");
GitGrups = new Meteor.Collection("gitgrups");

// get a users repo
// create gitgrup for repo

if (Meteor.isClient) {

  var getUserRepo = function(repo_url) {

    var repo_link = repo_url.split('/');
    repo = repo_link[repo_link.length - 1];
    user = repo_link[repo_link.length - 2];
    console.log(repo);
    console.log(user);

  }

}