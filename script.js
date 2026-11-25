const downloadButton = document.querySelector('#download-qr');
const toast = document.querySelector('#toast');

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
