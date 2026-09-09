/**
 * Lingua Academy - Courses Filtering, Search & Dynamic Course Details Engine
 */

const LINGUA_COURSES_DATA = {
    'spoken-english': {
        id: 'spoken-english',
        title: 'Spoken English & Conversational Mastery',
        shortTitle: 'Spoken English',
        breadcrumb: 'Spoken English',
        badges: [
            { text: 'English Language', class: 'badge-orange' },
            { text: 'CEFR A1 - B2', class: 'badge-teal' },
            { text: 'Hybrid & Online', class: 'badge-blue' }
        ],
        lead: 'Transform your spoken fluency, eliminate hesitation, overcome accent barriers, and communicate effortlessly in professional and social environments.',
        rating: '4.9/5',
        reviewsCount: '840',
        duration: '12 Weeks (48 Live Hours)',
        batchSize: 'Max 12 Students/Batch',
        support: 'English & Native Support',
        price: '$199',
        priceSub: '/ full track',
        badgeExtra: 'Flexible Installments Available',
        features: [
            '48 Live Interactive Sessions',
            'Unlimited Daily Conversation Clubs',
            'CEFR Certified Diploma',
            '1-on-1 Accent Feedback'
        ],
        outcomes: [
            { icon: 'bi-check2-circle', title: 'Conversational Rhythm', desc: 'Learn connected speech, contractions, and natural sentence pacing to sound like a native.' },
            { icon: 'bi-check2-circle', title: 'Vocabulary Expansion', desc: 'Master 1,200+ high-frequency idioms, phrasal verbs, and professional expressions.' },
            { icon: 'bi-check2-circle', title: 'Grammar without Drills', desc: 'Internalize tenses, prepositions, and active/passive voice through real-world roleplay.' },
            { icon: 'bi-check2-circle', title: 'Public Speaking & Debates', desc: 'Participate in weekly group discussions to overcome stage fright and impromptu speaking fear.' }
        ],
        modules: [
            {
                title: 'Module 1: Building Fluency Foundations (Weeks 1 - 3)',
                items: [
                    'Overcoming vocal hesitation and mother-tongue interference.',
                    'Everyday social greetings, small talk, and introductions.',
                    'Core sentence structures & avoiding common grammatical errors.'
                ]
            },
            {
                title: 'Module 2: Vocabulary & Accent Clarity (Weeks 4 - 6)',
                items: [
                    'Phonetics, vowel sounds, and consonant pronunciation.',
                    'Phrasal verbs for workplace and casual conversation.',
                    'Listening comprehension & responding accurately.'
                ]
            },
            {
                title: 'Module 3: Advanced Conversation & Debates (Weeks 7 - 9)',
                items: [
                    'Formulating opinions, agreeing/disagreeing gracefully.',
                    'Telephone etiquette & virtual meeting discussions.',
                    'Interactive group debates on contemporary topics.'
                ]
            },
            {
                title: 'Module 4: Presentation & CEFR Assessment (Weeks 10 - 12)',
                items: [
                    '5-minute individual capstone speech presentation.',
                    '1-on-1 oral assessment with senior faculty evaluator.',
                    'CEFR B2 Level Diploma Certification issuance.'
                ]
            }
        ],
        trainer: {
            name: 'Sarah Jenkins',
            role: 'Head of English',
            credentials: 'CELTA Certified | 10+ Yrs Exp',
            bio: 'Specializes in accent reduction, stage confidence, and adult speech anxiety.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
        }
    },
    'ielts': {
        id: 'ielts',
        title: 'IELTS Academic & General Prep (Band 8.0+)',
        shortTitle: 'IELTS (Band 8.0+)',
        breadcrumb: 'IELTS Prep',
        badges: [
            { text: 'IELTS Masterclass', class: 'badge-purple' },
            { text: 'Band 8.0+ Target', class: 'badge-teal' },
            { text: 'Cambridge Aligned', class: 'badge-orange' }
        ],
        lead: 'Intensive Cambridge & British Council aligned test preparation covering Listening, Reading, Writing Task 1/2 essay evaluations, and live 1-on-1 Speaking mock interviews.',
        rating: '4.9/5',
        reviewsCount: '1,250',
        duration: '10 Weeks (40 Live Hours)',
        batchSize: 'Max 8 Students/Batch',
        support: 'Certified IELTS Examiners',
        price: '$299',
        priceSub: '/ full track',
        badgeExtra: 'Guaranteed Band Score Improvement',
        features: [
            '10 Full-Length Mock Exams with Official Grading',
            'Personalized Essay & Writing Corrections within 24h',
            '1-on-1 Speaking Interview Simulations with Rubric Feedback',
            'Official Cambridge Practice Material Included'
        ],
        outcomes: [
            { icon: 'bi-check2-circle', title: 'Rapid Reading Techniques', desc: 'Skim and scan complex academic papers in under 60 seconds with 95%+ accuracy.' },
            { icon: 'bi-check2-circle', title: 'Band 9 Essay Templates', desc: 'Structure persuasive arguments, cohesive paragraphs, and complex lexical sentences.' },
            { icon: 'bi-check2-circle', title: 'Listening Accents Decoding', desc: 'Master British, Australian, and North American accents with distractor avoidance.' },
            { icon: 'bi-check2-circle', title: '1-on-1 Speaking Mastery', desc: 'Develop fluent, natural responses for Part 1, 2 (Cue Card), and 3 discussions.' }
        ],
        modules: [
            {
                title: 'Module 1: Listening & Reading Speed Strategies (Weeks 1 - 3)',
                items: [
                    'Predicting answers, signpost words, and table completion.',
                    'Headings matching, True/False/Not Given, and multiple choice tactics.',
                    'Time management: Completing 3 passages in 55 minutes.'
                ]
            },
            {
                title: 'Module 2: Writing Task 1 Visuals & Letters (Weeks 4 - 5)',
                items: [
                    'Academic Task 1: Describing bar charts, line graphs, maps, and processes.',
                    'General Training Task 1: Formal, semi-formal, and informal letter structures.',
                    'Key vocabulary for trends, comparisons, and proportions.'
                ]
            },
            {
                title: 'Module 3: Writing Task 2 Discursive Essays (Weeks 6 - 8)',
                items: [
                    'Opinion essays, Problem-Solution, and Discussion essays.',
                    'Cohesion, coherence, and advanced grammatical range.',
                    'Live timed essay writing workshops with line-by-line feedback.'
                ]
            },
            {
                title: 'Module 4: Speaking Interviews & Full Exam Simulations (Weeks 9 - 10)',
                items: [
                    'Part 2 Cue Card impromptu 1-minute planning masterclass.',
                    'Idiomatic language & discourse markers for fluency.',
                    'Full-length computer-delivered & paper-based mock exam series.'
                ]
            }
        ],
        trainer: {
            name: 'Dr. Robert Sterling',
            role: 'Lead IELTS Master Trainer',
            credentials: 'Ex-British Council Examiner | 14+ Yrs Exp',
            bio: 'Has mentored over 3,500 students to achieve Band 7.5 to 8.5 in their first official attempt.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
        }
    },
    'french': {
        id: 'french',
        title: 'French Language Immersion (DELF/DALF A1 - C1)',
        shortTitle: 'French (DELF/DALF)',
        breadcrumb: 'French Immersion',
        badges: [
            { text: 'French (Français)', class: 'badge-blue' },
            { text: 'CEFR A1 - C1', class: 'badge-teal' },
            { text: 'Native Faculty', class: 'badge-orange' }
        ],
        lead: 'Immerse yourself in authentic French pronunciation, Parisian culture, grammatical finesse, and DELF/DALF official international certification coaching.',
        rating: '4.8/5',
        reviewsCount: '620',
        duration: '14 Weeks (56 Live Hours)',
        batchSize: 'Max 10 Students/Batch',
        support: 'Native Parisian Instructors',
        price: '$249',
        priceSub: '/ full track',
        badgeExtra: 'Official DELF Examination Aligned',
        features: [
            '56 Live Interactive Hours with Native Speakers',
            'Weekly Francophone Cinema & Cultural Clubs',
            'DELF A1 - B2 Examination Mock Papers',
            'Comprehensive Digital Workbook Pack & Audio Labs'
        ],
        outcomes: [
            { icon: 'bi-check2-circle', title: 'French Phonetics & Liaison', desc: 'Master nasal vowels, liaison, silent endings, and clear Parisian articulation.' },
            { icon: 'bi-check2-circle', title: 'Conversational Fluency', desc: 'Order at cafes, ask for directions, debate current affairs, and socialize in Paris.' },
            { icon: 'bi-check2-circle', title: 'Grammar & Conjugation', desc: 'Effortlessly master Passé Composé, Imparfait, Subjonctif, and Conditionnel.' },
            { icon: 'bi-check2-circle', title: 'DELF Exam Success', desc: 'Pass official French ministry CEFR certification for migration and university admission.' }
        ],
        modules: [
            {
                title: 'Module 1: Foundations, Greetings & Phonetics (Weeks 1 - 4)',
                items: [
                    'French alphabet, accent marks, and pronunciation fundamentals.',
                    'Introducing oneself, numbers, ordering food, and everyday questions.',
                    'Present tense conjugation of regular (-er, -ir, -re) and irregular verbs.'
                ]
            },
            {
                title: 'Module 2: Past Events, Travel & Daily Routines (Weeks 5 - 8)',
                items: [
                    'Passé Composé vs Imparfait for storytelling and narratives.',
                    'Pronominal verbs, time expressions, and navigating French cities.',
                    'Listening comprehension with authentic French podcasts and audio.'
                ]
            },
            {
                title: 'Module 3: Complex Discussions & Future Plans (Weeks 9 - 11)',
                items: [
                    'Futur Simple, Conditionnel, and expressing polite requests.',
                    'Direct & indirect object pronouns (COD/COI, y, en).',
                    'Debating culture, art, cinema, and modern Francophone society.'
                ]
            },
            {
                title: 'Module 4: Subjunctive Mastery & DELF Simulations (Weeks 12 - 14)',
                items: [
                    'Subjonctif Présent for wishes, emotions, and doubts.',
                    'DELF written essay production and formal correspondence.',
                    'Live oral evaluation simulations with certified DELF assessors.'
                ]
            }
        ],
        trainer: {
            name: 'Camille Laurent',
            role: 'Senior French Instructor',
            credentials: 'Alliance Française Certified | Sorbonne Alum',
            bio: 'Passionate native Parisian educator specializing in phonetics, literature, and DELF B2 prep.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
        }
    },
    'german': {
        id: 'german',
        title: 'German Language (Goethe-Zertifikat A1 - C1)',
        shortTitle: 'German (Goethe Prep)',
        breadcrumb: 'German Language',
        badges: [
            { text: 'German (Deutsch)', class: 'badge-teal' },
            { text: 'Goethe A1 - C1', class: 'badge-purple' },
            { text: 'Visa & Career Track', class: 'badge-orange' }
        ],
        lead: 'Structured German training designed for students and working professionals migrating to Germany, Austria, or Switzerland for tech, healthcare, and university careers.',
        rating: '4.9/5',
        reviewsCount: '780',
        duration: '16 Weeks (64 Live Hours)',
        batchSize: 'Max 10 Students/Batch',
        support: 'Goethe Certified Instructors',
        price: '$269',
        priceSub: '/ full track',
        badgeExtra: 'Visa & University Certified',
        features: [
            '64 Live Interactive Hours with Expert Faculty',
            'Official Goethe-Institut & TestDaF Question Bank',
            'German Technical, Medical & Workplace Vocabulary',
            'Free 1-on-1 German Visa Interview Simulation'
        ],
        outcomes: [
            { icon: 'bi-check2-circle', title: 'German Cases Mastery', desc: 'Understand Nominativ, Akkusativ, Dativ, and Genitiv with simple mental models.' },
            { icon: 'bi-check2-circle', title: 'Workplace Spoken Fluency', desc: 'Participate confidently in German office scrums, client meetings, and social gatherings.' },
            { icon: 'bi-check2-circle', title: 'Goethe Exam Speed Tactics', desc: 'Solve reading, listening, and writing exam sections with high accuracy.' },
            { icon: 'bi-check2-circle', title: 'Formal Business Writing', desc: 'Write professional emails, cover letters, and university motivation letters.' }
        ],
        modules: [
            {
                title: 'Module 1: German Essentials & Daily Life (Weeks 1 - 4)',
                items: [
                    'Pronunciation, umlauts (ä, ö, ü), and definite/indefinite articles (der, die, das).',
                    'Akkusativ case, modal verbs (können, müssen, wollen), and daily routines.',
                    'Asking questions, shopping, dining out, and time management.'
                ]
            },
            {
                title: 'Module 2: Dative Case, Prepositions & Past Tense (Weeks 5 - 8)',
                items: [
                    'Dativ case with two-way prepositions (Wechselpräpositionen).',
                    'Perfekt and Präteritum past tenses for recounting events.',
                    'Describing living arrangements, health, appointments, and navigation.'
                ]
            },
            {
                title: 'Module 3: Subordinate Clauses & Professional Deutsch (Weeks 9 - 13)',
                items: [
                    'Nebensätze with weil, dass, wenn, and relative clauses.',
                    'Passiv voice and Konjunktiv II for polite requests and hypotheticals.',
                    'German workplace culture, formal emails, and telephone etiquette.'
                ]
            },
            {
                title: 'Module 4: Goethe Exam Drilling & Mock Testing (Weeks 14 - 16)',
                items: [
                    'Hören, Lesen, Schreiben, and Sprechen timed examination mocks.',
                    'Speaking partner pairing with real Goethe examiners.',
                    'Final certification readiness audit and feedback.'
                ]
            }
        ],
        trainer: {
            name: 'Klaus Weber',
            role: 'Head of Germanic Studies',
            credentials: 'DAAD Scholar | Goethe C2 Master Coach',
            bio: 'Over 12 years of experience preparing engineers, healthcare workers, and students for life in Germany.',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
        }
    },
    'spanish': {
        id: 'spanish',
        title: 'Spanish Conversational Mastery (DELE A1 - B2 Track)',
        shortTitle: 'Spanish (DELE Track)',
        breadcrumb: 'Spanish Mastery',
        badges: [
            { text: 'Spanish (Español)', class: 'badge-orange' },
            { text: 'CEFR A1 - B2', class: 'badge-teal' },
            { text: 'Interactive Lab', class: 'badge-blue' }
        ],
        lead: 'Learn dynamic Spanish conversation, lively Latin American & Castilian cultural nuances, travel survival fluency, and DELE international certification preparation.',
        rating: '4.8/5',
        reviewsCount: '510',
        duration: '12 Weeks (48 Live Hours)',
        batchSize: 'Max 12 Students/Batch',
        support: 'Bilingual Native Mentors',
        price: '$219',
        priceSub: '/ full track',
        badgeExtra: 'Instituto Cervantes Aligned Curriculum',
        features: [
            '48 Hours of Interactive Speaking Labs',
            'Weekly Spanish Cultural & Music Immersion Nights',
            'DELE Preparation Material & Mock Exam Series Included',
            'Mobile Vocabulary App with Spaced Repetition'
        ],
        outcomes: [
            { icon: 'bi-check2-circle', title: 'Subjunctive & Past Flow', desc: 'Effortlessly switch between Pretérito Perfecto, Indefinido, and Subjuntivo.' },
            { icon: 'bi-check2-circle', title: 'Travel & Social Ease', desc: 'Chat naturally in restaurants, markets, festivals, and travel hubs across Spain and the Americas.' },
            { icon: 'bi-check2-circle', title: 'Regional Dialect Mastery', desc: 'Understand differences between Iberian Spanish, Mexican, Argentine, and Colombian expressions.' },
            { icon: 'bi-check2-circle', title: 'DELE Certification Success', desc: 'Build the writing and oral proficiency required to earn certified DELE diplomas.' }
        ],
        modules: [
            {
                title: 'Module 1: ¡Hola! Pronunciation, Basics & Social Small Talk (Weeks 1 - 3)',
                items: [
                    'Spanish alphabet, rolled R’s, Ser vs Estar distinctions.',
                    'Greetings, hobbies, family, numbers, and basic sentence questions.',
                    'Present tense regular and irregular verb conjugations.'
                ]
            },
            {
                title: 'Module 2: Storytelling in Past & Future Tenses (Weeks 4 - 6)',
                items: [
                    'Pretérito Indefinido vs Imperfecto for telling stories.',
                    'Direct and indirect object pronouns (me, te, lo, la, le).',
                    'Expressing plans with Futuro Imperfecto and Ir + a + infinitive.'
                ]
            },
            {
                title: 'Module 3: Subjunctive Mastery & Expressing Opinions (Weeks 7 - 9)',
                items: [
                    'Presente de Subjuntivo for desires, doubts, and emotions.',
                    'Imperativo for recipes, instructions, and friendly advice.',
                    'Debates on Latin American history, cuisine, and contemporary society.'
                ]
            },
            {
                title: 'Module 4: DELE Exam Format & Conversational Capstone (Weeks 10 - 12)',
                items: [
                    'DELE written expression and reading comprehension simulations.',
                    'Live oral interview with bilingual evaluators.',
                    'Graduation speech showcase and certificate issuance.'
                ]
            }
        ],
        trainer: {
            name: 'Elena Rodriguez',
            role: 'Lead Spanish Mentor',
            credentials: 'Madrid Native | DELE Master Certified',
            bio: 'Specializes in communicative language teaching, accent neutralization, and cultural immersion.',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
        }
    },
    'public-speaking': {
        id: 'public-speaking',
        title: 'Public Speaking & Executive Presentation Skills',
        shortTitle: 'Public Speaking',
        breadcrumb: 'Public Speaking',
        badges: [
            { text: 'Leadership & Speaking', class: 'badge-orange' },
            { text: 'Executive Track', class: 'badge-purple' },
            { text: 'Studio Lab', class: 'badge-teal' }
        ],
        lead: 'Conquer stage fright, project authority, command audience attention, master body language, and deliver unforgettable keynote presentations and boardroom pitches.',
        rating: '5.0/5',
        reviewsCount: '490',
        duration: '6 Weeks (24 Live Hours)',
        batchSize: 'Max 8 Students/Batch',
        support: 'TEDx Speaker Coaches',
        price: '$189',
        priceSub: '/ full track',
        badgeExtra: 'Live Video Recording & Feedback Included',
        features: [
            '24 Hours of Live Practical Speech Coaching',
            'Video-Recorded Speech Critiques & Body Language Analysis',
            'TEDx Presentation Framing Blueprint',
            'Impromptu Toastmasters-Style Speaking Labs'
        ],
        outcomes: [
            { icon: 'bi-check2-circle', title: 'Overcoming Stage Anxiety', desc: 'Harness nervous energy, eliminate filler words (ums/ahs), and build calm authority.' },
            { icon: 'bi-check2-circle', title: 'Vocal Dynamics & Pauses', desc: 'Use resonance, pacing, and strategic silence to keep listeners on the edge of their seats.' },
            { icon: 'bi-check2-circle', title: 'Storytelling Architecture', desc: 'Structure high-stakes pitches using the Hook-Story-Offer and Aristotle persuasion models.' },
            { icon: 'bi-check2-circle', title: 'Handling Q&A with Poise', desc: 'Answer unexpected, aggressive, or complex questions smoothly without flustering.' }
        ],
        modules: [
            {
                title: 'Module 1: Presence, Posture & Conquering Stage Anxiety (Weeks 1 - 2)',
                items: [
                    'Somatic breathing exercises and mental framing before stepping on stage.',
                    'Open body language, micro-expressions, and intentional eye contact.',
                    'Eliminating pacing, hand tremors, and voice shaking.'
                ]
            },
            {
                title: 'Module 2: Voice Modulation, Pauses & Vocal Variety (Weeks 3 - 4)',
                items: [
                    'Pitch, pace, volume, and tonal inflection for maximum impact.',
                    'The power of the pregnant pause to emphasize crucial takeaways.',
                    'Eliminating monotonic delivery and robotic slide reading.'
                ]
            },
            {
                title: 'Module 3: Storytelling Architecture & Slide Sync (Week 5)',
                items: [
                    'Structuring 5-minute, 15-minute, and 45-minute keynote scripts.',
                    'Visual slide design that complements rather than distracts.',
                    'Impromptu 2-minute table topics drills under pressure.'
                ]
            },
            {
                title: 'Module 4: Live Keynote Showcase & Executive Panel (Week 6)',
                items: [
                    'Full dress rehearsal with professional lighting and microphones.',
                    'Live graduation keynote delivered before peer panel and guest critics.',
                    'Video critique archive and personalized development roadmap.'
                ]
            }
        ],
        trainer: {
            name: 'Maria Santos',
            role: 'Executive Speech Coach',
            credentials: 'TEDx Speaker | Toastmasters DTM | 11+ Yrs',
            bio: 'Has coached Fortune 500 executives, startup founders, and keynote speakers for international summits.',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80'
        }
    },
    'kids': {
        id: 'kids',
        title: 'Kids\' Fluency Club & Creative Communication',
        shortTitle: 'Kids\' Fluency Club',
        breadcrumb: 'Kids\' Fluency Club',
        badges: [
            { text: 'Junior Academy', class: 'badge-teal' },
            { text: 'Ages 6 - 14 Years', class: 'badge-orange' },
            { text: 'Gamified Learning', class: 'badge-purple' }
        ],
        lead: 'Fun, gamified English storytelling, roleplay games, phonetics, and creative speaking activities designed to foster natural confidence in young learners.',
        rating: '4.9/5',
        reviewsCount: '630',
        duration: '8 Weeks (32 Live Hours)',
        batchSize: 'Max 8 Kids/Batch',
        support: 'Child Psychology & ESL Specialists',
        price: '$169',
        priceSub: '/ full track',
        badgeExtra: 'Gamified Stars & Milestone Badges',
        features: [
            '32 Hours of Gamified Interactive Classes',
            'Weekly Story Theater & Show-and-Tell Sessions',
            'Illustrated Fun Workbooks & Comic Exercises',
            'Bi-Weekly Parent Progress Reports & Audio Clips'
        ],
        outcomes: [
            { icon: 'bi-check2-circle', title: 'Crystal Clear Phonics', desc: 'Learn proper vowel sounds and syllable blending through songs and games.' },
            { icon: 'bi-check2-circle', title: 'School Speech Confidence', desc: 'Overcome shyness to speak up proudly in school assemblies and classrooms.' },
            { icon: 'bi-check2-circle', title: 'Rich Storytelling Words', desc: 'Build an expressive, descriptive vocabulary beyond everyday basic words.' },
            { icon: 'bi-check2-circle', title: 'Creative Thinking & Empathy', desc: 'Develop active listening and teamwork skills through interactive group skits.' }
        ],
        modules: [
            {
                title: 'Module 1: Phonics, Fun Sounds & Word Explorers (Weeks 1 - 2)',
                items: [
                    'Phonics songs, tongue twisters, and sound blending games.',
                    'Introducing favorites: pets, hobbies, colors, and superheroes.',
                    'Speaking with happy energy and good posture.'
                ]
            },
            {
                title: 'Module 2: Show & Tell: My World and Stories (Weeks 3 - 4)',
                items: [
                    'Show and Tell presentations with toys, drawings, and books.',
                    'Sequencing stories: Beginning, Middle, and Exciting Endings.',
                    'Asking polite questions to classmates.'
                ]
            },
            {
                title: 'Module 3: Drama, Character Roleplay & Team Games (Weeks 5 - 6)',
                items: [
                    'Fable and fairytale character skits with voice expressions.',
                    'Fun mini-debates (e.g. Cats vs Dogs, Superpower choices).',
                    'Handling mistakes with smiles and trying again.'
                ]
            },
            {
                title: 'Module 4: Junior Storyteller Showcase & Awards (Weeks 7 - 8)',
                items: [
                    'Final 3-minute creative storytelling performance for parents.',
                    'Junior Communicator CEFR Star Certificate awards.',
                    'Celebration party and keepsake audio recording delivery.'
                ]
            }
        ],
        trainer: {
            name: 'Sarah Jenkins',
            role: 'Director of Junior Programs',
            credentials: 'Cambridge Young Learners Specialist | 8+ Yrs',
            bio: 'Expert in gamified language acquisition, child engagement, and building joyful speaking confidence.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
        }
    },
    'japanese': {
        id: 'japanese',
        title: 'Japanese Language (JLPT N5 - N1 Mastery Track)',
        shortTitle: 'Japanese (JLPT)',
        breadcrumb: 'Japanese (JLPT)',
        badges: [
            { text: 'Japanese (日本語)', class: 'badge-purple' },
            { text: 'JLPT N5 to N1', class: 'badge-teal' },
            { text: 'Native Tokyo Coaches', class: 'badge-orange' }
        ],
        lead: 'Master Hiragana, Katakana, Kanji roots, natural anime/everyday dialogues, Keigo business Japanese, and official JLPT certification.',
        rating: '4.9/5',
        reviewsCount: '420',
        duration: '16 Weeks (64 Live Hours)',
        batchSize: 'Max 8 Students/Batch',
        support: 'Tokyo Native Faculty',
        price: '$289',
        priceSub: '/ full track',
        badgeExtra: 'Official JLPT Exam Syllabus Aligned',
        features: [
            '64 Live Interactive Hours with Native Tokyo Mentors',
            'Kanji Memory Flashcard Packs & Stroke Order Tools',
            'Weekly Japanese Culture, Anime & Manga Language Labs',
            'JLPT Mock Exam Simulator & Rubric Grading'
        ],
        outcomes: [
            { icon: 'bi-check2-circle', title: 'Hiragana, Katakana & Kanji', desc: 'Read and write Kana fluently and master 400+ essential high-frequency Kanji.' },
            { icon: 'bi-check2-circle', title: 'Natural Spoken Japanese', desc: 'Converse comfortably in casual, anime, and daily conversational contexts.' },
            { icon: 'bi-check2-circle', title: 'Business Keigo Etiquette', desc: 'Understand polite (Teineigo), respectful (Sonkeigo), and humble (Kenjougo) forms.' },
            { icon: 'bi-check2-circle', title: 'Passing JLPT with Top Scores', desc: 'Master listening comprehension, grammar particles, and vocabulary for the JLPT.' }
        ],
        modules: [
            {
                title: 'Module 1: Kana Mastery, Greetings & Basic Sentences (Weeks 1 - 4)',
                items: [
                    'Hiragana & Katakana reading, writing, and pronunciation mastery.',
                    'Everyday greetings (Aisatsu), numbers, time, and basic particle usage (wa, ga, o, ni).',
                    'Present and past tense verb conjugations in Masu form.'
                ]
            },
            {
                title: 'Module 2: Kanji Roots, Daily Life & Directions (Weeks 5 - 8)',
                items: [
                    'First 100 essential Kanji radicals, stroke orders, and On/Kun readings.',
                    'Navigating Tokyo trains, ordering at ramen bars, and shopping conversations.',
                    'Adjective forms (i-adjectives and na-adjectives) in past and negative forms.'
                ]
            },
            {
                title: 'Module 3: Te-Form, Conversational Flow & Culture (Weeks 9 - 12)',
                items: [
                    'Verb Te-form for making requests, continuous actions, and connecting clauses.',
                    'Casual plain form (Futsuukei) used among friends and in manga/anime.',
                    'Japanese cultural traditions, festivals, and workplace social norms.'
                ]
            },
            {
                title: 'Module 4: JLPT Exam Strategies, Keigo & Final Mock (Weeks 13 - 16)',
                items: [
                    'Introduction to workplace Keigo and formal business introductions.',
                    'JLPT N5 / N4 timed reading and audio listening exam series.',
                    'Final conversational capstone and certification issuance.'
                ]
            }
        ],
        trainer: {
            name: 'Kenji Sato',
            role: 'Lead Japanese Specialist',
            credentials: 'Tokyo University Linguistics Alum | JLPT N1 Mentor',
            bio: 'Bilingual native educator with extensive experience guiding international students to Japanese fluency.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
        }
    },
    'business-english': {
        id: 'business-english',
        title: 'Business English & Corporate Communication',
        shortTitle: 'Business English',
        breadcrumb: 'Business English',
        badges: [
            { text: 'Corporate English', class: 'badge-teal' },
            { text: 'Intermediate - Advanced', class: 'badge-purple' },
            { text: 'Executive Workshop', class: 'badge-orange' }
        ],
        lead: 'Master boardroom presentations, crisp technical email writing, cross-cultural diplomacy, negotiations, and global stakeholder conference calls.',
        rating: '4.9/5',
        reviewsCount: '730',
        duration: '8 Weeks (32 Live Hours)',
        batchSize: 'Max 10 Students/Batch',
        support: 'Corporate Communication Coaches',
        price: '$279',
        priceSub: '/ full track',
        badgeExtra: 'Fortune 500 Executive Aligned',
        features: [
            '32 Hours of Executive Case Study Workshops',
            'Real-World Email & Report Teardowns with Feedback',
            'Live Mock Boardroom Presentation Simulations',
            'Personalized Global Accent Neutralization Drills'
        ],
        outcomes: [
            { icon: 'bi-check2-circle', title: 'High-Impact Executive Emails', desc: 'Draft concise, clear, and action-oriented business emails that command respect.' },
            { icon: 'bi-check2-circle', title: 'Persuasive Pitching', desc: 'Deliver crisp slide deck walkthroughs and investor pitches that win buy-in.' },
            { icon: 'bi-check2-circle', title: 'Global Stakeholder Calls', desc: 'Speak confidently on Zoom/Teams calls with international cross-functional teams.' },
            { icon: 'bi-check2-circle', title: 'Diplomatic Negotiation Tone', desc: 'Resolve workplace conflicts and negotiate contracts with polite firmness.' }
        ],
        modules: [
            {
                title: 'Module 1: Executive Emailing, Tone & Technical Writing (Weeks 1 - 2)',
                items: [
                    'Direct vs Diplomatic corporate communication styles.',
                    'Structuring executive summaries, status reports, and project memos.',
                    'Eliminating passive-aggressive phrasing and ambiguous wording.'
                ]
            },
            {
                title: 'Module 2: Boardroom Pitching & Slide Deck Storytelling (Weeks 3 - 4)',
                items: [
                    'Guiding executives through financial charts, KPI dashboards, and roadmaps.',
                    'Signposting phrases for smooth slide-to-slide transitions.',
                    'Handling impromptu interruptions and executive pushback.'
                ]
            },
            {
                title: 'Module 3: Negotiation, Conflict Resolution & Diplomacy (Weeks 5 - 6)',
                items: [
                    'Principled negotiation frameworks and win-win concession language.',
                    'Tactfully declining unreasonable client requests without damaging relationships.',
                    'Cross-cultural communication norms across US, EMEA, and APAC markets.'
                ]
            },
            {
                title: 'Module 4: Global Stakeholder Calls & Executive Capstone (Weeks 7 - 8)',
                items: [
                    'Leading virtual meetings, assigning action items, and driving consensus.',
                    'Live simulated 15-minute cross-border executive board meeting.',
                    'Personalized accent review and certificate issuance.'
                ]
            }
        ],
        trainer: {
            name: 'David Miller',
            role: 'Corporate Training Director',
            credentials: 'Ex-Fortune 100 Comms Lead | MBA | 12+ Yrs',
            bio: 'Has trained executive teams across tech, finance, consulting, and multinational conglomerates.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
        }
    }
};

