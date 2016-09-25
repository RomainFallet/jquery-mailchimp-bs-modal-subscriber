jQuery(document).ready(function() {
    jQuery('.mailchimp-bs-modal-button').on('click', function(e) {
        e.preventDefault();
        jQuery(jQuery(this).attr('data-target')).find('[name^="MERGE"]').val('');
        jQuery(jQuery(this).attr('data-target')).find('.form-feedback').html('');
        jQuery(this).attr('data-success-url', jQuery(this).attr('href'));
        jQuery(this).attr('href', '#');
        setTimeout(function() { jQuery(this).attr('href', jQuery(this).attr('data-success-url')); }, 2000);
    });
    
    jQuery('.mailchimp-bs-modal input').on('focus', function() {
        jQuery(this).parent('.mailchimp-bs-modal').find('.form-feedback').html('');
    });
    
    jQuery('.mailchimp-bs-modal form').on('submit', function(e) {
        e.preventDefault();
        var error = false;
        var target = this;
    
        jQuery(target).serialize().split('&').forEach(function(element) {
            if (element.match(/^MERGE[0-1]=$/)) {
                jQuery(target).find('.form-feedback').html(jQuery(target).find('.form-feedback').attr('data-empty-msg'));
                error = true;
            }
        });
    
        if (!error && !jQuery(target).attr('action').match(/^http:\/\/(.+?)\/subscribe\/post-json\?u=(.+?){25}&id=(.+?){10}&c=\?$/)) {
            jQuery(target).find('.form-feedback').html(jQuery(target).find('.form-feedback').attr('data-mailchimp-notset'));
            error = true;
        }
    
        if (!error && !jQuery(target).find('[name="MERGE0"]').val().match(/^.+?@.+?\.[a-z]{2,10}$/)) {
            jQuery(target).find('.form-feedback').html(jQuery(target).find('.form-feedback').attr('data-incorrect-email'));
            error = true;
        }
    
        if (!error && jQuery(location).attr('protocol') === 'https:') {
            jQuery(target).find('.form-feedback').html(jQuery(target).find('.form-feedback').attr('data-mailchimp-notsecure'));
            error = true;
        }
    
        if (!error) {
            jQuery(target).find('[type="submit"]').button('loading');
            jQuery(target).find('[data-dismiss]').hide();
    
            jQuery.ajax({
                url: jQuery(target).attr('action'),
                method: jQuery(target).attr('method'),
                data: jQuery(target).serialize(),
                dataType: 'jsonp',
                contentType: "application/json; charset=utf-8",
                success: function(data){
                    jQuery(target).find('[type="submit"]').button('reset');
                    if (data.result === 'success' || data.msg.match(/already subscribed/)) {
                        var feedbackIntervalCount = 3;
                        jQuery(target).find('.modal-footer').hide();
                        jQuery(target).find('.form-feedback').html(jQuery(target).find('.form-feedback').attr('data-thanks-msg') + feedbackIntervalCount + '.');
    
    
                        var feedbackInterval = setInterval(function() {
                            feedbackIntervalCount--;
                            jQuery(target).find('.form-feedback').html(jQuery(target).find('.form-feedback').attr('data-thanks-msg') + feedbackIntervalCount + '.');
                        }, 1000);
    
                        setTimeout(function() {
                            clearInterval(feedbackInterval);
                            jQuery(target).find('[data-dismiss]').show();
                            jQuery(target).find('.modal-footer').show();
                            jQuery(target).find('[data-dismiss]').trigger('click');
                            jQuery(location).attr('href', jQuery('[data-target="#' + jQuery(target).parents('.mailchimp-bs-modal').attr('id') +  '"]').attr('data-success-url'));
                        }, 3000);
                    }
                    else {
                        jQuery(target).find('.form-feedback').html(jQuery(target).find('.form-feedback').attr('data-error-msg'));
                        jQuery(target).find('[data-dismiss]').show();
                    }
                }
            });
        }
    });
});