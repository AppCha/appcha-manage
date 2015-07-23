AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'Layout.Guest' });
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'Layout.Guest' });
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'Layout.Guest' });
Router.plugin('ensureSignedIn');
