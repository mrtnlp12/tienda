const deleteProduct = (btn) => {
  const productId = btn.parentNode.querySelector('[name=productId]').value;
  const csrfToken = btn.parentNode.querySelector('[name=_csrf]').value;

  const productElement = btn.closest('article');

  console.log(productId);
  console.log(csrfToken);
  console.log(btn.closest('p'));

  fetch(`/admin/product/${productId}`, {
    method: 'DELETE',
    headers: {
      'csrf-token': csrfToken,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      productElement.remove();
    })
    .catch((err) => console.log(err));
};
