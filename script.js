const tree = document.getElementById("tree");
const scene = document.getElementById("scene");
const message = document.getElementById("message");
const photo = document.getElementById("photo");
const photoUrls = [
  "https://lh3.googleusercontent.com/d/1JxLSYt4kFaIZSCS9pwjOu6S4GOXffiSC/view?usp=drive_link",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg"
];

let count = 0;
const messages = [
  "ありがとう 고마워요.",
  "いつも支えてくれて 항상 잡아주고",
  "そばにいてくれて 곁에 있어줘서",
  "ハウンの笑顔が大好き  하은이의 웃는얼굴이 너무 좋아요",
  "出会えてよかった 만나서 다행입니다",
  "一緒に過ごせて幸せ 함께 할 수 있어서 행복합니다",
  "何度も救われた 몇번이나 구원을 받았습니다",
  "大切な存在 소중한 존재",
  "愛してるこれからもよろしくね💖 사랑해 앞으로도 잘부탁해요💖",
  "🌸満開のありがとう🌸 만발한 감사합니다🌸"
];

function generatePetalsInEllipse(cx, cy, rx = 180, ry = 80) {
  for (let i = 0; i < 6; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const radiusRatio = Math.sqrt(Math.random()); // 均等分布
    const x = cx + rx * radiusRatio * Math.cos(angle);
    const y = cy + ry * radiusRatio * Math.sin(angle);

    const fallingPetal = document.createElement("img");
    fallingPetal.src = "https://lh3.googleusercontent.com/d/1jAzS2ZDZkfpsM-ogsVzD3GajNrtIDW2W";
    fallingPetal.className = "static-petal";
    fallingPetal.style.left = `${x}px`;
    fallingPetal.style.top = `${y}px`;
    scene.appendChild(fallingPetal);

    // 固定表示
    const fixed = fallingPetal.cloneNode(true);
    fixed.style.transition = "none";
    fixed.style.transform = "none";
    scene.appendChild(fixed);

    // アニメーション
    setTimeout(() => {
      const dx = (Math.random() - 0.5) * 350;
      const dy = 400 + Math.random() * 150;
      const rotate = Math.random() * 180 - 90;
      fallingPetal.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotate}deg)`;
      fallingPetal.style.opacity = 0;
    }, 10);

    setTimeout(() => {
      fallingPetal.remove();
    }, 4000);
  }
}


// クリックイベント：花びら生成 + メッセージ更新
tree.addEventListener("click", () => {
  if (count >= messages.length) return;

  const rect = tree.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2-20;
  const centerY = rect.top + rect.height / 3-35;

  generatePetalsInEllipse(centerX, centerY); // ← 楕円バージョン

  message.textContent = messages[count];
  count++;

  photoIndex = (photoIndex + 1) % photoUrls.length;
  photo.style.opacity = 0;
  setTimeout(() => {
    photo.src = photoUrls[photoIndex];
    photo.style.opacity = 1;
  }, 200);
});