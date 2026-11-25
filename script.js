const downloadButton = document.querySelector('#download-qr');
const toast = document.querySelector('#toast');
const affiliateProducts = document.querySelector('#affiliate-products');

const productReferences = [
  [
    '1016604648',
    '23552060269',
    'Giấy vệ sinh treo tường TopGia 1280 tờ',
    'Giấy đa năng từ bột giấy thiên nhiên, thiết kế 4 lớp và tiện treo tường.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mvjuxf0m1eys11',
  ],
  [
    '449168894',
    '47269229169',
    'Khăn lau vệ sinh màn hình điện thoại',
    'Bộ khăn lau hỗ trợ làm sạch màn hình điện thoại và các bề mặt nhỏ.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-msrz02y1222p18',
  ],
  [
    '729014007',
    '17532975547',
    'Thùng giấy ăn rút TopGia cao cấp 4 lớp',
    'Giấy rút mềm mịn, dày dặn; có nhiều lựa chọn số lượng theo nhu cầu.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mvek1k5lz8qs41',
  ],
  [
    '37252407',
    '22735783796',
    'Nước tẩy trang mắt môi Maybelline 150ml',
    'Eye & Lip Makeup Remover chuyên làm sạch lớp trang điểm vùng mắt và môi.',
    'https://down-vn.img.susercontent.com/file/sg-11134201-8259w-mvviemaqzockb1',
  ],
  [
    '729014007',
    '46859620849',
    'Khăn giấy Pio TopGia đa năng cao cấp',
    'Khăn giấy dai, mềm mịn, 200 lần rút; có nhiều lựa chọn combo tiết kiệm.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mv5iar2s43r612',
  ],
  [
    '421677475',
    '10707015149',
    'Nước tẩy trang Garnier Micellar',
    'Làm sạch sâu dịu nhẹ cho nhiều loại da, có lựa chọn dung tích 400ml và 700ml.',
    'https://down-vn.img.susercontent.com/file/sg-11134201-825ac-mvv30opon2fb2e',
  ],
  [
    '37252407',
    '27481696313',
    'Son bóng Maybelline Lifter Gloss 5.4ml',
    'Son bóng chứa Hyaluronic Acid, tạo hiệu ứng đôi môi đầy đặn và căng mọng.',
    'https://down-vn.img.susercontent.com/file/sg-11134201-8258e-mvvielgu9z4ab8',
  ],
  [
    '987373161',
    '54100095040',
    'Combo 2 chai nước mắm Nam Ngư',
    'Combo hai chai với lựa chọn dung tích 750ml hoặc 900ml tùy phân loại.',
    'https://down-vn.img.susercontent.com/file/sg-11134201-82583-mvvfoix6mf4318',
  ],
  [
    '496552804',
    '43817703539',
    'Kẹp tóc 3 răng nhựa cứng',
    'Phụ kiện kẹp tóc nhỏ gọn bằng nhựa cứng, tiện dùng hằng ngày.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mnfuk7lezl6o6d',
  ],
  [
    '37252407',
    '29650093802',
    'Kem nền Maybelline Superstay Lumi Matte 30H',
    'Kem nền bắt sáng 35ml với lớp che phủ mỏng nhẹ và hiệu ứng lì sáng.',
    'https://down-vn.img.susercontent.com/file/sg-11134201-8259q-mvvield6quq285',
  ],
  [
    '64611946',
    '29754773499',
    'Set 5 gói mì tươi VIFON',
    'Mì tươi sợi dai 70g mỗi gói, có nhiều hương vị để lựa chọn.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mvwwm3ea756ued',
  ],
  [
    '9762338',
    '47519255819',
    'Combo 60 bao lì xì vuông mini',
    'Bộ bao lì xì mini nhiều mẫu, phù hợp chuẩn bị quà mừng dịp Tết.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mv9ripbn67szbe',
  ],
  [
    '1397276155',
    '29118467747',
    'Serum Vaseline Gluta-Hya 300ml',
    'Serum dưỡng thể hỗ trợ làn da sáng mịn; bao bì có thể thay đổi theo đợt hàng.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mvv81b6sucqtbe',
  ],
  [
    '1514216378',
    '43258950358',
    'Áo thun cổ trụ tàu ôm body BYJANE',
    'Áo thun dáng ôm bằng chất liệu thun mịn co giãn bốn chiều, có nhiều màu.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mrd8h6b532f446',
  ],
  [
    '438905996',
    '56170117486',
    'Combo bánh Karo và bánh que phủ socola',
    'Combo bánh trứng tươi chà bông cùng bánh que phủ socola hoặc vị dâu.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mvlm6f20a875d8',
  ],
  [
    '273650958',
    '6356903411',
    'Bột cacao nguyên chất DK Harvest',
    'Bột cacao vị đậm, kết cấu mịn; có túi 100g, 200g và 500g.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mv5qhka1sqva0f',
  ],
  [
    '729014007',
    '46765221982',
    'Cây chà sàn đa năng 3 trong 1 TopGia',
    'Đầu chà 22cm xoay 180 độ, dùng cọ sàn, gạt nước và làm sạch khe hẹp.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mveq902wej2a87',
  ],
  [
    '502146001',
    '41784898690',
    'Nước giặt đồ lót sinh học TopGia 200ml',
    'Chai vòi nhấn, hương thơm thanh mát; dùng giặt đồ nội y. Không dùng trực tiếp trên cơ thể hoặc vùng kín.',
    'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mvl62s6nepl539',
  ],
];

function createAffiliateUrl(shopId, productId) {
  const productUrl = encodeURIComponent(
    `https://shopee.vn/product/${shopId}/${productId}`,
  );

  return `https://s.shopee.vn/an_redir?origin_link=${productUrl}`
    + '&sm=fb_partner&affiliate_id=17314220210';
}

function renderAffiliateProducts() {
  const cards = productReferences.map((product, index) => {
    const [
      shopId,
      productId,
      productName,
      productDescription,
      productImage,
    ] = product;
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

    const imageMarkup = productImage
      ? `<img class="product-card__image" src="${productImage}"
          alt="${productName}" loading="lazy" referrerpolicy="no-referrer">`
      : `<span class="product-card__icon" aria-hidden="true">${number}</span>`;

    link.innerHTML = `
      ${imageMarkup}
      <strong>${productName ?? `Sản phẩm gợi ý ${number}`}</strong>
      <p>${productDescription
        ?? 'Xem mô tả, phân loại, giá bán và đánh giá mới nhất trên Shopee.'}</p>
      <small>Xem chi tiết trên Shopee</small>
    `;

    const image = link.querySelector('.product-card__image');
    image?.addEventListener('error', () => {
      const fallback = document.createElement('span');
      fallback.className = 'product-card__icon';
      fallback.setAttribute('aria-hidden', 'true');
      fallback.textContent = number;
      image.replaceWith(fallback);
    });
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
