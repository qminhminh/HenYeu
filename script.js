const downloadButton = document.querySelector('#download-qr');
const toast = document.querySelector('#toast');
const affiliateProducts = document.querySelector('#affiliate-products');

const productReferences = [
  ['1016604648', '23552060269'],
  ['449168894', '47269229169'],
  ['729014007', '17532975547'],
  ['37252407', '22735783796'],
  ['729014007', '46859620849'],
  ['421677475', '10707015149'],
  ['37252407', '27481696313'],
  ['987373161', '54100095040'],
  ['496552804', '43817703539'],
  ['37252407', '29650093802'],
  ['64611946', '29754773499'],
  ['9762338', '47519255819'],
  ['1397276155', '29118467747'],
  ['1514216378', '43258950358'],
  ['438905996', '56170117486'],
  ['273650958', '6356903411'],
  ['729014007', '46765221982'],
];

function createAffiliateUrl(shopId, productId) {
  const productUrl = encodeURIComponent(
    `https://shopee.vn/product/${shopId}/${productId}`,
  );

  return `https://s.shopee.vn/an_redir?origin_link=${productUrl}`
    + '&sm=fb_partner&affiliate_id=17314220210';
}

function renderAffiliateProducts() {
  const cards = productReferences.map(([shopId, productId], index) => {
    const number = String(index + 1).padStart(2, '0');
    const link = document.createElement('a');
    link.className = 'product-card';
    link.href = createAffiliateUrl(shopId, productId);
    link.target = '_blank';
    link.rel = 'sponsored noopener noreferrer';
    link.setAttribute(
      'aria-label',
      `Mở sản phẩm gợi ý ${number} trên Shopee`,
    );

    link.innerHTML = `
      <span class="product-card__icon" aria-hidden="true">${number}</span>
      <strong>Sản phẩm gợi ý ${number}</strong>
      <p>Xem mô tả, phân loại, giá bán và đánh giá mới nhất trên Shopee.</p>
      <small>Xem chi tiết trên Shopee</small>
    `;
    return link;
  });

  affiliateProducts.replaceChildren(...cards);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

downloadButton.addEventListener('click', async () => {
  try {
    const response = await fetch('assets/hen-yeu-qr.jpg');
    if (!response.ok) {
      throw new Error('Không thể tải ảnh QR.');
    }

    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'hen-yeu-qr.jpg';
    link.click();
    URL.revokeObjectURL(imageUrl);
    showToast('Đã tải mã QR về thiết bị.');
  } catch (error) {
    showToast('Không thể tải mã QR. Vui lòng thử lại.');
  }
});

renderAffiliateProducts();
