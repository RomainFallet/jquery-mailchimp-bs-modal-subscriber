[Read this documentation in english](https://github.com/numee/jquery-mailchimp-bs-modal-subscriber/blob/master/README.md)

# jQuery Mailchimp Bootstrap modal subscriber

![](https://cloud.githubusercontent.com/assets/6952638/18815744/77cbf162-8339-11e6-88b1-f36a5803dc46.png)

## Ce plugin jQuery permet à vos utilisateurs de s’inscrire à votre liste d’envoi Mailchimp via une simple fenêtre modale Bootstrap. [Voir la demo](https://numee.github.io/jquery-mailchimp-bs-modal-subscriber/).

## Pour démarrer

**1.** Installez la bibliothèque jQuery dans votre projet : https://jquery.com/download/.

**2.** Installez le framework Bootstrap dans votre projet (CSS et JS) : http://getbootstrap.com/getting-started/.

**3.** Ajoutez le script suivant dans votre projet (il pèse moins de 3 ko), après les scripts de jQuery et Bootstrap :
```html
<script src="https://cdn.rawgit.com/numee/jquery-mailchimp-bs-modal-subscriber/2434edd7e24e73499f5ea3007f9ebda379f58bbd/jquery-mailchimp-bs-modal-subscriber.min.js"></script>
```

**4.** Récupérez l’URL d’inscription de votre liste Mailchimp et modifiez-la comme indiqué ci-dessous. Elle devra ressembler à :

`http://user.usXX.list-manage.com/subscribe/post-json?u=XXXXXXXXXXXXXXXXXXXXXXXXX&id=XXXXXXXXXX&c=?`

![](https://cloud.githubusercontent.com/assets/6952638/18815183/1a09732a-8329-11e6-94c7-c51c2166c5b2.gif)

**5.** Vous pouvez également ajouter FontAwesome pour profiter d’une jolie icône de chargement : http://fontawesome.io/.

## Utilisation

**1.** Définissez le lien qui servira à ouvrir votre fenêtre modale Boostrap avec en URL la ressource vers laquelle vos utilisateurs seront redirigés après l’inscription (par exemple, `https://www.google.fr`). La valeur de l’attribut data-target doit être `#download-guide-modal`.
```html
<a href="<!-- LE LIEN VERS VOTRE RESSOURCE -->" class="bootstrap-button" data-toggle="modal" data-target="#download-guide-modal">Télécharger le document</a>
```


**2.** Enfin, définissez votre fenêtre modale Bootstrap, et remplacez la valeur de l’attribut « action » de la balise « form » avec l’URL d’inscription de votre liste Mailchimp récupérée précédemment. L'ID de votre fenêtre modale doit être `download-guide-modal`.
```html
<div class="modal fade" id="download-guide-modal" tabindex="-1" role="dialog" aria-labelledby="myDownloadGuideModal">
  <div class="modal-dialog" role="document">
  
    <form method="GET" action="<!-- LE LIEN VERS VOTRE LISTE MAILCHIMP -->" class="modal-content">
    
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

Voir la démo : https://numee.github.io/jquery-mailchimp-bs-modal-subscriber/.

Vous pouvez également télécharger directement le code de la démo ici : https://github.com/numee/jquery-mailchimp-bs-modal-subscriber/archive/gh-pages.zip.

## Problème(s) existant(s)

L’inscription à la liste Mailchimp est impossible sur les sites utilisant le protocole HTTPS, les URL des listes Mailchimp ne supportant pas ce protocole, cela provoque des [mixed content issues](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content).

## Licence

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />Ce(tte) œuvre est mise à disposition selon les termes de la <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Licence Creative Commons Attribution -  Partage dans les Mêmes Conditions 4.0 International</a>.