// Aliases mapping for flexible query matching
const COURSE_ALIASES = {
    'spoken': 'spoken-english',
    'english': 'spoken-english',
    'spokenenglish': 'spoken-english',
    'ielts-toefl': 'ielts',
    'toefl': 'ielts',
    'ielts-prep': 'ielts',
    'french-delf': 'french',
    'delf': 'french',
    'dalf': 'french',
    'german-goethe': 'german',
    'goethe': 'german',
    'spanish-dele': 'spanish',
    'dele': 'spanish',
    'speaking': 'public-speaking',
    'publicspeaking': 'public-speaking',
    'presentation': 'public-speaking',
    'kids-fluency': 'kids',
    'kids-fluency-club': 'kids',
    'junior': 'kids',
    'nihongo': 'japanese',
    'jlpt': 'japanese',
    'corporate': 'business-english',
    'business': 'business-english'
};

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. DYNAMIC COURSE-DETAILS PAGE HYDRATION
    // -------------------------------------------------------------
    const isCourseDetailsPage = document.querySelector('#cdTitle') || document.querySelector('.course-details-page') || window.location.pathname.includes('course-details.html');
    
    if (isCourseDetailsPage) {
        const urlParams = new URLSearchParams(window.location.search);
        let courseKey = (urlParams.get('course') || '').toLowerCase().trim();
        
        // Resolve alias if any
        if (COURSE_ALIASES[courseKey]) {
            courseKey = COURSE_ALIASES[courseKey];
        }
        
        const courseData = LINGUA_COURSES_DATA[courseKey] || LINGUA_COURSES_DATA['spoken-english'];

        if (courseData) {
            // Update Page Title
            document.title = `${courseData.title} | Lingua Academy`;

            // Update Breadcrumb
            const cdBreadcrumb = document.querySelector('#cdBreadcrumb');
            if (cdBreadcrumb) cdBreadcrumb.textContent = courseData.breadcrumb;

            // Update Badges
            const cdBadges = document.querySelector('#cdBadges');
            if (cdBadges && courseData.badges) {
                cdBadges.innerHTML = courseData.badges.map(b => `<span class="badge-tag ${b.class}">${b.text}</span>`).join('');
            }

            // Update Main Title & Lead
            const cdTitle = document.querySelector('#cdTitle');
            if (cdTitle) cdTitle.textContent = courseData.title;

            const cdLead = document.querySelector('#cdLead');
            if (cdLead) cdLead.textContent = courseData.lead;

            // Update Meta Strip
            const cdRating = document.querySelector('#cdRating');
            if (cdRating) cdRating.innerHTML = `<i class="bi bi-star-fill text-warning me-1"></i><strong>${courseData.rating}</strong> (${courseData.reviewsCount} reviews)`;

            const cdDuration = document.querySelector('#cdDuration');
            if (cdDuration) cdDuration.innerHTML = `<i class="bi bi-clock-fill me-1"></i> ${courseData.duration}`;

            const cdBatchSize = document.querySelector('#cdBatchSize');
            if (cdBatchSize) cdBatchSize.innerHTML = `<i class="bi bi-people-fill me-1"></i> ${courseData.batchSize}`;

            const cdSupport = document.querySelector('#cdSupport');
            if (cdSupport) cdSupport.innerHTML = `<i class="bi bi-translate me-1"></i> ${courseData.support}`;

            // Update Price & Sidebar
            const cdPrice = document.querySelector('#cdPrice');
            if (cdPrice) cdPrice.innerHTML = `${courseData.price} <span class="fs-6 text-muted fw-normal">${courseData.priceSub}</span>`;

            const cdBadgeExtra = document.querySelector('#cdBadgeExtra');
            if (cdBadgeExtra) cdBadgeExtra.textContent = courseData.badgeExtra;

            // Update Key Features List
            const cdKeyFeatures = document.querySelector('#cdKeyFeatures');
            if (cdKeyFeatures && courseData.features) {
                cdKeyFeatures.innerHTML = courseData.features.map(f => `<li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> ${f}</li>`).join('');
            }

            // Update Enroll & Demo Buttons
            const cdEnrollBtn = document.querySelector('#cdEnrollBtn');
            if (cdEnrollBtn) cdEnrollBtn.setAttribute('data-course-name', courseData.title);

            const cdDemoBtn = document.querySelector('#cdDemoBtn');
            if (cdDemoBtn) cdDemoBtn.setAttribute('data-course-name', courseData.shortTitle);

            // Update Outcomes
            const cdOutcomesList = document.querySelector('#cdOutcomesList');
            if (cdOutcomesList && courseData.outcomes) {
                cdOutcomesList.innerHTML = courseData.outcomes.map(o => `
                    <div class="col-md-6">
                        <div class="p-3 bg-surface border rounded-3 h-100">
                            <h6 class="font-heading text-orange mb-1"><i class="bi ${o.icon} me-2"></i> ${o.title}</h6>
                            <p class="small text-muted mb-0">${o.desc}</p>
                        </div>
                    </div>
                `).join('');
            }

            // Update Syllabus Accordion
            const syllabusAccordion = document.querySelector('#syllabusAccordion');
            if (syllabusAccordion && courseData.modules) {
                syllabusAccordion.innerHTML = courseData.modules.map((m, idx) => `
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button ${idx === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#mod${idx + 1}">
                                ${m.title}
                            </button>
                        </h2>
                        <div id="mod${idx + 1}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" data-bs-parent="#syllabusAccordion">
                            <div class="accordion-body">
                                <ul>
                                    ${m.items.map(it => `<li>${it}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `).join('');
            }

            // Update Trainer Card
            const cdTrainerCard = document.querySelector('#cdTrainerCard');
            if (cdTrainerCard && courseData.trainer) {
                cdTrainerCard.innerHTML = `
                    <div class="d-flex align-items-center gap-3">
                        <img src="${courseData.trainer.image}" alt="${courseData.trainer.name}" class="rounded-3 shadow-sm" width="80" height="85" style="object-fit: cover;">
                        <div>
                            <h5 class="font-heading mb-1">${courseData.trainer.name}</h5>
                            <span class="badge bg-orange text-white me-2">${courseData.trainer.role}</span>
                            <span class="small text-muted"><i class="bi bi-award me-1"></i> ${courseData.trainer.credentials}</span>
                            <p class="small text-muted mb-0 mt-1">${courseData.trainer.bio}</p>
                        </div>
                    </div>
                `;
            }

            // Update Modal hidden/default course names
            const modalCourseSelect = document.querySelector('#demoClassModal select[name="course"]');
            if (modalCourseSelect) {
                modalCourseSelect.innerHTML = `<option value="${courseData.shortTitle}">${courseData.shortTitle}</option>`;
            }

            const modalSelectedCourseTitle = document.querySelector('.selected-course-title');
            if (modalSelectedCourseTitle) {
                modalSelectedCourseTitle.textContent = courseData.title;
            }
        }
    }

    // -------------------------------------------------------------
    // 2. COURSES CATALOG SEARCH & FILTERING (courses.html)
    // -------------------------------------------------------------
    const courseSearchInput = document.querySelector('#courseSearchInput');
    const languageFilter = document.querySelector('#languageFilter');
    const levelFilter = document.querySelector('#levelFilter');
    const modeFilter = document.querySelector('#modeFilter');
    const ageFilter = document.querySelector('#ageFilter');
    const courseCards = document.querySelectorAll('.course-item-card');
    const noResultsMsg = document.querySelector('#noCoursesFound');
    const viewGridBtn = document.querySelector('#viewGridBtn');
    const viewListBtn = document.querySelector('#viewListBtn');
    const coursesContainer = document.querySelector('#coursesContainer');
    const visibleCoursesCountEl = document.querySelector('#visibleCoursesCount');
    const clearSearchBtn = document.querySelector('#clearSearchBtn');
    const resetFiltersBtn = document.querySelector('#resetFiltersBtn');

    // Handle initial query parameters on courses.html (e.g. ?lang=french or ?search=ielts)
    if (courseCards.length > 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang') || urlParams.get('language');
        const searchParam = urlParams.get('search') || urlParams.get('q');
        const levelParam = urlParams.get('level');
        const ageParam = urlParams.get('age');

        if (langParam && languageFilter) {
            languageFilter.value = langParam.toLowerCase();
        }
        if (searchParam && courseSearchInput) {
            courseSearchInput.value = searchParam;
        }
        if (levelParam && levelFilter) {
            levelFilter.value = levelParam.toLowerCase();
        }
        if (ageParam && ageFilter) {
            ageFilter.value = ageParam.toLowerCase();
        }
    }

    // Update Initial Favorites UI
    if (window.LinguaApp) {
        LinguaApp.updateFavoriteButtonsUI();
    }

    function filterCourses() {
        const query = courseSearchInput ? courseSearchInput.value.toLowerCase().trim() : '';
        const lang = languageFilter ? languageFilter.value.toLowerCase() : 'all';
        const level = levelFilter ? levelFilter.value.toLowerCase() : 'all';
        const mode = modeFilter ? modeFilter.value.toLowerCase() : 'all';
        const age = ageFilter ? ageFilter.value.toLowerCase() : 'all';

        let visibleCount = 0;

        courseCards.forEach(card => {
            const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();
            const cardLang = (card.getAttribute('data-language') || '').toLowerCase();
            const cardLevel = (card.getAttribute('data-level') || '').toLowerCase();
            const cardMode = (card.getAttribute('data-mode') || '').toLowerCase();
            const cardAge = (card.getAttribute('data-age') || '').toLowerCase();

            const matchesQuery = !query || cardTitle.includes(query) || cardLang.includes(query);
            const matchesLang = lang === 'all' || cardLang === lang;
            const matchesLevel = level === 'all' || cardLevel === level;
            const matchesMode = mode === 'all' || cardMode === mode;
            const matchesAge = age === 'all' || cardAge === age;

            if (matchesQuery && matchesLang && matchesLevel && matchesMode && matchesAge) {
                card.parentElement.style.display = '';
                visibleCount++;
            } else {
                card.parentElement.style.display = 'none';
            }
        });

        if (visibleCoursesCountEl) {
            visibleCoursesCountEl.innerText = visibleCount;
        }

        if (noResultsMsg) {
            noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        if (clearSearchBtn) {
            clearSearchBtn.style.display = query.length > 0 ? 'block' : 'none';
        }

        const isFiltered = query.length > 0 || lang !== 'all' || level !== 'all' || mode !== 'all' || age !== 'all';
        if (resetFiltersBtn) {
            resetFiltersBtn.style.display = isFiltered ? 'inline-block' : 'none';
        }
    }

    if (courseSearchInput) courseSearchInput.addEventListener('input', filterCourses);
    if (languageFilter) languageFilter.addEventListener('change', filterCourses);
    if (levelFilter) levelFilter.addEventListener('change', filterCourses);
    if (modeFilter) modeFilter.addEventListener('change', filterCourses);
    if (ageFilter) ageFilter.addEventListener('change', filterCourses);

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (courseSearchInput) {
                courseSearchInput.value = '';
                filterCourses();
                courseSearchInput.focus();
            }
        });
    }

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            if (courseSearchInput) courseSearchInput.value = '';
            if (languageFilter) languageFilter.value = 'all';
            if (levelFilter) levelFilter.value = 'all';
            if (modeFilter) modeFilter.value = 'all';
            if (ageFilter) ageFilter.value = 'all';
            filterCourses();
        });
    }

    // Initial filter run if parameters were present
    filterCourses();

    // View Toggle (Grid / List)
    if (viewGridBtn && viewListBtn && coursesContainer) {
        viewGridBtn.addEventListener('click', (e) => {
            e.preventDefault();
            viewGridBtn.classList.add('active');
            viewGridBtn.setAttribute('aria-pressed', 'true');
            viewListBtn.classList.remove('active');
            viewListBtn.setAttribute('aria-pressed', 'false');
            coursesContainer.classList.remove('list-view');
        });

        viewListBtn.addEventListener('click', (e) => {
            e.preventDefault();
            viewListBtn.classList.add('active');
            viewListBtn.setAttribute('aria-pressed', 'true');
            viewGridBtn.classList.remove('active');
            viewGridBtn.setAttribute('aria-pressed', 'false');
            coursesContainer.classList.add('list-view');
        });
    }

    // Favorite heart button click delegate
    document.addEventListener('click', (e) => {
        const favBtn = e.target.closest('.card-favorite-btn');
        if (favBtn) {
            e.preventDefault();
            e.stopPropagation();
            const courseId = favBtn.getAttribute('data-course-id');
            if (courseId && window.LinguaApp) {
                LinguaApp.toggleFavorite(courseId);
            }
        }
    });
});
