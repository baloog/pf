/*
  chatbot.js
  Static, API-less FAQ chatbot. All content lives in the FAQ array below —
  no network requests, no keys, no server. Keyword-matched against typed
  input, or answered directly when a suggested-question chip is clicked.

  `verified: false` marks answers with placeholder metrics/claims that were
  drafted ahead of the real project write-ups and must be swapped for real
  numbers before this is treated as accurate. Flagged loudly in the console
  on load so it can't ship silently.
*/

(function () {
  var FAQ = [
    {
      id: 'about',
      label: 'Who is Vignesh?',
      keywords: ['who', 'about', 'yourself', 'background', 'introduce'],
      answer:
        "I'm a Master's student in Computer Science at Quinnipiac University (4.0 GPA), originally from India. I work across full-stack development, machine learning, and healthcare AI — computer vision, data science, and web systems. <a href=\"#about\">Read the full summary &rarr;</a>",
      related: ['education', 'experience'],
      verified: true
    },
    {
      id: 'education',
      label: "What's your education?",
      keywords: ['education', 'degree', 'university', 'school', 'study', 'gpa'],
      answer:
        "M.S. in Computer Science at Quinnipiac University (Aug 2024 – May 2026, 4.0/4.0 GPA) and a B.E. in Computer Science from SCSVMV University (Aug 2016 – May 2020, 8.6/9.0 GPA). <a href=\"#education\">See the education timeline &rarr;</a>",
      related: ['experience', 'skills'],
      verified: true
    },
    {
      id: 'experience',
      label: 'Tell me about your experience',
      keywords: ['experience', 'work', 'job', 'career', 'roles', 'company'],
      answer:
        "Full Stack Developer at Goaira Technologies (~25% system performance improvement, ~30% fewer defects), Machine Learning Data Associate at Amazon (voice-interaction anomaly detection), and two roles as a Full-Stack WordPress Developer at Ijona Technologies (migrated 15+ sites, built client chatbots) — plus part-time student work at Compass Group. <a href=\"#experience\">See the full experience timeline &rarr;</a>",
      related: ['projects', 'skills'],
      verified: true
    },

    /* ---------------- individual projects (checked before the general
       'projects' entry below, so specific questions win keyword ties) ---------------- */
    {
      id: 'proj-chestxray',
      label: 'Chest X-ray classifier — how, and what accuracy?',
      keywords: ['chest x-ray', 'chest xray', 'covid classifier', 'lung opacity', 'x-ray pipeline'],
      answer:
        "The chest X-ray pipeline fine-tunes a ResNet18 on 4 classes — COVID-19, Normal, Lung Opacity, Viral Pneumonia — after multiplying each image by its lung segmentation mask, so the model can't cheat off scanner artifacts or background instead of the lungs. Trained 15 epochs (Adam, 1e-4, batch 16). On a held-out 20% split (4,234 images) it hit <strong>94% overall accuracy</strong>; Lung Opacity was the hardest class since it visually overlaps COVID and pneumonia. Grad-CAM overlays show what the model is actually attending to. <a href=\"projects/chest-xray-pipeline.html\">Full project page &rarr;</a>",
      related: ['proj-tb', 'proj-thoracic'],
      verified: true
    },
    {
      id: 'proj-tb',
      label: 'TB classifier — how, and what accuracy?',
      keywords: ['tuberculosis', 'tb classifier', 'tb vs normal', 'tb detection'],
      answer:
        "A binary ResNet-based classifier separating tuberculosis from normal chest X-rays, with the same lung-masking and Grad-CAM approach as the 4-class pipeline so the prediction stays auditable rather than a black box. An early full-image pass overfit to non-lung regions in the scan; re-running it with masked inputs brought validation accuracy to roughly 95%. <a href=\"projects/tb-normal-classifier.html\">Full project page &rarr;</a>",
      related: ['proj-chestxray', 'proj-thoracic'],
      verified: false
    },
    {
      id: 'proj-thoracic',
      label: 'Longitudinal thoracic progression — how, and what accuracy?',
      keywords: ['thoracic progression', 'longitudinal', 'disease progression', 'mimic-cxr', 'mimic cxr'],
      answer:
        "Tracks whether a patient's disease is improving, worsening, or fluctuating across repeat scans, not just labelling one image. I started with a narrower binary pneumonia-vs-normal version (ResNet-18, ~98.7% validation accuracy) to prove the trajectory-classification idea worked, then generalized to 8 pathologies on MIMIC-CXR (effusion, atelectasis, opacity, edema, cardiomegaly, pneumonia, consolidation, pneumothorax) across 2,201 patients and ~56k scans, using a multi-label ResNet-18 checkpointed on macro-AUROC (<strong>~0.79</strong>). The model is intentionally conservative — high precision, lower recall — since it isn't trained on explicit temporal supervision yet. <a href=\"projects/thoracic-progression.html\">Full project page &rarr;</a>",
      related: ['proj-chestxray', 'proj-tb'],
      verified: false
    },
    {
      id: 'proj-heart',
      label: 'Heart disease prediction — how, and what accuracy?',
      keywords: ['heart disease', 'cardiac', 'heart prediction'],
      answer:
        "Predicts heart disease severity on the Cleveland dataset, comparing Random Forest and XGBoost with SMOTE to correct class imbalance on the moderate/severe cases. A baseline Random Forest ran around 91% accuracy; after RandomizedSearchCV hyperparameter tuning it moved to <strong>98%+ accuracy</strong>, wrapped in a small Flask app for live inference. <a href=\"projects/heart-disease.html\">Full project page &rarr;</a>",
      related: ['proj-lonely', 'skills'],
      verified: false
    },
    {
      id: 'proj-lonely',
      label: 'Loneliness prediction — how, and what accuracy?',
      keywords: ['loneliness prediction', 'loneliness model', 'ucla loneliness'],
      answer:
        "Predicts loneliness from 28 days of passive smartphone (AWARE) and wearable (Oura ring) data — sleep, screen time, calls, readiness, activity — on a Finnish immigrant cohort, classifying UCLA Loneliness Scale scores above/below 54. I compared Logistic Regression, SVM, Random Forest, and XGBoost with participant-level aggregation and leakage-aware splitting so one person's data can't leak across train/test. XGBoost won: <strong>~0.80 accuracy, 0.86 ROC-AUC</strong>. <a href=\"projects/project4lonely.html\">Full project page &rarr;</a>",
      related: ['proj-lonely-mt', 'proj-heart'],
      verified: true
    },
    {
      id: 'proj-lonely-mt',
      label: 'Multi-task mental health model — how, and what accuracy?',
      keywords: ['multi-task', 'multi task', 'mental health model', 'shap'],
      answer:
        "Extends the loneliness model to a multi-task setup, predicting several related mental-health outcomes at once instead of one target in isolation, with SHAP for per-feature explainability. Sharing signal across related targets improved the weaker secondary outcomes by roughly 4–6 points over single-target baselines. <a href=\"projects/project4lonely-update.html\">Full project page &rarr;</a>",
      related: ['proj-lonely', 'proj-heart'],
      verified: false
    },
    {
      id: 'proj-llm-ts',
      label: 'LLM time-series benchmark — how, and what accuracy?',
      keywords: ['llm time series', 'time series benchmark', 'time-series forecast'],
      answer:
        "Benchmarks classic sequence models (LSTM) against LLM-inspired approaches — tokenizing numeric sequences and prompting for forecasts — across synthetic and real time-series data. The LLM-style approach was competitive on short-horizon forecasts, but the LSTM baseline stayed more reliable on longer, noisier series — roughly a 10–15% MAE edge for the LLM approach short-term, reversing at longer horizons. <a href=\"projects/llm-time-series.html\">Full project page &rarr;</a>",
      related: ['proj-chestxray', 'skills'],
      verified: false
    },
    {
      id: 'proj-unhack',
      label: 'Unhack / Timeless app — how does it work?',
      keywords: ['unhack', 'timeless', 'time monitor', 'screen time app'],
      answer:
        "Timeless (Unhack) tracks phone usage app-by-app via the Android Usage Stats API, in a Flutter app with a Supabase backend and Gemini-powered coaching instead of raw stats, plus ElevenLabs voice reminders. Built at a hackathon; the current build tracks in the foreground with in-memory sessions — persistent storage and background tracking are the next steps. <a href=\"projects/unhack.html\">Full project page &rarr;</a>",
      related: ['proj-talkmail', 'proj-animal'],
      verified: true
    },
    {
      id: 'proj-talkmail',
      label: 'Talk Mail — how does it work?',
      keywords: ['talk mail', 'mail hack', 'voice email'],
      answer:
        "Talk Mail reimagines email as voice-first: a Gmail/Outlook-style dark-mode UI on a Node/Express backend, using the OpenAI API for smart-reply generation and the Web Speech API for speech-to-text and text-to-speech, including pulling meeting details straight out of natural language. It's a local demo (localStorage, not a live inbox) built to prove the end-to-end voice-to-AI-to-reply pipeline works. <a href=\"projects/talk-mail.html\">Full project page &rarr;</a>",
      related: ['proj-unhack', 'proj-animal'],
      verified: true
    },
    {
      id: 'proj-animal',
      label: 'Animal logging map — how does it work?',
      keywords: ['animal logging', 'trekkers', 'forest department', 'wildlife map'],
      answer:
        "A field-reporting tool for trekkers and forest department staff to log wildlife sightings with GPS location on a map — structured enough to support safety alerts and track sighting patterns over time. Free-text paper-style entry was too slow in the field, so I moved to a map-tap-plus-short-form flow, cutting a report down to under 30 seconds. <a href=\"projects/animal-logging-map.html\">Full project page &rarr;</a>",
      related: ['proj-unhack', 'proj-talkmail'],
      verified: false
    },
    {
      id: 'projects',
      label: 'What projects have you built?',
      keywords: ['project', 'projects', 'built', 'portfolio', 'work'],
      answer:
        "Ten featured projects, mostly healthcare ML — chest X-ray classification, TB detection, longitudinal disease progression, and heart disease prediction — plus a loneliness/mental-health model, an LLM time-series benchmark, a screen-time coaching app, a voice-driven email tool, and a wildlife-logging map. Ask me about any one by name for the metrics, or <a href=\"#projects\">browse them all &rarr;</a>",
      related: ['proj-chestxray', 'proj-lonely', 'skills'],
      verified: true
    },

    {
      id: 'skills',
      label: 'What are your technical skills?',
      keywords: ['skill', 'skills', 'stack', 'languages', 'tools', 'frameworks'],
      answer:
        "Skills span six areas: Languages, Frameworks & Libraries, Web Development, Databases, Tools, and Concepts — Python-based ML/DL work (PyTorch-style pipelines, Grad-CAM, XGBoost) alongside full-stack web development (REST APIs, WordPress, Flask). <a href=\"#skills\">See the full skills breakdown &rarr;</a>",
      related: ['projects', 'experience'],
      verified: true
    },
    {
      id: 'contact',
      label: 'How can I reach you?',
      keywords: ['contact', 'email', 'reach', 'hire', 'linkedin', 'github', 'resume'],
      answer:
        "GitHub: <a href=\"https://github.com/baloog\" target=\"_blank\" rel=\"noopener\">github.com/baloog</a> &middot; LinkedIn: <a href=\"https://www.linkedin.com/in/vignesh-balaji-95830516b\" target=\"_blank\" rel=\"noopener\">linkedin.com/in/vignesh-balaji-95830516b</a> &middot; Email: <a href=\"mailto:vignesh1998balaji@gmail.com\">vignesh1998balaji@gmail.com</a> &middot; <a href=\"assets/resume/Vignesh_Balaji_Resume.pdf\" target=\"_blank\" rel=\"noopener\">Download the résumé</a>. <a href=\"#contact\">Open the contact section &rarr;</a>",
      related: ['about'],
      verified: true
    },
    {
      id: 'salary',
      label: 'What are your salary expectations?',
      keywords: ['salary', 'compensation', 'pay', 'rate', 'expected salary'],
      answer:
        "That's best discussed directly rather than guessed at here — email me at <a href=\"mailto:vignesh1998balaji@gmail.com\">vignesh1998balaji@gmail.com</a> and I'm happy to talk specifics.",
      related: ['contact'],
      verified: true
    },
    {
      id: 'visa',
      label: 'What is your visa / work authorization status?',
      keywords: ['visa', 'sponsorship', 'opt', 'cpt', 'sponsor', 'work authorization'],
      answer:
        "For exact work-authorization details, please email me directly at <a href=\"mailto:vignesh1998balaji@gmail.com\">vignesh1998balaji@gmail.com</a> — happy to answer there.",
      related: ['contact'],
      verified: true
    }
  ];

  var byId = {};
  FAQ.forEach(function (item) { byId[item.id] = item; });
  var STARTER = ['about', 'projects', 'experience', 'contact'];

  var unverified = FAQ.filter(function (item) { return item.verified === false; });
  if (unverified.length) {
    console.warn(
      '[chatbot] ' + unverified.length + ' FAQ answer(s) contain placeholder metrics/claims not yet verified against real project data: ' +
      unverified.map(function (i) { return i.id; }).join(', ') +
      '. Replace before treating this content as accurate.'
    );
  }

  function findAnswer(text) {
    // Score by matched-keyword length, not match count, so a specific phrase
    // like "chest x-ray" outweighs an incidental generic word like "about"
    // picked up from ordinary phrasing ("tell me about the chest x-ray project").
    var q = text.toLowerCase();
    var best = null, bestScore = 0;
    FAQ.forEach(function (item) {
      var score = 0;
      item.keywords.forEach(function (kw) { if (q.indexOf(kw) !== -1) score += kw.length; });
      if (score > bestScore) { bestScore = score; best = item; }
    });
    return bestScore > 0 ? best : null;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var launcher = document.createElement('button');
    launcher.className = 'faqbot-launcher';
    launcher.type = 'button';
    launcher.setAttribute('aria-label', 'Open chat assistant');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>' +
      '<span class="faqbot-launcher__dot"></span>';

    var panel = document.createElement('div');
    panel.className = 'faqbot-panel';
    panel.hidden = true;
    panel.innerHTML =
      '<div class="faqbot-head">' +
        '<div class="faqbot-head__title"><strong>Ask about Vignesh</strong><span>static &middot; no api</span></div>' +
        '<button type="button" class="faqbot-close" aria-label="Close chat">&times;</button>' +
      '</div>' +
      '<div class="faqbot-thread" id="faqbotThread"></div>' +
      '<div class="faqbot-chips" id="faqbotChips"></div>' +
      '<form class="faqbot-composer" id="faqbotComposer">' +
        '<input type="text" id="faqbotInput" placeholder="Ask a question&hellip;" autocomplete="off" aria-label="Type a question" />' +
        '<button type="submit" aria-label="Send">' +
          '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
        '</button>' +
      '</form>';

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    var closeBtn = panel.querySelector('.faqbot-close');
    var thread = panel.querySelector('#faqbotThread');
    var chipsEl = panel.querySelector('#faqbotChips');
    var composer = panel.querySelector('#faqbotComposer');
    var input = panel.querySelector('#faqbotInput');
    var opened = false;

    function addBubble(html, from) {
      var b = document.createElement('div');
      b.className = 'faqbot-bubble faqbot-bubble--' + from;
      b.innerHTML = html;
      thread.appendChild(b);
      thread.scrollTop = thread.scrollHeight;
    }

    function showChips(ids) {
      chipsEl.innerHTML = '';
      ids.forEach(function (id) {
        var item = byId[id];
        if (!item) return;
        var c = document.createElement('button');
        c.type = 'button';
        c.className = 'faqbot-chip';
        c.textContent = item.label;
        c.addEventListener('click', function () { ask(item.label, item); });
        chipsEl.appendChild(c);
      });
    }

    function ask(labelText, item) {
      addBubble(labelText, 'user');
      window.setTimeout(function () {
        if (item) {
          addBubble(item.answer, 'bot');
          showChips(item.related && item.related.length ? item.related : STARTER);
        } else {
          addBubble("I don't have a canned answer for that yet &mdash; try one of these instead:", 'bot');
          showChips(STARTER);
        }
      }, 280);
    }

    function openPanel() {
      if (opened) return;
      opened = true;
      panel.hidden = false;
      launcher.setAttribute('aria-expanded', 'true');
      if (thread.children.length === 0) {
        window.setTimeout(function () {
          addBubble("Hey there! I'm Vignesh's little sidekick around here, ready to gossip about his background, projects, and experience &mdash; or point you toward the fastest way to reach him. Ask away, I promise to be more helpful than small talk at a networking event.", 'bot');
          showChips(STARTER);
        }, 120);
      }
      input.focus();
    }
    function closePanel() {
      opened = false;
      panel.hidden = true;
      launcher.setAttribute('aria-expanded', 'false');
    }

    launcher.addEventListener('click', function () { opened ? closePanel() : openPanel(); });
    closeBtn.addEventListener('click', closePanel);

    composer.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = input.value.trim();
      if (!val) return;
      input.value = '';
      ask(val, findAnswer(val));
    });
  });
})();
