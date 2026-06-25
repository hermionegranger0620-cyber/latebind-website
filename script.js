function showMember(id) {
  document.getElementById(id).classList.remove('hidden');
}

function closeDetail(id) {
  document.getElementById(id).classList.add('hidden');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

window.onscroll = function() {
  const btn = document.getElementById('backToTop');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}