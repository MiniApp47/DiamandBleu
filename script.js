/* DIAMANT BLEU — 100 % GitHub Pages + bot Telegram uniquement. Aucun panel, aucune API. */
(() => {
  'use strict';
  /* ==============================================================
     💎 AJOUTER TES CATÉGORIES ET PRODUITS DIRECTEMENT ICI
     ==============================================================
     Même structure que ton ancien bot : catégorie > farms > produits.

     Pour ajouter des produits :
     1. Copie le MODÈLE ci-dessous dans le tableau de ta région.
     2. Remplace les noms, liens images/vidéos, et tarifs.
     3. Tu peux ajouter autant de catégories, farms et produits que voulu.
     4. Enregistre script.js et mets-le à jour sur GitHub.

     Les deux tableaux sont VIDES à la livraison : aucun faux produit.

     MODÈLE À DÉCOMMENTER ET COLLER ENTRE [ ET ] :

     {
       id: "MA_CATEGORIE",
       name: "Ma catégorie",
       quality: "Collection premium",
       image: "assets/categories/ma-categorie.jpg",
       farms: [
         {
           id: "ma-farm",
           name: "Ma Farm",
           image: "assets/categories/logo-farm.png",
           products: [
             {
               id: "mon-produit-01",
               name: "Mon produit",
               farm: "Ma Farm",
               type: "Ma gamme",
               image: "assets/produits/produit1.jpg",
               images: ["assets/produits/produit2.jpg"],
               videos: ["assets/produits/video1.mp4", "assets/produits/video2.mp4"],
               description: `Ma description sur plusieurs lignes.
Tous les détails de mon produit.`,
               tarifs: [
                 { weight: "1 unité", price: 20 },
                 { weight: "3 unités", price: 50 },
                 { weight: "5 unités", price: 75 }
               ],
               featured: true,  // Afficher à la une
               stock: null,     // null = non géré, 0 = rupture de stock
               active: true
             }
           ]
         }
       ]
     },

     Tu peux aussi mettre "products: [...]" directement dans une
     catégorie, sans "farms", comme dans tes anciens scripts.
  */

  // ==============================================================
  // 💎 BOUTIQUE DIAMANT BLEU IDF — MODIFIE SEULEMENT CE TABLEAU
  // ==============================================================
    const appData = [
   {
      id: "Hash",
      name: "Hash 🌷",
      type: "Hash",
      quality: "Hash 🌷",
      image: "Categ.jpg", // Ton image de catégorie Weed

      products: [
        {
          id: "Strawberry guava 🍓",
          flag: "🇺🇸",
          name: "Strawberry guava 🍓",
          farm: "Melt Bob 🤡",
          promoEligible: true,
          type: "Weed",
          image: "ProductSG.jpg",
          images:[ "ProductSG1.jpg"],
          video: "VideoSG.mov",
          description:
            "💎🔥 Considérée par de nombreux connaisseurs comme l’une des meilleures expressions de l’Amnesia, la Amnesia Core Cut est une sélection d’élite recherchée pour son profil terpénique puissant et son effet cérébral particulièrement intense. 🔥💎\n\n ✨ Les effets\n\n 🚀 Montée rapide et énergique\n 😄 Euphorie marquée\n 🧠 Stimulation mentale puissante\n 🎨 Créativité et concentration accrues\n 🗣️ Effet social apprécié des amateurs de sativas\n\n 👃 Les arômes\n\n 🍊 Agrumes frais et zestés\n 🌿 Notes Haze classiques\n 🌶️ Légères touches épicées et encensées\n\n 🌱 Pourquoi elle est si recherchée ? \n\n • Sélection réputée pour sa stabilité \n • Profil aromatique particulièrement intense \n • Forte production de résine ✨ \n • Expression fidèle de l’esprit Amnesia « old school » \n • Très appréciée des amateurs de Haze européennes\n\n 🏆 Pour les connaisseurs\n La Core Cut est souvent citée parmi les meilleures coupes d’Amnesia grâce à son équilibre entre puissance, saveurs citronnées explosives et effet mental clair. Beaucoup la considèrent comme une référence lorsqu’on parle de vraie Amnesia de haut niveau.\n\n ⭐ En résumé :\n Une Amnesia premium, ultra citronnée, résineuse et cérébrale, recherchée par les amateurs de Haze authentiques et les passionnés de génétiques européennes. 🔥⚡🧠💎🌿",
          tarifs: [
            { weight: "10g", price: 70.0 }
          ],
        },
        {
          id: "Black Maple 💣",
          flag: "🇺🇸",
          name: "Black Maple 💣",
          farm: "Melt Bob 🤡",
          promoEligible: true,
          type: "Weed",
          image: "ProductBM.jpg",
          images:[ "ProductBM1.jpg"],
          video: "VideoBM.mov",
          description:
            "💎🔥 Considérée par de nombreux connaisseurs comme l’une des meilleures expressions de l’Amnesia, la Amnesia Core Cut est une sélection d’élite recherchée pour son profil terpénique puissant et son effet cérébral particulièrement intense. 🔥💎\n\n ✨ Les effets\n\n 🚀 Montée rapide et énergique\n 😄 Euphorie marquée\n 🧠 Stimulation mentale puissante\n 🎨 Créativité et concentration accrues\n 🗣️ Effet social apprécié des amateurs de sativas\n\n 👃 Les arômes\n\n 🍊 Agrumes frais et zestés\n 🌿 Notes Haze classiques\n 🌶️ Légères touches épicées et encensées\n\n 🌱 Pourquoi elle est si recherchée ? \n\n • Sélection réputée pour sa stabilité \n • Profil aromatique particulièrement intense \n • Forte production de résine ✨ \n • Expression fidèle de l’esprit Amnesia « old school » \n • Très appréciée des amateurs de Haze européennes\n\n 🏆 Pour les connaisseurs\n La Core Cut est souvent citée parmi les meilleures coupes d’Amnesia grâce à son équilibre entre puissance, saveurs citronnées explosives et effet mental clair. Beaucoup la considèrent comme une référence lorsqu’on parle de vraie Amnesia de haut niveau.\n\n ⭐ En résumé :\n Une Amnesia premium, ultra citronnée, résineuse et cérébrale, recherchée par les amateurs de Haze authentiques et les passionnés de génétiques européennes. 🔥⚡🧠💎🌿",
          tarifs: [
            { weight: "10g", price: 70.0 }
          ],
        },
        {
          id: "Grape gazoline ⛽",
          flag: "🇺🇸",
          name: "Grape gazoline ⛽",
          farm: "Melt Bob 🤡",
          promoEligible: true,
          type: "Weed",
          image: "ProductGG.jpg",
          images:[ "ProductGG1.jpg"],
          video: "VideoGG.mov",
          description:
            "💎🔥 Considérée par de nombreux connaisseurs comme l’une des meilleures expressions de l’Amnesia, la Amnesia Core Cut est une sélection d’élite recherchée pour son profil terpénique puissant et son effet cérébral particulièrement intense. 🔥💎\n\n ✨ Les effets\n\n 🚀 Montée rapide et énergique\n 😄 Euphorie marquée\n 🧠 Stimulation mentale puissante\n 🎨 Créativité et concentration accrues\n 🗣️ Effet social apprécié des amateurs de sativas\n\n 👃 Les arômes\n\n 🍊 Agrumes frais et zestés\n 🌿 Notes Haze classiques\n 🌶️ Légères touches épicées et encensées\n\n 🌱 Pourquoi elle est si recherchée ? \n\n • Sélection réputée pour sa stabilité \n • Profil aromatique particulièrement intense \n • Forte production de résine ✨ \n • Expression fidèle de l’esprit Amnesia « old school » \n • Très appréciée des amateurs de Haze européennes\n\n 🏆 Pour les connaisseurs\n La Core Cut est souvent citée parmi les meilleures coupes d’Amnesia grâce à son équilibre entre puissance, saveurs citronnées explosives et effet mental clair. Beaucoup la considèrent comme une référence lorsqu’on parle de vraie Amnesia de haut niveau.\n\n ⭐ En résumé :\n Une Amnesia premium, ultra citronnée, résineuse et cérébrale, recherchée par les amateurs de Haze authentiques et les passionnés de génétiques européennes. 🔥⚡🧠💎🌿",
          tarifs: [
            { weight: "10g", price: 70.0 }
          ],
        },
        {
          id: "Papaya 🥭",
          flag: "🇺🇸",
          name: "Papaya 🥭",
          farm: "Melt Bob 🤡",
          promoEligible: true,
          type: "Weed",
          image: "ProductP.jpg",
          images:[ "ProductP1.jpg"],
          video: "VideoP.mov",
          description:
            "💎🔥 Considérée par de nombreux connaisseurs comme l’une des meilleures expressions de l’Amnesia, la Amnesia Core Cut est une sélection d’élite recherchée pour son profil terpénique puissant et son effet cérébral particulièrement intense. 🔥💎\n\n ✨ Les effets\n\n 🚀 Montée rapide et énergique\n 😄 Euphorie marquée\n 🧠 Stimulation mentale puissante\n 🎨 Créativité et concentration accrues\n 🗣️ Effet social apprécié des amateurs de sativas\n\n 👃 Les arômes\n\n 🍊 Agrumes frais et zestés\n 🌿 Notes Haze classiques\n 🌶️ Légères touches épicées et encensées\n\n 🌱 Pourquoi elle est si recherchée ? \n\n • Sélection réputée pour sa stabilité \n • Profil aromatique particulièrement intense \n • Forte production de résine ✨ \n • Expression fidèle de l’esprit Amnesia « old school » \n • Très appréciée des amateurs de Haze européennes\n\n 🏆 Pour les connaisseurs\n La Core Cut est souvent citée parmi les meilleures coupes d’Amnesia grâce à son équilibre entre puissance, saveurs citronnées explosives et effet mental clair. Beaucoup la considèrent comme une référence lorsqu’on parle de vraie Amnesia de haut niveau.\n\n ⭐ En résumé :\n Une Amnesia premium, ultra citronnée, résineuse et cérébrale, recherchée par les amateurs de Haze authentiques et les passionnés de génétiques européennes. 🔥⚡🧠💎🌿",
          tarifs: [
            { weight: "10g", price: 70.0 }
          ],
        },
        {
          id: "permanent marker🍀🧠",
          flag: "🇺🇸",
          name: "PERMANENT MARKER 🖍️",
          farm: "Melt Bob 🤡",
          promoEligible: true,
          type: "Weed",
          image: "ProductPM.jpg",
          images:[ "ProductPM1.jpg"],
          video: "VideoPM.mov",
          description:
            "💎🔥 Considérée par de nombreux connaisseurs comme l’une des meilleures expressions de l’Amnesia, la Amnesia Core Cut est une sélection d’élite recherchée pour son profil terpénique puissant et son effet cérébral particulièrement intense. 🔥💎\n\n ✨ Les effets\n\n 🚀 Montée rapide et énergique\n 😄 Euphorie marquée\n 🧠 Stimulation mentale puissante\n 🎨 Créativité et concentration accrues\n 🗣️ Effet social apprécié des amateurs de sativas\n\n 👃 Les arômes\n\n 🍊 Agrumes frais et zestés\n 🌿 Notes Haze classiques\n 🌶️ Légères touches épicées et encensées\n\n 🌱 Pourquoi elle est si recherchée ? \n\n • Sélection réputée pour sa stabilité \n • Profil aromatique particulièrement intense \n • Forte production de résine ✨ \n • Expression fidèle de l’esprit Amnesia « old school » \n • Très appréciée des amateurs de Haze européennes\n\n 🏆 Pour les connaisseurs\n La Core Cut est souvent citée parmi les meilleures coupes d’Amnesia grâce à son équilibre entre puissance, saveurs citronnées explosives et effet mental clair. Beaucoup la considèrent comme une référence lorsqu’on parle de vraie Amnesia de haut niveau.\n\n ⭐ En résumé :\n Une Amnesia premium, ultra citronnée, résineuse et cérébrale, recherchée par les amateurs de Haze authentiques et les passionnés de génétiques européennes. 🔥⚡🧠💎🌿",
          tarifs: [
            { weight: "10g", price: 70.0 }
          ],
        },
      ],
    },

  ];

  // ==============================================================
  // 🌊 BOUTIQUE DIAMANT BLEU BRETAGNE — TABLEAU INDÉPENDANT
  // ==============================================================
  const appDataBretagne = [

  ];

  // INFOS DE CHAQUE SHOP : modifiables ici aussi.
  const shopSettings = {
    idf: {
      announcement: 'DIAMANT BLEU · ÎLE-DE-FRANCE',
      subtitle: 'Le prestige a une signature.',
      info: 'Bienvenue chez Diamant Bleu Île-de-France.',
      delivery_fee: 0, pickup_fee: 0, postal_fee: 0,
      contact_telegram: '', contact_whatsapp: '', contact_instagram: '', contact_signal: ''
    },
    bretagne: {
      announcement: 'DIAMANT BLEU · BRETAGNE',
      subtitle: 'Le prestige a une signature.',
      info: 'Bienvenue chez Diamant Bleu Bretagne.',
      delivery_fee: 0, pickup_fee: 0, postal_fee: 0,
      contact_telegram: '', contact_whatsapp: '', contact_instagram: '', contact_signal: ''
    }
  };

  const REGIONS = {
    idf: { name: 'ÎLE-DE-FRANCE', logo: 'assets/diamant-idf.jpg' },
    bretagne: { name: 'BRETAGNE', logo: 'assets/diamant-bretagne.jpg' }
  };

  // Le site convertit automatiquement ton ancien format appData
  // en fiches produits, variantes, galeries et farms filtrables.
  function convertAppData(region) {
    const rawCategories = region === 'bretagne' ? appDataBretagne : appData;
    const categories = [], products = [];
    const seenProducts = new Set();
    const list = Array.isArray(rawCategories) ? rawCategories : [];
    const mediaType = url => /\.(mp4|mov|webm)(?:[?#]|$)/i.test(url) ? 'video' : 'image';

    const pushProduct = (raw, cat, farm, index) => {
      if (!raw || typeof raw !== 'object' || raw.active === false) return;
      const tariffs = Array.isArray(raw.tarifs) ? raw.tarifs : (Array.isArray(raw.variants) ? raw.variants : []);
      const variants = tariffs.map(t => ({
        label: String(t.weight ?? t.label ?? t.quantity ?? '').trim(),
        price: Number(String(t.price ?? '').replace(',', '.'))
      })).filter(v => v.label && Number.isFinite(v.price) && v.price >= 0);
      if (!variants.length && Number.isFinite(Number(raw.price))) {
        variants.push({ label: '1 unité', price: Number(raw.price) });
      }
      if (!variants.length) { console.warn('Diamant Bleu : tarifs manquants pour', raw.name || raw.id); return; }

      const media = [], used = new Set();
      const addMedia = item => {
        const url = String(typeof item === 'string' ? item : item?.url ?? '').trim();
        if (!url || used.has(url)) return;
        used.add(url);
        media.push({ type: mediaType(url), url });
      };
      addMedia(raw.image);
      if (Array.isArray(raw.images)) raw.images.forEach(addMedia);
      addMedia(raw.video);
      if (Array.isArray(raw.videos)) raw.videos.forEach(addMedia);
      if (Array.isArray(raw.media)) raw.media.forEach(addMedia);
      const farmId = String(farm?.id ?? 'direct');
      const rawId = String(raw.id ?? raw.name ?? `produit-${index}`);
      const id = `${cat.id}::${farmId}::${rawId}`;
      if (seenProducts.has(id)) { console.warn('Diamant Bleu : ID produit en double', id); return; }
      seenProducts.add(id);
      products.push({
        id, category_id: cat.id,
        farm_id: farm ? farmId : '',
        farm: String(raw.farm ?? farm?.name ?? ''),
        name: String(raw.name ?? rawId),
        subcategory: String(raw.type ?? raw.subcategory ?? farm?.name ?? ''),
        description: String(raw.description ?? ''),
        badge: String(raw.badge ?? raw.badgeText ?? ''),
        featured: Boolean(raw.featured ?? raw.isFeatured ?? raw.miseEnAvant ?? false),
        active: true,
        stock: raw.stock === undefined || raw.stock === null || raw.stock === '' ? null : (Number.isFinite(Number(raw.stock)) ? Number(raw.stock) : null),
        variants, media
      });
    };

    list.forEach((raw, i) => {
      if (!raw || typeof raw !== 'object') return;
      const cat = {
        id: String(raw.id ?? `categorie-${i}`),
        name: String(raw.name ?? raw.id ?? `Catégorie ${i + 1}`),
        subtitle: String(raw.subtitle ?? raw.quality ?? ''),
        image: String(raw.image ?? ''),
        farms: []
      };
      categories.push(cat);
      if (Array.isArray(raw.products)) raw.products.forEach((p,j) => pushProduct(p,cat,null,j));
      if (Array.isArray(raw.farms)) raw.farms.forEach((fm, fi) => {
        if (!fm || typeof fm !== 'object') return;
        const farm = {
          id: String(fm.id ?? `farm-${fi}`), name: String(fm.name ?? fm.id ?? `Farm ${fi+1}`),
          image: String(fm.image ?? fm.logo ?? '')
        };
        cat.farms.push(farm);
        if (Array.isArray(fm.products)) fm.products.forEach((p,j) => pushProduct(p,cat,farm,j));
      });
    });
    return { settings: {...shopSettings[region]}, categories, products };
  }

  const tg = window.Telegram?.WebApp || null;
  const $ = (s, root=document) => root.querySelector(s);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const fmt = v => new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'}).format(Number(v)||0);
  const money = v => Number(v||0);
  const safeUrl = url => {try {const x = new URL(url,document.baseURI); return ['https:','http:'].includes(x.protocol)?x.href:'';}catch{return ''}};
  const emptyCatalog = {settings:{announcement:'DIAMANT BLEU · MAISON DE SÉLECTION',subtitle:'Le prestige a une signature.',info:'Bienvenue chez Diamant Bleu.',delivery_fee:0,pickup_fee:0,postal_fee:0,contact_telegram:'',contact_whatsapp:'',contact_instagram:'',contact_signal:''},categories:[],products:[]};
  const loadJSON = key => {try{return JSON.parse(localStorage.getItem('db_'+key))}catch{return null}};
  const state = {region:'',catalog:emptyCatalog,loading:true,error:'',route:'home',category:'all',farm:'all',query:'',sort:'featured',favorites:new Set(),cart:[],galleryIndex:0,activeProduct:null,activeVariant:0,quantity:1,checkout:{fulfillment:'delivery',address:'',notes:'',phone:'',name:''}};
  const products = () => state.catalog.products||[];
  const productById = id => products().find(p => String(p.id)===String(id));
  const catById = id => (state.catalog.categories||[]).find(c=>String(c.id)===String(id));
  const fromPrice = p => Math.min(...(p.variants||[]).map(v=>money(v.price)).filter(v=>Number.isFinite(v)&&v>=0).concat([Infinity]));
  function saveLocal(){try{localStorage.setItem('db_'+state.region+'_favorites',JSON.stringify([...state.favorites]));localStorage.setItem('db_'+state.region+'_cart',JSON.stringify(state.cart));}catch{}}
  function pulse(){try{tg?.HapticFeedback?.impactOccurred('light')}catch{}}
  function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),3500)}
  function mediaOf(p){return (p?.media||[]).filter(m=>m?.url&&safeUrl(m.url)).map(m=>({...m,url:safeUrl(m.url)}))}
  function imgOrPlaceholder(p,cls=''){const m=mediaOf(p).find(x=>x.type==='image');return m?`<img class="${cls}" src="${esc(m.url)}" alt="${esc(p.name)}" loading="lazy">`:'<span class="product-placeholder" aria-hidden="true">◆</span>'}
  function imageOf(c){return c.image&&safeUrl(c.image)?`<img src="${esc(safeUrl(c.image))}" alt="" loading="lazy">`:''}
  function categoryCard(c){return `<button class="category-card reveal" data-category="${esc(c.id)}">${imageOf(c)}<span class="cat-symbol">◆</span><div class="cat-content"><small>DIAMANT BLEU · ${esc(REGIONS[state.region]?.name||'COLLECTION')}</small><h3>${esc(c.name)}</h3><span>${esc(c.subtitle||'Découvrir la collection')}　→</span></div></button>`}
  function productCard(p){const fav=state.favorites.has(p.id),unavailable=p.stock!==null&&p.stock!==undefined&&Number(p.stock)<=0;return `<article class="product-card reveal"><div class="product-visual" data-product="${esc(p.id)}" role="button" tabindex="0" aria-label="Voir ${esc(p.name)}">${imgOrPlaceholder(p)}${p.badge?`<span class="tag">${esc(p.badge)}</span>`:''}<button class="fav-btn ${fav?'liked':''}" data-like="${esc(p.id)}" aria-label="${fav?'Retirer des':'Ajouter aux'} favoris"><svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg></button></div><div class="product-info"><div class="product-topline">${esc(p.subcategory||catById(p.category_id)?.name||'DIAMANT BLEU')}</div><h3>${esc(p.name)}</h3><div class="price">${fmt(fromPrice(p))} <small>à partir de</small></div><button class="btn btn-outline" data-product="${esc(p.id)}" ${unavailable?'disabled':''}>${unavailable?'Rupture de stock':'Découvrir la pièce'}　→</button></div></article>`}
  function empty(title,body){return `<div class="empty"><div class="empty-symbol">◆</div><h3>${esc(title)}</h3><p>${esc(body)}</p><button class="btn btn-outline" data-route="shop">Explorer les collections</button></div>`}
  function collectionGrid(items){return items.length?`<div class="products-grid">${items.map(productCard).join('')}</div>`:empty('Aucun produit pour le moment','La sélection sera bientôt disponible.')}
  function renderHome(){const cats=state.catalog.categories||[],pp=products(),featured=pp.filter(p=>p.featured).slice(0,8);return `<section class="hero"><div class="hero-inner"><span class="hero-badge">✦　 MAISON DE SÉLECTION　 ✦</span><img class="hero-logo" src="${REGIONS[state.region]?.logo||REGIONS.idf.logo}" alt="Emblème Diamant Bleu"><h1>DIAMANT <span>BLEU</span></h1><div class="hero-region-name">${esc(REGIONS[state.region]?.name||'')}</div><p class="hero-sub">${esc(state.catalog.settings?.subtitle||'Le prestige a une signature.')}</p><div class="hero-actions"><button class="btn btn-gold" data-route="shop">DÉCOUVRIR NOS COLLECTIONS　→</button><button class="btn btn-outline" data-route="info">✦　LA MAISON</button></div></div><div class="hero-cutline">◆　RARETÉ · ÉLÉGANCE · DISTINCTION　◆</div></section><div class="container"><div class="trust-line"><div class="trust-item"><b>01</b><small>Sélection exigeante</small></div><div class="trust-item"><b>02</b><small>Expérience élégante</small></div><div class="trust-item"><b>03</b><small>Service soigné</small></div></div><section class="section"><div class="section-heading"><div><div class="eyebrow">LA MAISON DIAMANT BLEU</div><h2>Nos collections</h2></div><button class="btn btn-plain link-arrow" data-route="shop">Tout explorer　→</button></div><div class="category-grid">${cats.map(categoryCard).join('')||empty('Collections à venir','Nos catégories seront bientôt dévoilées.')}</div></section><section class="section"><div class="section-heading"><div><div class="eyebrow">PIÈCES SÉLECTIONNÉES</div><h2>À la une</h2></div><button class="btn btn-plain link-arrow" data-route="shop">Voir la boutique　→</button></div>${collectionGrid(featured.length?featured:pp.slice(0,4))}</section><section class="feature-banner"><div class="banner-copy"><div class="eyebrow">✦ UNE EXPÉRIENCE À PART</div><h2>Diamant Bleu · ${esc(REGIONS[state.region]?.name||'')}</h2><p>Une boutique pensée pour une expérience moderne, élégante et simple, avec une sélection adaptée à votre région.</p><button class="btn btn-gold" data-route="shop">DÉCOUVRIR LA BOUTIQUE　→</button></div><div class="banner-image"><img src="${REGIONS[state.region]?.logo||REGIONS.idf.logo}" alt="Diamant Bleu"></div></section></div>`}
  function filteredProducts(){let list=products().filter(p=>(state.category==='all'||String(p.category_id)===String(state.category))&&(state.farm==='all'||String(p.farm_id)===String(state.farm)));const q=state.query.trim().toLowerCase();if(q)list=list.filter(p=>[p.name,p.farm,p.subcategory,p.description,catById(p.category_id)?.name].join(' ').toLowerCase().includes(q));if(state.sort==='price_up')list.sort((a,b)=>fromPrice(a)-fromPrice(b));if(state.sort==='price_down')list.sort((a,b)=>fromPrice(b)-fromPrice(a));if(state.sort==='az')list.sort((a,b)=>a.name.localeCompare(b.name,'fr'));if(state.sort==='featured')list.sort((a,b)=>Number(b.featured)-Number(a.featured));return list}
  function renderShop(){const cats=state.catalog.categories||[];return `<div class="container"><div class="page-head"><div class="eyebrow">L'ART DE SÉLECTIONNER</div><h1 class="page-title">Les Collections</h1><p>Découvrez nos pièces, explorez, sélectionnez et composez votre panier.</p></div><div class="shop-toolbar"><div class="search-field"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg><input id="shop-search" type="search" autocomplete="off" placeholder="Rechercher un produit…" value="${esc(state.query)}" aria-label="Rechercher"></div><select class="form-select" id="shop-sort" aria-label="Trier"><option value="featured" ${state.sort==='featured'?'selected':''}>À la une</option><option value="price_up" ${state.sort==='price_up'?'selected':''}>Prix croissant</option><option value="price_down" ${state.sort==='price_down'?'selected':''}>Prix décroissant</option><option value="az" ${state.sort==='az'?'selected':''}>Nom A à Z</option></select></div><div class="filter-chips">${[{id:'all',name:'Toutes les collections'},...cats].map(c=>`<button class="chip ${state.category===c.id?'active':''}" data-category="${esc(c.id)}">${esc(c.name)}</button>`).join('')}</div>${state.category!=='all'&&catById(state.category)?.farms?.length?`<div class="farm-selector"><div class="eyebrow">CHOISIR UNE FARM</div><div class="farm-list"><button class="farm-tile ${state.farm==='all'?'active':''}" data-farm="all"><span class="farm-gem">◆</span><span>Toutes les farms</span></button>${catById(state.category).farms.map(f=>`<button class="farm-tile ${state.farm===f.id?'active':''}" data-farm="${esc(f.id)}">${f.image&&safeUrl(f.image)?`<img src="${esc(safeUrl(f.image))}" alt="" loading="lazy">`:'<span class="farm-gem">◆</span>'}<span>${esc(f.name)}</span></button>`).join('')}</div></div>`:''}<div id="shop-results"></div></div>`;}
  function updateShopResults(){const e=$('#shop-results');if(!e)return;const list=filteredProducts();e.innerHTML=`<p class="results-counter">${list.length} produit${list.length>1?'s':''} dans la sélection</p>${collectionGrid(list)}`;revealCards()}
  function renderFavorites(){return `<div class="container"><div class="page-head"><div class="eyebrow">VOTRE SÉLECTION</div><h1 class="page-title">Mes favoris</h1><p>Les pièces qui ont retenu votre attention.</p></div>${collectionGrid(products().filter(p=>state.favorites.has(p.id)))}</div>`}
  function cartLines(){return state.cart.map(entry=>{const p=productById(entry.id),v=p?.variants?.[entry.variant];return p&&v?{...entry,p,v,subtotal:money(v.price)*entry.qty}:null}).filter(Boolean)}
  function cartTotal(){return cartLines().reduce((sum,x)=>sum+x.subtotal,0)}
  function deliveryFee(){const key={delivery:'delivery_fee',pickup:'pickup_fee',postal:'postal_fee'}[state.checkout.fulfillment];return Math.max(0,money(state.catalog.settings?.[key]||0))}
  function renderSummary(checkout=false){const fee=checkout?deliveryFee():0;return `<div class="summary glass"><h3>Votre sélection</h3><div class="sum-row"><span>Articles (${state.cart.reduce((n,x)=>n+x.qty,0)})</span><strong>${fmt(cartTotal())}</strong></div>${checkout?`<div class="sum-row"><span>Frais indicatifs</span><strong>${fmt(fee)}</strong></div>`:''}<div class="sum-total"><span>Total indicatif</span><span>${fmt(cartTotal()+fee)}</span></div>${!checkout?`<button class="btn btn-gold btn-block" data-route="checkout" ${state.cart.length?'':'disabled'}>FAIRE UNE DEMANDE　→</button>`:''}<small>Les disponibilités et les prix seront confirmés manuellement après réception de la demande.</small></div>`}
  function renderCart(){const lines=cartLines();return `<div class="container"><div class="page-head"><div class="eyebrow">VOTRE SÉLECTION</div><h1 class="page-title">Le panier</h1></div>${!lines.length?empty('Votre écrin est vide','Ajoutez vos produits préférés au panier.'):`<div class="cart-layout"><div class="cart-list">${lines.map(({p,v,qty,variant,subtotal})=>`<div class="cart-item"><div class="cart-thumb">${imgOrPlaceholder(p)}</div><div><h3>${esc(p.name)}</h3><p>${esc(v.label)}</p><strong>${fmt(subtotal)}</strong></div><div class="cart-item-right"><button class="remove-btn" data-remove="${esc(p.id)}" data-variant="${variant}">Retirer ✕</button><div class="mini-qty"><button data-cart-qty="-1" data-id="${esc(p.id)}" data-variant="${variant}">−</button>${qty}<button data-cart-qty="1" data-id="${esc(p.id)}" data-variant="${variant}">+</button></div></div></div>`).join('')}<button class="btn btn-outline" data-route="shop">← Continuer mes découvertes</button></div>${renderSummary()}</div>`}</div>`}
  function renderCheckout(){if(!cartLines().length)return empty('Panier vide','Ajoute d’abord des produits.');const botMode=canSendToTelegram();return `<div class="container"><div class="page-head"><div class="eyebrow">DERNIÈRE ÉTAPE</div><h1 class="page-title">Finaliser votre demande</h1><p>${botMode?'La demande sera envoyée directement au bot Telegram.':'Vous pourrez copier votre demande pour la transmettre au commerçant.'}</p></div><div class="checkout-layout"><form id="checkout-form" class="checkout-fields glass"><div class="eyebrow">01 / MODE DE RÉCEPTION</div><h3>Comment souhaitez-vous recevoir votre sélection ?</h3><div class="radio-options">${[['delivery','🚚','Livraison'],['pickup','📍','Retrait'],['postal','📦','Expédition']].map(([v,emoji,label])=>`<label class="radio-card"><input name="fulfillment" type="radio" value="${v}" ${state.checkout.fulfillment===v?'checked':''}><b>${emoji}</b>${label}</label>`).join('')}</div><div class="eyebrow">02 / COORDONNÉES</div><div class="field"><label for="cust-name">Nom ou pseudo</label><input class="form-input" name="name" id="cust-name" maxlength="100" required placeholder="Votre nom" value="${esc(state.checkout.name)}"></div><div class="field"><label for="cust-phone">Téléphone de contact</label><input class="form-input" name="phone" id="cust-phone" maxlength="40" required placeholder="Numéro joignable" value="${esc(state.checkout.phone)}"></div><div class="field" id="address-field" ${state.checkout.fulfillment==='pickup'?'hidden':''}><label for="cust-address">Adresse de livraison / expédition</label><textarea class="form-textarea" id="cust-address" name="address" maxlength="500" ${state.checkout.fulfillment==='pickup'?'':'required'} placeholder="Adresse, code postal, ville">${esc(state.checkout.address)}</textarea></div><div class="field"><label for="cust-notes">Précisions (facultatif)</label><textarea class="form-textarea" id="cust-notes" name="notes" maxlength="300" placeholder="Précisions de commande">${esc(state.checkout.notes)}</textarea></div><div id="quote-notice" class="notice">${botMode?'La Mini App doit avoir été ouverte avec le bouton de clavier du bot.':'Ouvrez le shop depuis le bouton du clavier Telegram pour transmettre directement.'}</div><button class="btn btn-gold btn-block" type="submit" id="order-submit">${botMode?'ENVOYER LA DEMANDE AU BOT　✦':'COPIER LA DEMANDE　✦'}</button><p class="muted" style="font-size:11px;line-height:1.8">Aucun paiement n'est réalisé ici. Les prix affichés sont indicatifs et la commande n'est définitive qu'après confirmation humaine.</p></form><div id="checkout-summary">${renderSummary(true)}</div></div></div>`}
  function contactButtons(){const s=state.catalog.settings||{};return [['Telegram',s.contact_telegram],['WhatsApp',s.contact_whatsapp],['Instagram',s.contact_instagram],['Signal',s.contact_signal]].filter(([_,u])=>safeUrl(u)).map(([name,u])=>`<a class="btn btn-outline" href="${esc(safeUrl(u))}" target="_blank" rel="noopener noreferrer">${esc(name)}　↗</a>`).join('')||'<span class="muted">Nos liens de contact seront bientôt disponibles.</span>'}
  function renderInfo(){const s=state.catalog.settings||{};return `<div class="container"><div class="page-head"><div class="eyebrow">BIENVENUE CHEZ NOUS</div><h1 class="page-title">La Maison</h1><p>${esc(s.info||'Bienvenue chez Diamant Bleu.')}</p></div><div class="info-grid"><article class="glass info-box"><span class="info-icon">✧</span><h3>La sélection</h3><p>Des collections présentées avec soin, pour découvrir facilement les produits.</p></article><article class="glass info-box"><span class="info-icon">◇</span><h3>Le service</h3><p>Livraison, retrait ou expédition selon les possibilités de votre région.</p></article><article class="glass info-box"><span class="info-icon">✦</span><h3>La simplicité</h3><p>Choisissez vos produits, préparez votre panier et transmettez votre demande dans Telegram.</p></article></div><div class="section"><div class="section-heading"><div><div class="eyebrow">INFOS PRATIQUES</div><h2>Vos questions</h2></div></div><div class="faq"><details><summary>Comment passer commande ?</summary><p>Ajoutez vos produits au panier puis envoyez la demande depuis le bouton du clavier du bot Telegram. La commande doit ensuite être confirmée par la boutique.</p></details><details><summary>Comment voir les nouveautés ?</summary><p>Rouvrez la boutique après une mise à jour du catalogue publiée sur GitHub.</p></details><details><summary>Comment ajouter une photo à ma sélection ?</summary><p>Chaque produit peut afficher plusieurs images et vidéos.</p></details></div></div><div class="section"><div class="section-heading"><div><div class="eyebrow">RESTONS EN CONTACT</div><h2>Nous contacter</h2></div></div><div class="contact-grid">${contactButtons()}</div></div></div>`}
  function renderError(){return `<div class="container"><div class="page-head"><h1 class="page-title">Catalogue indisponible</h1><p>Vérifie les tableaux appData et appDataBretagne de script.js.</p><div class="notice warn error-box">${esc(state.error)}</div><button class="btn btn-outline" id="retry-load">Réessayer</button></div></div>`}
  function navigate(route){if(!['home','shop','favorites','cart','checkout','info'].includes(route))route='home';state.route=route;render();scrollTo({top:0,behavior:'instant'});if(!reduceMotion())$('#view')?.animate([{opacity:0,transform:'translateY(20px)',filter:'blur(4px)'},{opacity:1,transform:'translateY(0)',filter:'blur(0)'}],{duration:540,easing:'cubic-bezier(.16,1,.25,1)'});pulse()}
  function render(){const view=$('#view');if(!view)return;if(state.loading){view.innerHTML='<div class="loader">◆　OUVERTURE DE LA MAISON...</div>';return}if(state.error){view.innerHTML=renderError();return}const map={home:renderHome,shop:renderShop,favorites:renderFavorites,cart:renderCart,checkout:renderCheckout,info:renderInfo};view.innerHTML=map[state.route]?.()||renderHome();document.querySelectorAll('[data-route]').forEach(el=>el.classList.toggle('active',el.dataset.route===state.route));updateCounts();if(state.route==='shop')updateShopResults();revealCards()}
  function updateCounts(){const count=state.cart.reduce((n,x)=>n+x.qty,0);for(const id of ['cart-count','mobile-count']){const e=$('#'+id);if(e){e.textContent=count;e.hidden=count===0}}}
  function toggleFavorite(id){if(state.favorites.has(id)){state.favorites.delete(id);toast('Retiré des favoris')}else{state.favorites.add(id);toast('Ajouté à vos favoris ♡')}saveLocal();if(state.route==='favorites')render();else document.querySelectorAll('[data-like]').forEach(b=>{if(b.dataset.like===id){b.classList.toggle('liked',state.favorites.has(id));b.setAttribute('aria-label',state.favorites.has(id)?'Retirer des favoris':'Ajouter aux favoris')}})}
  function addToCart(id,variant,qty){const p=productById(id);if(!p)return;const v=p.variants?.[variant];if(!v)return;const inCart=state.cart.filter(x=>x.id===id).reduce((a,x)=>a+x.qty,0),limit=p.stock==null?Infinity:Number(p.stock);if(inCart+qty>limit){toast('Stock insuffisant');return}const found=state.cart.find(x=>x.id===id&&x.variant===variant);if(found)found.qty+=qty;else state.cart.push({id,variant,qty});saveLocal();updateCounts();toast(`${p.name} ajouté au panier ✦`);pulse()}
  function updateCartQuantity(id,variant,diff){const found=state.cart.find(x=>x.id===id&&x.variant===variant);if(!found)return;const p=productById(id),stock=p?.stock==null?Infinity:Number(p.stock),inCart=state.cart.filter(x=>x.id===id).reduce((n,x)=>n+x.qty,0);if(diff>0&&inCart>=stock){toast('Stock insuffisant');return}found.qty+=diff;if(found.qty<=0)state.cart=state.cart.filter(x=>x!==found);saveLocal();render()}
  function openProduct(id){
    const p=productById(id);if(!p)return;
    state.activeProduct=id;state.activeVariant=0;state.quantity=1;state.galleryIndex=0;
    renderProductDialog();
    const dialog=$('#product-dialog');if(!dialog.open)dialog.showModal();
    pulse();
  }
  function updateModalSelection(){
    const p=productById(state.activeProduct);if(!p)return;
    $('#dialog-content')?.querySelectorAll('[data-choice]').forEach(b=>{
      const active=Number(b.dataset.choice)===state.activeVariant;
      b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));
    });
    const price=$('#modal-price');if(price)price.textContent=fmt(p.variants?.[state.activeVariant]?.price);
    const qty=$('#modal-quantity');if(qty)qty.textContent=String(state.quantity);
    const buy=$('#modal-add');if(buy)buy.textContent='AJOUTER AU PANIER · '+fmt(money(p.variants?.[state.activeVariant]?.price)*state.quantity);
  }
  function showMediaError(video, extra=''){
    if(!video?.isConnected)return;
    const box=video.closest('.video-shell')?.querySelector('.video-error');
    if(!box)return;
    const mov=/\.mov(?:[?#]|$)/i.test(video.currentSrc||video.src);
    box.textContent=extra || (mov
      ? 'Cette vidéo .MOV n’est peut-être pas compatible avec ton téléphone. Convertis-la en MP4 H.264 / AAC et modifie le lien dans script.js.'
      : 'Lecture impossible. Vérifie le lien du fichier et son encodage MP4 H.264 / AAC.');
    box.hidden=false;
    const play=video.closest('.video-shell')?.querySelector('[data-play-video]');
    if(play)play.hidden=true;
  }
  async function startProductVideo(button){
    const video=button.closest('.video-shell')?.querySelector('video');if(!video)return;
    button.disabled=true;
    try{
      video.controls=true;
      await video.play();
      button.hidden=true;
    }catch(error){
      showMediaError(video);
    }finally{button.disabled=false}
  }
  function renderProductDialog(){
    const p=productById(state.activeProduct);if(!p)return;
    const medias=mediaOf(p),m=medias[state.galleryIndex],v=p.variants?.[state.activeVariant];
    const unavailable=p.stock!=null&&Number(p.stock)<=0;
    const imageFallback=medias.find(x=>x.type==='image')?.url||'';
    const poster=imageFallback?` poster="${esc(imageFallback)}"`:'';
    const gallery=m ? (m.type==='video'
      ? `<div class="video-shell"><video id="active-product-video" class="main-media" controls playsinline webkit-playsinline preload="metadata"${poster} src="${esc(m.url)}"></video><button class="video-play-overlay" data-play-video type="button" aria-label="Lancer la vidéo"><span class="play-disc">▶</span><span>LANCER LA VIDÉO</span></button><p class="video-error" role="alert" hidden></p></div>`
      : `<button class="image-zoom" type="button" data-zoom="${esc(m.url)}" aria-label="Agrandir la photo"><img class="main-media" src="${esc(m.url)}" alt="${esc(p.name)}"><span class="image-zoom-hint">⤢ &nbsp;AGRANDIR</span></button>`)
      : '<div class="modal-placeholder">◆</div>';
    const desc=String(p.description||'Découvrez cette pièce.');
    const short=desc.length>260;
    const description=short
      ? `<p class="description-lead">${esc(desc.slice(0,220).trim())}…</p><details class="description-fold"><summary>Lire la description complète <span>＋</span></summary><p>${esc(desc)}</p></details>`
      : `<p class="description-lead">${esc(desc)}</p>`;
    const thumbs=medias.length>1?`<div class="gallery-thumbnails" aria-label="Médias du produit">${medias.map((item,i)=>`<button type="button" data-gallery-index="${i}" class="gallery-thumb ${i===state.galleryIndex?'active':''}" aria-label="Afficher ${item.type==='video'?'la vidéo':'la photo'} ${i+1}" aria-current="${i===state.galleryIndex}">${item.type==='video'?`<span class="thumb-play">▶</span>`:`<img src="${esc(item.url)}" alt="" loading="lazy">`}</button>`).join('')}</div>`:'';
    $('#dialog-content').innerHTML=`<div class="modal-wrap luxe-modal">
      <div class="modal-gallery"><div class="gallery-stage"><button class="close-dialog" type="button" data-close="product" aria-label="Fermer la fiche">✕</button>${gallery}${medias.length?`<span class="gallery-index">${String(state.galleryIndex+1).padStart(2,'0')} <i>/</i> ${String(medias.length).padStart(2,'0')}</span>`:''}${medias.length>1?`<div class="gallery-arrows"><button type="button" data-gallery="-1" aria-label="Média précédent">‹</button><button type="button" data-gallery="1" aria-label="Média suivant">›</button></div>`:''}</div>${thumbs}</div>
      <div class="modal-details"><div class="modal-eyebrow">✦ &nbsp; DIAMANT BLEU · ${esc(REGIONS[state.region]?.name||'')}</div><span class="eyebrow">${esc(p.subcategory||catById(p.category_id)?.name||'COLLECTION')}</span><h2>${esc(p.name)}</h2><div class="modal-price-row"><span class="price" id="modal-price">${fmt(v?.price)}</span>${p.badge?`<span class="modal-badge">✦ ${esc(p.badge)}</span>`:''}</div><div class="description-wrap">${description}</div><div class="section-divider"></div><div class="eyebrow">CHOISIR UNE VARIANTE</div><div class="variant-grid">${(p.variants||[]).map((option,i)=>`<button class="variant ${i===state.activeVariant?'active':''}" type="button" data-choice="${i}" aria-pressed="${i===state.activeVariant}">${esc(option.label)}<b>${fmt(option.price)}</b></button>`).join('')}</div><div class="eyebrow">QUANTITÉ</div><div class="qty-controls" style="margin-top:12px"><button type="button" data-modal-qty="-1" aria-label="Réduire la quantité">−</button><strong id="modal-quantity">${state.quantity}</strong><button type="button" data-modal-qty="1" aria-label="Augmenter la quantité">+</button><span class="muted" style="font-size:11px">${unavailable?'Rupture de stock':p.stock==null?'Disponible':`${p.stock} disponible(s)`}</span></div><div class="modal-buy"><button class="btn btn-gold" id="modal-add" type="button" ${unavailable?'disabled':''}>AJOUTER AU PANIER · ${fmt(money(v?.price)*state.quantity)}</button></div><small class="modal-fineprint">✦ &nbsp; Le détail fait la différence.</small></div></div>`;
    const video=$('#active-product-video');
    if(video){
      video.addEventListener('play',()=>{
        const btn=video.closest('.video-shell')?.querySelector('[data-play-video]');if(btn)btn.hidden=true;
        // Donne la priorité au son de la vidéo sans désactiver l'ambiance choisie.
        if(music && !music.paused)music.volume=.06;
      });
      video.addEventListener('pause',()=>{if(music)music.volume=.22});
      video.addEventListener('ended',()=>{if(music)music.volume=.22});
      video.addEventListener('error',()=>showMediaError(video));
    }
  }
  function closeDialog(name){
    const el=$('#'+name+'-dialog');
    if(el?.open)el.close();
    if(name==='product'&&music)music.volume=.22;
  }
  function checkoutValues(){const form=$('#checkout-form');if(!form)return;const f=new FormData(form);for(const k of ['name','phone','address','notes','fulfillment'])state.checkout[k]=String(f.get(k)||'')}
  function setAddressVisibility(){const pickup=state.checkout.fulfillment==='pickup',e=$('#address-field');if(e)e.hidden=pickup;const addr=$('#cust-address');if(addr)addr.required=!pickup}
  // Telegram autorise sendData UNIQUEMENT quand la Mini App a été ouverte via un bouton de CLAVIER.
  function canSendToTelegram(){return !!(tg&&typeof tg.sendData==='function'&&tg.platform!=='unknown'&&new URLSearchParams(location.search).get('via')==='keyboard')}
  function makeOrderPayload(){const items=cartLines().map(({p,v,qty})=>({name:String(p.name).slice(0,100),variant:String(v.label).slice(0,60),qty,price:money(v.price)}));return {kind:'diamant_bleu_order',version:1,region:state.region,customer:{name:state.checkout.name.trim(),phone:state.checkout.phone.trim(),address:state.checkout.fulfillment==='pickup'?'':state.checkout.address.trim(),notes:state.checkout.notes.trim()},fulfillment:state.checkout.fulfillment,items,total:Math.round((cartTotal()+deliveryFee())*100)/100}}
  function makeOrderText(order){const mode={delivery:'Livraison',pickup:'Retrait',postal:'Expédition'}[order.fulfillment]||order.fulfillment;return [`💎 DEMANDE · DIAMANT BLEU ${REGIONS[order.region]?.name||''}`,`Client : ${order.customer.name}`,`Téléphone : ${order.customer.phone}`,`Réception : ${mode}`,order.customer.address?`Adresse : ${order.customer.address}`:'',...order.items.map(x=>`• ${x.qty} × ${x.name} (${x.variant}) · ${fmt(x.price*x.qty)}`),`Total indicatif : ${fmt(order.total)}`,order.customer.notes?`Précisions : ${order.customer.notes}`:'','Sous réserve de confirmation par la boutique.'].filter(Boolean).join('\n')}
  async function copyText(text){try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(text);return true}}catch{}const box=document.createElement('textarea');box.value=text;box.style.position='fixed';box.style.left='-9999px';document.body.append(box);box.select();const done=document.execCommand('copy');box.remove();return done}
  async function submitOrder(ev){ev.preventDefault();checkoutValues();const c=state.checkout;if(c.name.trim().length<2||c.phone.replace(/\D/g,'').length<6)return toast('Renseigne ton nom et ton téléphone');if(c.fulfillment!=='pickup'&&c.address.trim().length<8)return toast('Indique une adresse complète');const order=makeOrderPayload();if(!order.items.length)return toast('Panier vide');const msg=JSON.stringify(order);if(canSendToTelegram()){
      if(new TextEncoder().encode(msg).length>3900){toast('Demande trop longue : réduis le nombre de produits ou tes notes.');return}
      try{tg.sendData(msg);/* Telegram ferme la Mini App ; seule la réponse du bot confirme la réception. */}
      catch(e){toast('Envoi non disponible ; copie le récapitulatif à la place.');}
    }else{const ok=await copyText(makeOrderText(order));toast(ok?'Demande copiée : colle-la dans la conversation du commerçant.':'Copie impossible. Ouvre la boutique depuis le bouton du bot Telegram.')}
  }
  async function load(){state.loading=true;state.error='';render();try{const d=convertAppData(state.region);state.catalog={settings:{...emptyCatalog.settings,...(d.settings||{})},categories:d.categories,products:d.products};state.cart=state.cart.filter(x=>Number.isInteger(x.qty)&&x.qty>0&&Number.isInteger(x.variant)&&x.variant>=0&&productById(x.id)?.variants?.[x.variant]);const year=$('#year');if(year)year.textContent=new Date().getFullYear();const ann=$('#announcement-text');if(ann)ann.textContent=state.catalog.settings.announcement;try{tg?.ready();tg?.expand();tg?.setHeaderColor('#050a16');tg?.setBackgroundColor('#050a16')}catch{}}catch(e){state.error=e.message||'Erreur de lecture du catalogue'}finally{state.loading=false;render()}}
  document.addEventListener('click',e=>{
    const route=e.target.closest('[data-route]');if(route){e.preventDefault();navigate(route.dataset.route);return}
    const cat=e.target.closest('[data-category]');if(cat){state.category=cat.dataset.category;state.farm='all';state.query='';navigate('shop');return}
    const farm=e.target.closest('[data-farm]');if(farm){state.farm=farm.dataset.farm;render();return}
    const like=e.target.closest('[data-like]');if(like){e.preventDefault();e.stopPropagation();toggleFavorite(like.dataset.like);return}
    const prod=e.target.closest('[data-product]');if(prod){openProduct(prod.dataset.product);return}
    const play=e.target.closest('[data-play-video]');if(play){startProductVideo(play);return}
    const thumb=e.target.closest('[data-gallery-index]');if(thumb){state.galleryIndex=Number(thumb.dataset.galleryIndex);renderProductDialog();return}
    const gallery=e.target.closest('[data-gallery]');if(gallery){const p=productById(state.activeProduct),count=mediaOf(p).length;if(count){state.galleryIndex=(state.galleryIndex+Number(gallery.dataset.gallery)+count)%count;renderProductDialog()}return}
    const choice=e.target.closest('[data-choice]');if(choice){state.activeVariant=Number(choice.dataset.choice);updateModalSelection();pulse();return}
    const mq=e.target.closest('[data-modal-qty]');if(mq){const p=productById(state.activeProduct),limit=p.stock==null?50:Number(p.stock);state.quantity=Math.max(1,Math.min(limit,50,state.quantity+Number(mq.dataset.modalQty)));updateModalSelection();return}
    if(e.target.closest('#modal-add')){addToCart(state.activeProduct,state.activeVariant,state.quantity);closeDialog('product');return}
    const clos=e.target.closest('[data-close]');if(clos){closeDialog(clos.dataset.close);return}
    const zoom=e.target.closest('[data-zoom]');if(zoom){const uri=safeUrl(zoom.dataset.zoom);if(!uri)return;$('#media-content').innerHTML=`<img src="${esc(uri)}" alt="Aperçu agrandi">`;$('#media-dialog').showModal();return}
    const remove=e.target.closest('[data-remove]');if(remove){state.cart=state.cart.filter(x=>!(x.id===remove.dataset.remove&&x.variant===Number(remove.dataset.variant)));saveLocal();render();return}
    const cq=e.target.closest('[data-cart-qty]');if(cq){updateCartQuantity(cq.dataset.id,Number(cq.dataset.variant),Number(cq.dataset.cartQty));return}
    if(e.target.closest('#retry-load')){load();return}
  });
  document.addEventListener('input',e=>{if(e.target?.id==='shop-search'){state.query=e.target.value;updateShopResults()}});
  document.addEventListener('change',e=>{if(e.target?.id==='shop-sort'){state.sort=e.target.value;updateShopResults()}if(e.target?.name==='fulfillment'){checkoutValues();setAddressVisibility();const pane=$('#checkout-summary');if(pane)pane.innerHTML=renderSummary(true)}});
  document.addEventListener('submit',e=>{if(e.target?.id==='checkout-form')submitOrder(e)});
  document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('[data-product]'))openProduct(e.target.dataset.product)});
  for(const id of ['product-dialog','media-dialog']){const el=$('#'+id);el.addEventListener('click',ev=>{if(ev.target===el)el.close()});el.addEventListener('close',()=>{if(id==='product-dialog'){el.querySelectorAll('video').forEach(v=>v.pause());if(music)music.volume=.22}})}
  // Navigation tactile entre photos/vidéos, sans bloquer les contrôles natifs.
  let swipeStart=null;
  $('#product-dialog').addEventListener('touchstart',ev=>{
    const node=ev.target;
    if(node.closest('video,button,.gallery-thumbnails')){swipeStart=null;return}
    if(node.closest('.gallery-stage')&&ev.touches.length===1)swipeStart={x:ev.touches[0].clientX,y:ev.touches[0].clientY};
  },{passive:true});
  $('#product-dialog').addEventListener('touchend',ev=>{
    if(!swipeStart||!ev.changedTouches.length)return;
    const dx=ev.changedTouches[0].clientX-swipeStart.x;
    const dy=ev.changedTouches[0].clientY-swipeStart.y;
    swipeStart=null;
    if(Math.abs(dx)<48||Math.abs(dy)>Math.abs(dx)*.7)return;
    const p=productById(state.activeProduct),total=mediaOf(p).length;
    if(total>1){state.galleryIndex=(state.galleryIndex+(dx<0?1:-1)+total)%total;renderProductDialog()}
  },{passive:true});
  // Trait de lumière très discret indiquant la progression de la page.
  let progressScheduled=false;
  window.addEventListener('scroll',()=>{
    if(progressScheduled)return;progressScheduled=true;
    requestAnimationFrame(()=>{
      const max=document.documentElement.scrollHeight-innerHeight;
      const bar=$('#reading-progress');if(bar)bar.style.transform=`scaleX(${max>0?Math.max(0,Math.min(1,scrollY/max)):0})`;
      progressScheduled=false;
    });
  },{passive:true});
  // Animation d'apparition déclenchée à l'entrée du viewport.
  let revealObserver;
  let introInProgress=false;
  function revealCards(){
    if(introInProgress)return;
    if(revealObserver)revealObserver.disconnect();
    document.querySelectorAll('#view .section-heading,#view .trust-item,#view .feature-banner,#view .page-head,#view .farm-tile').forEach(el=>el.classList.add('reveal-soft'));
    const els=[...document.querySelectorAll('#view .reveal,#view .reveal-soft')];
    if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(e=>e.classList.add('visible'));return;}
    revealObserver=new IntersectionObserver(entries=>{
      for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}
    },{threshold:.08,rootMargin:'0px 0px 40px 0px'});
    els.forEach((el,i)=>{el.style.setProperty('--reveal-delay',`${Math.min(i%8,4)*65}ms`);revealObserver.observe(el)});
  }

  const music=$('#luxury-audio');
  let musicEnabled=false;
  function updateMusic(){const btn=$('#music-toggle');if(!btn)return;btn.textContent=musicEnabled&&!music.paused?'♫':'♪';btn.setAttribute('aria-pressed',String(musicEnabled&&!music.paused));btn.setAttribute('aria-label',musicEnabled&&!music.paused?'Couper la musique':'Activer la musique');btn.title=btn.getAttribute('aria-label')}
  async function setMusic(enabled){
    musicEnabled=enabled;
    try{if(enabled){music.volume=.22;await music.play()}else music.pause()}
    catch(e){musicEnabled=false;music.pause();toast('Appuie sur ♪ pour activer la musique')}
    updateMusic();
  }
  $('#music-toggle').addEventListener('click',()=>setMusic(!musicEnabled));
  music.addEventListener('pause',updateMusic);
  music.addEventListener('play',updateMusic);

  // Afficher à nouveau le sélecteur pour changer de région, même après la sélection.
  function openSelector(){
    setMusic(false);
    const gate=$('#region-gate');gate.classList.remove('is-hidden');gate.setAttribute('aria-hidden','false');
    document.body.classList.add('region-locked');
    state.region='';
    gate.classList.remove('is-selecting');
    gate.querySelectorAll('.region-option').forEach(b=>b.classList.remove('selected'));
    gate.dataset.busy='';
  }
  $('#change-region').addEventListener('click',openSelector);

  // Réalisé sans vidéo lourde : chaque carreau du logo se réassemble en perspective.
  function createMosaic(region){
    const grid=$('#intro-mosaic');
    const cols=7, rows=7, fragment=document.createDocumentFragment();
    grid.replaceChildren();
    grid.style.setProperty('--mosaic-image',`url("${REGIONS[region].logo}")`);
    for(let r=0;r<rows;r++)for(let col=0;col<cols;col++){
      const tile=document.createElement('span');
      tile.className='intro-tile';
      tile.style.setProperty('--bx',`${col*100/(cols-1)}%`);
      tile.style.setProperty('--by',`${r*100/(rows-1)}%`);
      tile.style.setProperty('--delay',`${Math.round((Math.abs(col-3)+Math.abs(r-3))*43+(col*17+r*11)%60)}ms`);
      tile.style.setProperty('--tx',`${(col-3)*48}px`);
      tile.style.setProperty('--ty',`${(r-3)*43}px`);
      tile.style.setProperty('--rz',`${(col+r)%2 ? 24 : -24}deg`);
      fragment.append(tile);
    }
    grid.append(fragment);
  }
  const sleep = milliseconds=>new Promise(resolve=>setTimeout(resolve,milliseconds));
  const reduceMotion=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let openingFinished=false;
  let openingTimer;
  let openingResolve;
  const openingPromise=new Promise(resolve=>{openingResolve=resolve});
  function finishOpening(){
    if(openingFinished)return;
    openingFinished=true;
    clearTimeout(openingTimer);
    const opening=$('#opening-cinema'),gate=$('#region-gate');
    opening.classList.add('is-finishing');
    gate.classList.add('gate-ready');
    const delay=reduceMotion()?0:650;
    setTimeout(()=>{opening.hidden=true;opening.setAttribute('aria-hidden','true');openingResolve();},delay);
  }
  // Les petites particules donnent de la profondeur sans utiliser de vidéo en autoplay.
  const stars=$('#cinema-stars');
  for(let i=0;i<25;i++){
    const star=document.createElement('i');
    star.style.setProperty('--sx',`${(i*67+13)%100}%`);
    star.style.setProperty('--sy',`${(i*31+7)%100}%`);
    star.style.setProperty('--sd',`${(i*13)%20/10}s`);
    stars.append(star);
  }
  $('#skip-cinema').addEventListener('click',finishOpening);
  openingTimer=setTimeout(finishOpening,reduceMotion()?120:2700);

  async function selectRegion(region){
    const gate=$('#region-gate');
    if(!REGIONS[region]||gate.dataset.busy==='yes')return;
    gate.dataset.busy='yes';
    const chosen=gate.querySelector(`[data-select-region="${region}"]`);
    chosen?.classList.add('selected');
    gate.classList.add('is-selecting');
    introInProgress=true;
    state.region=region;
    state.route='home';state.category='all';state.farm='all';state.query='';state.sort='featured';
    state.favorites=new Set(loadJSON(region+'_favorites')||[]);
    state.cart=loadJSON(region+'_cart')||[];
    state.checkout={fulfillment:'delivery',address:'',notes:'',phone:'',name:''};
    document.documentElement.dataset.region=region;
    const logo=REGIONS[region].logo;
    for(const id of ['brand-logo','footer-logo','intro-logo']){const node=$('#'+id);if(node)node.src=logo}
    const brand=$('#brand-region');if(brand)brand.textContent=REGIONS[region].name;
    const icon=$('#site-icon');if(icon)icon.href=logo;
    document.title='DIAMANT BLEU · '+REGIONS[region].name;
    $('#intro-region-name').textContent=REGIONS[region].name;
    $('#intro-status').textContent=region==='bretagne'?'ENTRÉE DANS L’UNIVERS BRETAGNE':'ENTRÉE DANS L’UNIVERS IDF';
    createMosaic(region);
    // API full screen disponible uniquement sur certaines versions/clients Telegram.
    try{tg?.ready();tg?.expand();tg?.setHeaderColor('#050a16');tg?.setBackgroundColor('#050a16');
      if(tg?.requestFullscreen&&(!tg.isVersionAtLeast||tg.isVersionAtLeast('8.0')))tg.requestFullscreen();
    }catch(_){/* Le site fonctionne aussi sans plein écran. */}
    const intro=$('#intro-screen');
    // Mettre le cinématique au premier plan avant de masquer le sélecteur.
    await sleep(reduceMotion()?0:220);
    intro.classList.remove('is-revealing');
    intro.classList.add('show');
    intro.setAttribute('aria-hidden','false');
    gate.classList.add('is-hidden');gate.setAttribute('aria-hidden','true');
    document.body.classList.remove('region-locked');
    try{
      await Promise.all([load(),sleep(reduceMotion()?100:3150)]);
    }finally{
      $('#intro-status').textContent='BIENVENUE DANS VOTRE MAISON';
      intro.classList.add('is-revealing');
      document.body.classList.add('shop-just-opened');
      await sleep(reduceMotion()?0:760);
      intro.classList.remove('show','is-revealing');
      intro.setAttribute('aria-hidden','true');
      // Révéler les produits après avoir retiré l'écran cinématique.
      introInProgress=false;
      revealCards();
      if(state.route==='home')scrollTo({top:0,behavior:'instant'});
      setTimeout(()=>document.body.classList.remove('shop-just-opened'),reduceMotion()?0:1500);
      gate.classList.remove('is-selecting');
      gate.querySelectorAll('.region-option').forEach(b=>b.classList.remove('selected'));
      gate.dataset.busy='';
    }
  }
  document.querySelectorAll('[data-select-region]').forEach(btn=>btn.addEventListener('click',()=>{
    if(openingFinished)selectRegion(btn.dataset.selectRegion);
  }));
  // Pas d'autoplay sonore forcé : les navigateurs Telegram/iOS peuvent le bloquer.
  // La musique se lance uniquement après appui sur le bouton ♪.
  try{tg?.ready();tg?.expand();}catch(_){ }
  const selectedFromLink=new URLSearchParams(location.search).get('region');
  if(selectedFromLink && REGIONS[selectedFromLink])openingPromise.then(()=>selectRegion(selectedFromLink));
})();
