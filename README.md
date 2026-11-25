# Hen Yêu

Landing page quyên góp đơn giản, responsive và có thể deploy trực tiếp lên
Vercel.

## Chạy thử trên máy

Không cần cài dependency. Mở `index.html` trực tiếp hoặc dùng một static server:

```bash
python3 -m http.server 3000
```

Sau đó truy cập <http://localhost:3000>.

## Deploy lên Vercel

1. Push repository này lên GitHub.
2. Mở <https://vercel.com/new> và chọn repository `HenYeu`.
3. Giữ nguyên Framework Preset là `Other`, không cần Build Command.
4. Nhấn **Deploy**.

Bạn cũng có thể deploy bằng Vercel CLI:

```bash
npx vercel
```
