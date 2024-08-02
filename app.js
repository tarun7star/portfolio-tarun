var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for (tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links")
    document.getElementById(tabname).classList.add("active-tab")

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx9Xs2S1EQVbggHZ9IcM3BHq_tXBFdc-te36jwZz0SGF2_S14HAfeEmLV3FTU-n1rTc/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })