window.addEvent('domready', function() {
    $$('.results-table tr').each(function(row, index) {
        if (index === 0) return;
        var lightboxLink = row.getElement('a[rel^=lightbox]');
        if (lightboxLink) {
            row.addClass('has-image');
            row.addEvent('click', function(e) {
                e.preventDefault();
                lightboxLink.click();
            });
        }
    });
});