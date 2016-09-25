[Lire cette documentation en français](https://github.com/numee/jquery-mailchimp-bs-modal-subscriber/blob/master/LISEZ-MOI.md)

# jQuery Mailchimp Bootstrap modal subscriber

![](https://cloud.githubusercontent.com/assets/6952638/18815744/77cbf162-8339-11e6-88b1-f36a5803dc46.png)

## This jQuery plugin allows your users to subscribe to your Mailchimp account through a simple Bootstrap modal. [See demo](https://numee.github.io/jquery-mailchimp-bs-modal-subscriber/).

## Getting started

**1.** Install jQuery library in your project : https://jquery.com/download/.

**2.** Install Bootstrap framework in your project (CSS and JS) : http://getbootstrap.com/getting-started/.

**3.** Add the following script in your project (less than 3 ko), after jQuery and Bootstrap scripts :
```html
<script src="https://cdn.rawgit.com/numee/jquery-mailchimp-bs-modal-subscriber/7c3a26baa6b495767e4bff447874f3457ab55c8e/jquery-mailchimp-bs-modal-subscriber.min.js"></script>
```

**4.** Get your Mailchimp list URL, and update it as seen below. It should looks like :

`http://user.usXX.list-manage.com/subscribe/post-json?u=XXXXXXXXXXXXXXXXXXXXXXXXX&id=XXXXXXXXXX&c=?`

![](https://cloud.githubusercontent.com/assets/6952638/18815183/1a09732a-8329-11e6-94c7-c51c2166c5b2.gif)

**5.** You can additionally add FontAwesome to your project in order to have a fancy processing icon : http://fontawesome.io/.

## Usage

**1.** Set a Bootstrap open modal link with the URL of the resource to which your users will be redirected after the subscription (for example, `https://www.google.com`). The data-target attribute must be `#download-guide-modal`.
```html
<a href="<!-- YOUR RESOURCE LINK HERE -->" class="bootstrap-button" data-toggle="modal" data-target="#download-guide-modal">Télécharger le document</a>
```


**2.** Then, set your Bootstrap modal, and replace the "action" attribute of the form tag with your Mailchimp list URL. The modal id must be `download-guide-modal`.
```html
<div class="modal fade" id="download-guide-modal" tabindex="-1" role="dialog" aria-labelledby="myDownloadGuideModal">
  <div class="modal-dialog" role="document">
  
    <form method="GET" action="<!-- YOUR MAILCHIMP LIST URL HERE -->" class="modal-content">
    
      <div class="modal-header">
        <h4 class="modal-title text-primary" id="myModalLabel">Inscrivez-vous pour télécharger le document !</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label class="text-muted">Adresse de messagerie</label>
          <input type="email" name="MERGE0" class="form-control" placeholder="adresse@domaine.com">
        </div>
        <div class="form-group">
          <label class="text-muted">Prénom</label>
          <input type="text" name="MERGE1" class="form-control" placeholder="John Doe">
        </div>
        <div class="form-feedback text-info" 
             data-empty-msg="Les champs ne peuvent être vides." 
             data-incorrect-email="Le format de l’adresse de messagerie est incorrect."
             data-thanks-msg="Merci ! Vous allez être redirigé dans "
             data-error-msg="Un problème est survenu, veuillez réessayer."
             data-mailchimp-notset="Le lien de la liste d’inscription Mailchimp est incorrect."
             data-mailchimp-notsecure="Il n'est pas possible de se connecter à la liste d’inscription Mailchimp depuis une connexion sécurisée (https)."></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Non merci.</button>
        <button type="submit" class="btn btn-primary" data-loading-text="<i class='fa fa-circle-o-notch fa-spin'></i> Préparation">C'est parti !</button>
      </div>
    </form>
  </div>
</div>
```

## Demo

See demo at : https://numee.github.io/jquery-mailchimp-bs-modal-subscriber/.

You can also directly download the demo files here : https://github.com/numee/jquery-mailchimp-bs-modal-subscriber/archive/gh-pages.zip.

## Troubleshooting

The Mailchimp subscription is not possible on HTTPS websites because Mailchimp lists URL don't support HTTPS protocol and cause [mixed content issues](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content).

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
