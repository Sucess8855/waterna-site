export interface Person {
  /** Set to true while the entry still needs real content before going live. */
  draft?: boolean;
  name: string;
  role: string;
  /** Bio is written later — leave as an empty array until then. */
  bio: string[];
  education: string[];
  credentials: string[];
  focus: string[];
}

export const team: Person[] = [
  {
    draft: true,
    name: 'Mohamed Oulabi',
    // TODO: confirm — CV says Principal Process Engineer, but as founder
    // this may want to read "Founder & Principal Process Engineer".
    role: 'Founder & Principal Process Engineer',
    // Bio to be written later.
    bio: [],
    // Taken from his CV — verified, so safe to show now.
    education: [
      'MSc Water & Wastewater Engineering, Cranfield University',
      'MSc Engineering Management, Brunel University London',
      'BSc Chemical Engineering, Jordan University of Science & Technology',
    ],
    credentials: [
      'Chartered Member of IChemE',
      'Member, UK Engineering Council',
      'Member, Institute of Water',
    ],
    focus: ['Produced water', 'Industrial water', 'Plant operation', 'Front-end engineering'],
  },
];
