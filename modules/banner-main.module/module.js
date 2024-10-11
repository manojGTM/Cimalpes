let formID = document.getElementById("formBlock").dataset.form;
hbspt.forms.create({
  region: "eu1",
  portalId: "139708350",
  formId: formID,
  target: '#formBlock',
  inlineMessage: document.getElementById("formBlock").dataset.inline,
  onFormReady: function($form) {
    //console.log('Form is ready.');
  },
  onFormSubmit: function($form) {
    //console.log('Form is being submitted...');
    sessionStorage.setItem('email', $("#formBlock").contents().find('input[name=email]')[0].value);

  },
  onFormSubmitted: function($form) {
    if (document.getElementById("formBlock").dataset.response === "redirect") {
    window.location.href = document.getElementById("formBlock").dataset.redirect + "?email=" + encodeURIComponent(sessionStorage.getItem('email'));
    }
    }
  }
);
