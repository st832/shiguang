(function() {
  'use strict';

  const app = document.getElementById('app');
  const footer = document.getElementById('global-footer');
  let currentSceneIndex = 0;

  // 全局音频对象（低音量、单曲循环）
  const bgm = new Audio('assets/audio/娃娃诗.mp3');
  bgm.loop = true;
  bgm.volume = 0.25;
  bgm.addEventListener('error', (e) => {
    console.error('音频加载失败:', e);
  });

  // 初始化
  function init() {
    renderScene(0);
  }

  // 渲染指定场景
  function renderScene(index) {
    currentSceneIndex = index;
    const scene = SCENES[index];
    if (!scene) return;

    app.innerHTML = '';

    switch (scene.type) {
      case 'cover':
        renderCover(scene);
        break;
      case 'question':
        renderQuestion(scene);
        break;
      case 'info':
        renderInfo(scene);
        break;
      case 'lottery':
        renderLottery(scene);
        break;
      case 'ending':
        renderEnding(scene);
        break;
    }

    // 非封面页显示底部版权和迷你播放器
    if (scene.type !== 'cover') {
      footer.classList.remove('hidden');
      renderMiniPlayer();
    } else {
      footer.classList.add('hidden');
      removeMiniPlayer();
    }

    // 滚动到顶部
    window.scrollTo(0, 0);
  }

  // 迷你播放器
  function renderMiniPlayer() {
    if (document.getElementById('mini-player')) return;

    const wrap = document.createElement('div');
    wrap.id = 'mini-player';
    wrap.className = 'mini-player';

    const info = document.createElement('span');
    info.className = 'mini-player-info';
    info.textContent = '正在播放：娃娃诗';

    const toggle = document.createElement('button');
    toggle.className = 'mini-player-btn';
    toggle.textContent = '暂停';
    toggle.onclick = () => {
      if (bgm.paused) {
        bgm.play().catch(() => {});
        toggle.textContent = '暂停';
      } else {
        bgm.pause();
        toggle.textContent = '播放';
      }
    };

    wrap.appendChild(info);
    wrap.appendChild(toggle);
    document.body.appendChild(wrap);
  }

  function removeMiniPlayer() {
    const player = document.getElementById('mini-player');
    if (player) player.remove();
  }

  // 封面页
  function renderCover(scene) {
    const section = document.createElement('section');
    section.className = 'page cover-page';

    const content = document.createElement('div');
    content.className = 'cover-content';

    const titleWrap = document.createElement('div');
    titleWrap.className = 'cover-title-wrap';

    const title = document.createElement('h1');
    title.textContent = scene.title;

    if (scene.subtitle) {
      const subtitle = document.createElement('p');
      subtitle.className = 'cover-subtitle';
      subtitle.textContent = scene.subtitle;
      titleWrap.appendChild(title);
      titleWrap.appendChild(subtitle);
    } else {
      titleWrap.appendChild(title);
    }

    const textWrap = document.createElement('div');
    textWrap.className = 'cover-text';
    scene.lines.forEach(line => {
      const p = document.createElement('p');
      if (line === '') {
        p.className = 'blank-line';
      }
      p.textContent = line;
      textWrap.appendChild(p);
    });

    const btn = document.createElement('button');
    btn.className = 'btn-primary';
    btn.textContent = scene.btnText;
    btn.onclick = () => {
      bgm.play().catch(() => {}); // 用户交互后播放，忽略自动播放策略错误
      renderScene(currentSceneIndex + 1);
    };

    content.appendChild(titleWrap);
    content.appendChild(textWrap);
    content.appendChild(btn);
    section.appendChild(content);
    app.appendChild(section);
  }

  // 问答页（只显示问题和选项按钮）
  function renderQuestion(scene) {
    const section = document.createElement('section');
    section.className = 'page question-page';

    const progress = document.createElement('div');
    progress.className = 'progress-bar';
    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    const pct = ((currentSceneIndex) / 7) * 100;
    progressFill.style.width = pct + '%';
    progress.appendChild(progressFill);

    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = scene.text;

    const optionsWrap = document.createElement('div');
    optionsWrap.className = 'options-wrap';

    scene.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.text;
      btn.onclick = () => renderOptionResult(opt.image, opt.text);
      optionsWrap.appendChild(btn);
    });

    // 提前缓存当前题选项图，减少点击后等待
    scene.options.forEach(opt => {
      const preloadImg = new Image();
      preloadImg.src = opt.image;
    });

    section.appendChild(progress);
    section.appendChild(questionText);
    section.appendChild(optionsWrap);
    app.appendChild(section);
  }

  // 选项结果页（只显示全图 + 继续按钮）
  function renderOptionResult(imageSrc, optionText) {
    app.innerHTML = '';
    window.scrollTo(0, 0);

    const section = document.createElement('section');
    section.className = 'page option-result-page';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = '选项配图';
    img.className = 'option-result-image';
    img.onerror = function() { this.style.display = 'none'; };

    const btn = document.createElement('button');
    btn.className = 'btn-primary';
    btn.textContent = '继续';
    btn.onclick = () => renderScene(currentSceneIndex + 1);

    const hint = document.createElement('p');
    hint.className = 'loading-hint';
    hint.textContent = '图片加载慢，请等一等';

    section.appendChild(img);
    section.appendChild(btn);
    section.appendChild(hint);
    app.appendChild(section);
  }

  // 信息页（资金流向透明）
  function renderInfo(scene) {
    const section = document.createElement('section');
    section.className = 'page info-page';

    const img = document.createElement('img');
    img.src = scene.image;
    img.alt = '资金流向';
    img.className = 'info-image';
    img.onerror = function() { this.style.display = 'none'; };

    // 图片下方小字
    const imgCaption = document.createElement('p');
    imgCaption.className = 'info-image-caption';
    imgCaption.textContent = scene.subText || '';

    const textWrap = document.createElement('div');
    textWrap.className = 'info-text';
    scene.lines.forEach(line => {
      const p = document.createElement('p');
      p.textContent = line;
      textWrap.appendChild(p);
    });

    // 月捐二维码区域
    const qrSection = document.createElement('div');
    qrSection.className = 'info-qr-section';

    const qrWrap = document.createElement('div');
    qrWrap.className = 'info-qr-wrap';
    const qrImg = document.createElement('img');
    qrImg.className = 'info-qr-image';
    qrImg.src = scene.qrCode || '';
    qrImg.alt = '月捐二维码';
    qrImg.onerror = function() { this.style.display = 'none'; };
    qrWrap.appendChild(qrImg);

    const qrText = document.createElement('p');
    qrText.className = 'info-qr-text';
    qrText.textContent = scene.qrLabel || '扫码了解月捐详情';

    qrSection.appendChild(qrWrap);
    qrSection.appendChild(qrText);

    section.appendChild(img);
    section.appendChild(imgCaption);
    section.appendChild(textWrap);
    section.appendChild(qrSection);

    const btn = document.createElement('button');
    btn.className = 'btn-primary';
    btn.textContent = scene.btnText;
    btn.onclick = () => renderScene(currentSceneIndex + 1);

    section.appendChild(btn);
    app.appendChild(section);
  }

  // 抽奖页
  function renderLottery(scene) {
    const section = document.createElement('section');
    section.className = 'page lottery-page';

    if (scene.title) {
      const title = document.createElement('h2');
      title.className = 'lottery-title';
      title.textContent = scene.title;
      section.appendChild(title);
    }

    const textWrap = document.createElement('div');
    textWrap.className = 'lottery-text';
    scene.lines.forEach(line => {
      const p = document.createElement('p');
      p.textContent = line;
      textWrap.appendChild(p);
    });
    section.appendChild(textWrap);

    // 明信片 + 二维码组合区域（抽奖后显示）
    const resultWrap = document.createElement('div');
    resultWrap.className = 'lottery-result hidden';

    // 明信片容器
    const cardWrap = document.createElement('div');
    cardWrap.className = 'postcard-wrap';
    const cardImg = document.createElement('img');
    cardImg.className = 'postcard-image';
    cardImg.alt = '孩子手写明信片';
    cardImg.onerror = function() { this.style.display = 'none'; };
    cardWrap.appendChild(cardImg);

    // 二维码 + 引导文字 横向排列
    const footerWrap = document.createElement('div');
    footerWrap.className = 'lottery-footer';

    const qrWrap = document.createElement('div');
    qrWrap.className = 'qr-wrap';
    const qrImg = document.createElement('img');
    qrImg.className = 'qr-image';
    qrImg.src = scene.qrCode || '';
    qrImg.alt = '月捐二维码';
    qrImg.onerror = function() { this.style.display = 'none'; };
    qrWrap.appendChild(qrImg);

    const footerText = document.createElement('div');
    footerText.className = 'lottery-footer-text';

    const shareLines = Array.isArray(scene.shareText)
      ? scene.shareText
      : [scene.shareText || '欢迎截图保存分享，也可扫码了解月捐'];
    shareLines.forEach(line => {
      const p = document.createElement('p');
      p.className = 'scan-text';
      p.textContent = line;
      footerText.appendChild(p);
    });

    footerWrap.appendChild(qrWrap);
    footerWrap.appendChild(footerText);

    resultWrap.appendChild(cardWrap);
    resultWrap.appendChild(footerWrap);
    section.appendChild(resultWrap);

    // 按钮区域
    const btnWrap = document.createElement('div');
    btnWrap.className = 'lottery-btn-wrap';

    const drawBtn = document.createElement('button');
    drawBtn.className = 'btn-primary btn-draw';
    drawBtn.textContent = scene.btnText;

    // "我也写一张回信"按钮 — 直接在新窗口打开问卷
    const continueBtn = document.createElement('a');
    continueBtn.href = scene.formUrl;
    continueBtn.target = '_blank';
    continueBtn.className = 'btn-secondary btn-continue hidden';
    continueBtn.textContent = scene.continueBtn;

    // 按钮下方小字提示
    const btnHint = document.createElement('p');
    btnHint.className = 'btn-hint';
    btnHint.textContent = '点击跳转上传链接';
    btnHint.style.display = 'none';

    const skipBtn = document.createElement('button');
    skipBtn.className = 'btn-text btn-skip hidden';
    skipBtn.textContent = scene.skipBtn;

    drawBtn.onclick = () => {
      const result = drawPostcard();
      cardImg.src = result.image;
      resultWrap.classList.remove('hidden');
      textWrap.classList.add('hidden');
      drawBtn.classList.add('hidden');
      continueBtn.classList.remove('hidden');
      btnHint.style.display = 'block';
      skipBtn.classList.remove('hidden');
    };

    skipBtn.onclick = () => renderScene(0); // 回到首页

    btnWrap.appendChild(drawBtn);
    btnWrap.appendChild(continueBtn);
    btnWrap.appendChild(btnHint);
    btnWrap.appendChild(skipBtn);
    section.appendChild(btnWrap);
    app.appendChild(section);
  }

  // 结尾页（故事结尾）
  function renderEnding(scene) {
    const section = document.createElement('section');
    section.className = 'page ending-page';

    const img = document.createElement('img');
    img.src = scene.image;
    img.alt = '结尾';
    img.className = 'ending-image';
    img.onerror = function() { this.style.display = 'none'; };

    const textWrap = document.createElement('div');
    textWrap.className = 'ending-text';
    scene.lines.forEach(line => {
      const p = document.createElement('p');
      p.textContent = line;
      textWrap.appendChild(p);
    });

    const btn = document.createElement('button');
    btn.className = 'btn-primary';
    btn.textContent = scene.btnText;
    btn.onclick = () => renderScene(currentSceneIndex + 1);

    section.appendChild(img);
    section.appendChild(textWrap);
    section.appendChild(btn);
    app.appendChild(section);
  }

  // 启动
  init();
})();
