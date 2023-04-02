exports.policy = (req, res ) => {
    res.render('policy', {title: 'Privacy Policy'});
}

exports.terms = (req, res ) => {
    res.render('terms', {title: 'Terms & Conditions'});
}
exports.contacts =(req, res) => {
    res.render('contacts', {title: 'Contacts'});
}