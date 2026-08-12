// Real media coverage of La French Tech Phnom Penh.
export type PressItem = {
  outlet: string;
  title: string;
  date: string; // ISO
  kind: "Article" | "Interview" | "Communiqué";
  url: string;
};

export const press: PressItem[] = [
  {
    outlet: "Cambodia Investment Review",
    title:
      "La French Tech Phnom Penh unveils new 2026–2028 board ahead of the Francophonie Summit",
    date: "2026-03-24",
    kind: "Article",
    url: "https://cambodiainvestmentreview.com/2026/03/24/la-french-tech-phnom-penh-unveils-new-2026-2028-board-ahead-of-francophonie-summit-signaling-push-for-cambodia-as-regional-innovation-hub/",
  },
  {
    outlet: "Cambodia Investment Review",
    title:
      "AI and emerging markets take center stage as La French Tech Phnom Penh draws 150+ to its startup event",
    date: "2026-06-18",
    kind: "Article",
    url: "https://cambodiainvestmentreview.com/2026/06/18/ai-and-emerging-markets-take-center-stage-as-la-french-tech-phnom-penh-draws-150-to-startup-event-at-the-last-stage-aquation-theater-on-koh-pich/",
  },
  {
    outlet: "Cambodia Investment Review",
    title:
      "French Tech Phnom Penh renews label within a global network spanning 57 countries",
    date: "2026-05-21",
    kind: "Article",
    url: "https://cambodiainvestmentreview.com/2026/05/21/french-tech-phnom-penh-renews-label-within-global-network-spanning-57-countries/",
  },
  {
    outlet: "Cambodge Mag",
    title:
      "Nouveau bureau exécutif de la communauté tech avant le Sommet de la Francophonie",
    date: "2026-03-22",
    kind: "Article",
    url: "https://www.cambodgemag.com/en/post/new-tech-community-executive-board-takes-office-ahead-of-francophonie-summit",
  },
  {
    outlet: "Khmer Times",
    title: "Over 150 join first French Tech Phnom Penh event",
    date: "2026-06-17",
    kind: "Article",
    url: "https://www.khmertimeskh.com/501924936/over-150-join-first-french-tech-phnom-penh-event/",
  },
  {
    outlet: "Mission French Tech",
    title: "Labellisation des Capitales et Communautés 2026-2028",
    date: "2026-05-06",
    kind: "Communiqué",
    url: "https://lafrenchtech.gouv.fr/",
  },
];
