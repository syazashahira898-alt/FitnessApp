// Registration form validation + modal display
document.getElementById("regForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const program = document.getElementById("program").value;

  if(!name || !email || !program){
    alert("Please fill in all fields!");
    return;
  }

  const modal = new bootstrap.Modal(document.getElementById("successModal"));
  modal.show();
  this.reset();
});