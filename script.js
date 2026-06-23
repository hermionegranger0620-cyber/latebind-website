function showMember(memberId) {
  const detail = document.getElementById(memberId);
  if (detail) {
    detail.classList.remove('hidden');
    detail.scrollIntoView({ behavior: 'smooth' });
  }
}

function closeDetail(memberId) {
  const detail = document.getElementById(memberId);
  if (detail) {
    detail.classList.add('hidden');
  }
}