var emailsUnicos = function(emails) {
    return Array.from(new Set(emails.map(email => {
        var splitted = email.split("@");
        var name = splitted[0].replace(/\./g, "").replace(/\+.*/,'');
        var domain = splitted [1];
        return name + '@' + domain;
    })));
 };