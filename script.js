
document.getElementById("openWhatsapp").onclick = function(){
  alert("Redirecting to WhatsApp for detailed quotation");
  window.open("https://wa.me/917674095888","_blank");
};

document.getElementById("leadForm").onsubmit = function(e){
  e.preventDefault();
  alert("Thank you! Our team will contact you shortly.");
};
