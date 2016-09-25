jQuery(document).ready(function() {
    var successUrl = '';                        	        
    jQuery('[data-target="#download-guide-modal"]').on('click', function(e) {
        e.preventDefault();
        jQuery('#download-guide-modal [name^="MERGE"]').val('');
        jQuery('#download-guide-modal .form-feedback').html('');
        successUrl = jQuery(this).attr('href');
        jQuery(this).attr('href', '#');
        setTimeout(function() { jQuery(this).attr('href', successUrl); }, 2000);
    });
    
    jQuery('#download-guide-modal form input').on('focus', function() {
        jQuery('.form-feedback').html('');
    });
    
    jQuery('#download-guide-modal form').on('submit', function(e) {
        e.preventDefault();
        var error = false;
    
        jQuery(this).serialize().split('&').forEach(function(element) {
            if (element.match(/^MERGE[0-1]=$/)) {
                jQuery('.form-feedback').html(jQuery('#download-guide-modal .form-feedback').attr('data-empty-msg'));
                error = true;
            }
        });
    
        if (!error && !jQuery(this).attr('action').match(/^(http|https):\/\/(.+?)\/subscribe\/post-json\?u=(.+?){25}&id=(.+?){10}&c=\?$/)) {
            jQuery('.form-feedback').html(jQuery('#download-guide-modal .form-feedback').attr('data-mailchimp-notset'));
            error = true;
        }
    
        if (!error && !jQuery('[name="MERGE0"]').val().match(/^.+?@.+?\.[a-z]{2,10}$/)) {
            jQuery('.form-feedback').html(jQuery('#download-guide-modal .form-feedback').attr('data-incorrect-email'));
            error = true;
        }
    
        if (!error) {
            jQuery('#download-guide-modal form [type="submit"]').button('loading');
            jQuery('#download-guide-modal form [data-dismiss]').hide();
    
            jQuery.ajax({
                url: jQuery(this).attr('action'),
                method: jQuery(this).attr('method'),
                data: jQuery(this).serialize(),
                dataType: 'jsonp',
                contentType: "application/json; charset=utf-8",
                success: function(data){
                    jQuery('#download-guide-modal form [type="submit"]').button('reset');
                    if (data.result === 'success' || data.msg.match(/already subscribed/)) {
                        var feedbackIntervalCount = 3;
                        jQuery('#download-guide-modal .modal-footer').hide();
                        jQuery('#download-guide-modal .form-feedback').html(jQuery('#download-guide-modal .form-feedback').attr('data-thanks-msg') + feedbackIntervalCount + '.');
    
    
                        var feedbackInterval = setInterval(function() {
                            feedbackIntervalCount--;
                            jQuery('#download-guide-modal .form-feedback').html(jQuery('#download-guide-modal .form-feedback').attr('data-thanks-msg') + feedbackIntervalCount + '.');
                        }, 1000);
    
                        setTimeout(function() {
                            clearInterval(feedbackInterval);
                            jQuery('#download-guide-modal form [data-dismiss]').show();
                            jQuery('#download-guide-modal .modal-footer').show();
                            jQuery('#download-guide-modal [data-dismiss]').trigger('click');
                            jQuery(location).attr('href', successUrl);
                        }, 3000);
                    }
                    else {
                        jQuery('#download-guide-modal .form-feedback').html(jQuery('#download-guide-modal .form-feedback').attr('data-error-msg'));
                        jQuery('#download-guide-modal form [data-dismiss]').show();
                    }
                }
            });
        }
    });
});