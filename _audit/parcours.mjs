/* Parcours propres à Manawa : filtres de la carte des soins (adresse ?envie=), envies de l'accueil,
   carte cadeau (montant égal au soin choisi), statut des horaires (jamais la phrase d'attente). */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    /* Filtre « Visage » : seuls les soins du visage restent, l'adresse garde le choix. */
    await page.goto(BASE + '/soins', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('[data-filtres] [data-envie="visage"]').click();
    await attendre(700);
    const f = await page.evaluate(() => ({
      visibles: [...document.querySelectorAll('.soin-ancre:not([hidden])')].map((e) => e.dataset.envies),
      adresse: location.search,
    }));
    if (!f.visibles.length || f.visibles.some((e) => !e.split(' ').includes('visage'))) R.echec('filtres', `soins visibles après « Visage » : ${f.visibles.join(' | ')}`, { page: '/soins', taille: '390×844' });
    if (!f.adresse.includes('envie=visage')) R.echec('filtres', 'le choix n’est pas gardé dans l’adresse', { page: '/soins' });
    await page.goto(BASE + '/soins?envie=silhouette', { waitUntil: 'load' });
    await attendrePret(page);
    const g = await page.evaluate(() => [...document.querySelectorAll('.soin-ancre:not([hidden])')].map((e) => e.id));
    if (!g.length || g.some((id) => !['massage-silhouette', 'maderotherapie'].includes(id))) R.echec('filtres', `adresse ?envie=silhouette : ${g.join(', ')}`, { page: '/soins' });

    /* Envies de l'accueil : « Pour mon enfant » montre le massage enfant. */
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('[data-envies-choix] [data-envie="enfant"]').click();
    await attendre(900);
    const e = await page.evaluate(() => [...document.querySelectorAll('.mini-soin[data-pour]:not([hidden])')].map((li) => li.dataset.pour));
    if (!e.length || e.some((x) => x !== 'enfant')) R.echec('envies', `soins montrés pour « enfant » : ${e.join(', ')}`, { page: '/', taille: '390×844' });

    /* Carte cadeau : le montant affiché est celui du soin choisi. */
    await page.locator('#offrir [data-prix-cadeau="75"]').click();
    await attendre(1500);
    const m = await page.evaluate(() => document.querySelector('#offrir [data-cadeau-prix]').textContent.trim());
    if (m !== '75') R.echec('carte cadeau', `montant ${m} au lieu de 75`, { page: '/', taille: '390×844' });

    /* Statut des horaires : calculé partout. */
    for (const p of ['/', '/contact']) {
      await page.goto(BASE + p, { waitUntil: 'load' });
      await attendrePret(page);
      const s = await page.evaluate(() => [...document.querySelectorAll('[data-statut-texte]')].map((x) => x.textContent));
      if (s.some((x) => /sur Planity$/.test(x))) R.echec('horaires', `statut non calculé : ${s.join(' | ')}`, { page: p });
    }
  } finally { await ctx.close(); }
}
