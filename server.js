const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const aliens = {
    'humans':{
        'speciesName' : 'Humans',
        'homeworld': 'Earth',
        'location': 'Alpha Quadrant',
        'features':'Rounded ears, hair on head and face (sometimes)',
        'interestingFact': 'Founded the United Federation of Planets after first contact with the Vulcans' ,
        'notableExamples' : "James T. Kirk, Zephram Cochran, Abraham Lincoln",
        'image': 'https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg'
    },
    'vulcans':{
        'speciesName' : 'Vulcans',
        'homeworld': 'Vulcan',
        'features':'Pointed ears, upward-curving eyebrows',
        'interestingFact': 'Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak' ,
        'notableExamples' : "Spock, T'Pol, Sarek",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/75/Vulcans-FirstContact.jpg'
    },
    'klingons':{
        'speciesName' : 'Klingons',
        'homeworld': "Qo'noS",
        'features':'Large stature, pronounced ridges on the forehead, stylized facial hair',
        'interestingFact': 'Highly skilled in weapons and battle. Their facial ridges were lost as the result of a virus in 2154, but were subsequently restored by 2269.' ,
        'notableExamples' : "Worf, Kor, Kang",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/74/Kruge.jpg'
    },
    'romulans':{
        'speciesName' : 'Romulans',
        'homeworld': "Romulus",
        'features':'Pointed ears, upward-curving eyebrows,green tinge to the skin, diagonal smooth forehead ridges (sometimes)',
        'interestingFact': 'Share a common ancestory with Vulcans, though none of the emotional discipline. Romulus has a sister planet, Remus, on which the Remans are seen as lesser beings.' ,
        'notableExamples' : "Pardek, Tal'aura, Narissa",
        'image': 'https://static.wikia.nocookie.net/aliens/images/1/1d/Zzzd7.jpg'
    },
    'borg':{
        'speciesName' : '(The) Borg',
        'homeworld': 'unknown (Delta Quadrant)',
        'features':'pale skin, numerous interior and exterior biological modifications',
        'interestingFact': 'No single genetic lingeage, species propagates by assimilating individuals via nanotechnology, led by a hive mind guided by a single "queen" individual. DO NOT APPROACH unless under specific diplomatic orders from Starfleet Command.' ,
        'notableExamples' : "Borg Queen, Seven of Nine, Locutus",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/76/Borg.jpg'
    },
    'gorn':{
        'speciesName' : 'Gorn',
        'homeworld': 'unknown (Alpha Quadrant)',
        'features':'scaly green skin, large, iridescent eyes, powerful build, sharp teeth',
        'interestingFact': 'Extremely militaristic and driven to conquer, but also possess advanced scientific knowledge allowing for superior bio-weapons.' ,
        'notableExamples' : "Gorn Captain",
        'image': 'https://static.wikia.nocookie.net/aliens/images/9/9b/Gorn.jpg'
    },
    'trill':{
        'speciesName' : 'Trill',
        'homeworld': 'Trill',
        'features':'Outward appearance similar to humans, aside from distinct dark pigment marks running symmetrically down both sides of the face and body',
        'interestingFact': 'Some Trill are willin hosts to a long-lived invertibrate symbiote that merges with the host to create a distinct personality.' ,
        'notableExamples' : "Jadzia Dax, Ezri Dax, Curzon Dax",
        'image': 'https://static.wikia.nocookie.net/aliens/images/4/42/EzriDax.jpg'
    },
    'aenar':{
        'speciesName' : 'Aenar',
        'homeworld': 'Andor',
        'features':'A humanoid species with light blue/white skin, they are almost blind, and they have powerful telepathic abilities. They also have antannae.',
        'interestingFact': 'Aenar is pacifistic and does not use their mind-reading abilities against the will of another individual. Nonetheless, their blindness does not appear to hinder their ability to know that they are in the presence of a "blue skin" Andorian or to detect obstacles.' ,
        'notableExamples' : "Hemmer",
        'image': 'https://i.postimg.cc/SnLWrbtx/aenar.jpg'
    },
    'andorians':{
        'speciesName' : 'andorians',
        'homeworld': 'Andoria',
        'features':'A humanoid species with blue skin and antennae.',
        'interestingFact': 'They consider themselves a warrior race, in contrast with the pacifist Aenar who also live on Andoria.' ,
        'notableExamples' : "Thy'lek Shran",
        'image': 'https://upload.wikimedia.org/wikipedia/en/c/c4/JourneyBabel.jpg'
    },
    'angosians':{
        'speciesName' : 'Angosian',
        'homeworld': 'Angosia III',
        'features':'Humanoid and considered non-violent. Some are genetically and chemically engineered to fight, with radically violent behavior when they sense danger to themselves.',
        'interestingFact': 'The genetic and chemical process given to the soldiers is irreversible, and, when the "super soldiers" returned to normal Angosian society, they were unable to function within or co-exist alongside them. After a referendum by the larger population, the soldiers were relocated indefinitely to a penal settlement on Lunar V, and are considered to be outcasts and criminals.' ,
        'notableExamples' : "Roga Danar",
        'image': 'https://i.postimg.cc/mtCMLG4y/angosians.jpg'
    },
    'antedeans':{
        'speciesName' : 'Antedean',
        'homeworld': 'Antede III',
        'features':'An ichthyohumanoid species that resemble fish and capable of bipedal motion with purplish-silver scales and half shut eyes.',
        'interestingFact': 'Their minds are highly susceptible to telepathic reading and are somewhat reclusive.' ,
        'notableExamples' : "N/A",
        'image': 'https://i.postimg.cc/t71Wcxmf/antedeans.jpg'
    },
    'arcadians':{
        'speciesName' : 'Arcadians',
        'homeworld': 'Motherlode',
        'features':'Arcadians are distinguished from most humanoids by their broad, enlarged heads with two parallel lines of hair running front to back on the top outer edges of the cranium. In contrast, the bodies of Arcadians are slim and delicate. Their noses protrude very little from the face and their ears are large and pointed.',
        'interestingFact': 'Arcadians are credited as the discoverers of protomatter.' ,
        'notableExamples' : "N/A",
        'image': 'https://i.postimg.cc/94JZ6t23/arcadians.jpg'
    },
    'arcturians':{
        'speciesName' : 'Arcturians',
        'homeworld': 'Arcturus',
        'features':'They have the appearance of melted skin. ',
        'interestingFact': 'Since all Arcturians are produced by cloning they all look alike. They have overcome this problem easily by using a color coded designation for regiment and rank.' ,
        'notableExamples' : "Ensign Taskul",
        'image': 'https://i.postimg.cc/8JcMNJk7/arcturians.jpg'
    },
    'axanar':{
        'speciesName' : 'Axanar',
        'homeworld': 'Axanar',
        'features':'scaly',
        'interestingFact': 'Their bodies produced triglobulin from the zymuth gland. This substance had medical and aphrodisiac properties, and was used by a number of different species for those purposes. Some even forcefully "harvest" Axanar for their triglobulin.' ,
        'notableExamples' : "N/A",
        'image': 'https://i.postimg.cc/jw1N5xCZ/axanar.jpg'
    },
    'bajorans':{
        'speciesName' : 'Bajorans (Alpha Quadrant)',
        'homeworld': 'Bajor',
        'features':'A humanoid species with characteristic nose creases.',
        'interestingFact': 'They are deeply spiritual people, who worship The Prophets.' ,
        'notableExamples' : "Winn Adami",
        'image': 'https://i.postimg.cc/K3gT36MF/bajorans.jpg'
    },
    "ba'ku":{
        'speciesName' : "Ba'ku",
        'homeworld': "Ba'ku",
        'features':"The Ba'ku resemble Humans in appearance. ",
        'interestingFact': "They discovered that an unusual metaphasic radiation emanating from their planet's rings grants them effective immortality." ,
        'notableExamples' : "Subahdar Gallatin",
        'image': 'https://i.postimg.cc/qg9yHvP7/ba-ku.jpg'
    },
    'bandi':{
        'speciesName' : 'Bandi',
        'homeworld': 'Deneb IV (Alpha Quadrant)',
        'features':'Humanoid',
        'interestingFact': 'During the mid-24th century, a group of Bandi captured an injured space vessel lifeform and brought it to the surface of Deneb IV. The Bandi nourished the lifeform back to health, but kept it only strong enough to use its unique ability to change energy into matter. Too weak to leave the surface, the creature was imprisoned on the planet and forced to manifest itself as Farpoint Station. ' ,
        'notableExamples' : "Zorn",
        'image': 'https://i.postimg.cc/tYQZmm6Z/bandi.jpg'
    },
    "ba'ul":{
        'speciesName' : "Ba'ul",
        'homeworld': 'Kaminar',
        'features':"The Ba'ul are aquatic, with a humanoid form. They have spindly limbs and digits, long tendrils on their heads, glowing red eyes, and protrusible spines along their backs. Their bodies are covered by a black, smoky, oily substance.",
        'interestingFact': "In the mid-1st century, predation by the Kelpiens drove the Ba'ul to the brink of extinction, with fewer than 260 individuals surviving. Using their technological superiority, the Ba'ul turned the tide and wiped out all the post-vahar'ai Kelpiens." ,
        'notableExamples' : "N/A",
        'image': 'https://i.postimg.cc/87GvsnPQ/ba-ul.jpg'
    },
    'benzites':{
        'speciesName' : 'Benzites',
        'homeworld': 'Benzar (Alpha Quadrant)',
        'features':'Benites possess smooth, hairless skin; they may range in color from bluish-purple to green-blue. A thick protrusion of the Benzie skull extends down over the face, displaying a prominent nasal lobe and brow. Two fish-like barbels droop down from above the upper lip. ',
        'interestingFact': 'Benites are highly resistant to poisons and other noxious substances. They can digest and derive nutrition from almost any organic compound. All Benzites from the same geostructure are physically similar, so much so that they are indistinguishable from a non-Benzie.' ,
        'notableExamples' : "Hoya, Mendon, Mordock",
        'image': 'https://i.postimg.cc/wtfRfq5g/benzites.jpg'
    },
    'betazoid':{
        'speciesName' : 'Betazoid',
        'homeworld': 'Betazed',
        'features':'Betazoids are physically indistinguishable from Humans in every aspect but one: the irises of their eyes are completely black. ',
        'interestingFact': 'Most develop a telepathic skill in adolescence.' ,
        'notableExamples' : "Lwaxana Troi",
        'image': 'https://i.postimg.cc/G4jyDJHB/betazoids.jpg'
    },
    'bolians':{
        'speciesName' : 'Bolians',
        'homeworld': 'Bolarus IX',
        'features':'Bolians were distinctively known for a bifurcating (cartilaginous) ridge running vertically along the center of the head and face, and partway down the chest. Skin color ranged from light green-blue to blue-gray to vivid blue and was occasionally accented with dark blue bands on the head.',
        'interestingFact': 'Bolian hearts are on the right side of their body.' ,
        'notableExamples' : "Gorn Captain",
        'image': 'https://i.postimg.cc/rdFtN0rf/bolians.jpg'
    },
    'breen':{
        'speciesName' : 'Breen',
        'homeworld': 'Breen (Alpha Quadrant)',
        'features':'The Breen constantly wore refrigeration suits. According to Worf, no outsider had ever seen what a Breen looked like under their refrigeration suits and lived. ',
        'interestingFact': 'The Breen are largely thought to have had to develop refrigeration suits in order to co-exist with others.' ,
        'notableExamples' : "Gor, Pran",
        'image': 'https://i.postimg.cc/Vr2rwKHh/breen.jpg'
    },
    'brikar':{
        'speciesName' : 'Brikar',
        'homeworld': 'unknown',
        'features':'Brikar were large in stature and characterized by hard, rock-like skin. They were extremely strong and durable, able to withstand the impacts of blade weapons or a boulder larger than themselves falling on them without harm. Their spoken language consisted of deep growls.',
        'interestingFact': 'They are susceptible to being cold. ' ,
        'notableExamples' : "Rok-Rahk",
        'image': 'https://i.postimg.cc/30pyx2sx/brikar.jpg'
    },
    'cardassians':{
        'speciesName' : 'Cardassians',
        'homeworld': 'Cardassia Prime',
        'features':'They have noticeable ridges along their foreheads and necks and a crest on their foreheads, earning them the nickname, Spoonheads.',
        'interestingFact': 'Known throughout the Alpha Quadrant for being extremely ruthless, the Cardassians are one of the greatest enemies of the United Federation of Planets and the Klingon Empire.' ,
        'notableExamples' : "Gorn Captain",
        'image': 'https://i.postimg.cc/c68thNvG/cardassians.jpg'
    },
    'changelings':{
        'speciesName' : 'Changelings',
        'homeworld': "Founder's Homeworld (Gamma Quadrant)",
        'features':'The natural form of a Changeling was a viscous orange liquid containing a structure known as a morphogenic matrix. They contain morphogenic enzymes responsible for their shapeshifting ability.',
        'interestingFact': 'Changelings have to revert to their natural liquid state to regenerate every sixteen to eighteen hours. Preventing them from doing so would cause severe physical distress and their forms to begin to deteriorate and "flake" away. ' ,
        'notableExamples' : "Laas, Odo",
        'image': 'https://i.postimg.cc/dkhkgbnd/changelings.jpg'
    },
    'denobulans':{
        'speciesName' : 'Denobulans',
        'homeworld': 'Denobula (Alpha Quadrant)',
        'features':'Denobulans have prominent facial ridges running down either side of the forehead to the cheeks, an enlarged brow ridge under a high receding hairline, a vertical crevice in the center of the forehead, and a ridged chin.',
        'interestingFact': 'Denobulans consider it healthy for a person to hallucinate, as it is seen as a harmless way to release nervous energy.' ,
        'notableExamples' : "Phlox, Yolen, Trevix",
        'image': 'https://i.postimg.cc/75qCqGmq/denobulans.jpg'
    },
    'douwd':{
        'speciesName' : 'Douwd',
        'homeworld': 'unknown',
        'features':'Their true form appears as a slender translucent humanoid with purple coloring.',
        'interestingFact': 'They have the ability to create and destroy on an epic scale; they also maintain the ability to attack through psychic means. They can also take the form of any person they choose.' ,
        'notableExamples' : "Kevin Uxbridge",
        'image': 'https://i.postimg.cc/F7ydtgbP/douwd.jpg'
    },
    'deltans':{
        'speciesName' : 'Deltans',
        'homeworld': 'Delta IV (Alpha Quadrant)',
        'features':'Deltans are identified by their bald scalps and are known to wear head dresses. ',
        'interestingFact': 'While Deltans have pain-relieving abilities that manifest during tactile contact, this ability does not heal injuries. ' ,
        'notableExamples' : "Ilia",
        'image': 'https://i.postimg.cc/9D1D0mnZ/deltans.jpg'
    },
    'edosians':{
        'speciesName' : 'Edosians',
        'homeworld': 'Edos',
        'features':'Edosians have three arms, three legs, and three fingers on each hand.',
        'interestingFact': 'They are susceptible to the Dramia II plague.' ,
        'notableExamples' : "Arex",
        'image': 'https://i.postimg.cc/McTvjCC4/endosians.jpg'
    },
    'el-aurians':{
        'speciesName' : 'El-Aurians',
        'homeworld': 'The El-Aurian System',
        'features':'Externally, the El-Aurians are physically identical to Humans, in structure and even the range of racial phenotypes.',
        'interestingFact': 'One particular El-Aurian male was known to be a father of an adult when he was around two hundred years old in the 19th century, and to be in virtually perfect health at the age of around seven hundred years old as of the 24th century.' ,
        'notableExamples' : "Guinan, Leandra, Martus Mazur",
        'image': 'https://i.postimg.cc/q68RT4Kt/el-aurians.jpg'
    },
    'ferengi':{
        'speciesName' : 'Ferengi',
        'homeworld': 'Ferenginar',
        'features':'On average, Ferengi are shorter than Humans. Externally, they have orange-brown colored skin, blue fingernails and long blue toenails, enlarged skulls, wrinkled noses, and sharp teeth.',
        'interestingFact': 'They are usually extremely intelligent, can possess great cunning, and can sometimes hide that fact very convincingly.' ,
        'notableExamples' : "Nog, Rom, Quark",
        'image': 'https://i.postimg.cc/N2hMS5Kq/ferengi.jpg'
    },
    'hirogen':{
        'speciesName' : 'Hirogen',
        'homeworld': 'unknown',
        'features':'Hirogen adult males are quite large, standing above the average height of most other known humanoid species. They also possess greater physical strength than most humanoids afforded to them by their advanced muscle and nervous system.',
        'interestingFact': 'The Hirogen use an enzyme to break down the bones and muscle tissue of their prey, which is speculated by Chakotay to be for consumption as food, but this has not been confirmed.' ,
        'notableExamples' : "Donik, Idrin, Karr",
        'image': 'https://i.postimg.cc/Lqn8szfF/hirogen.jpg'
    },
    'horta':{
        'speciesName' : 'Horta',
        'homeworld': 'Janus VI',
        'features':'Horta anatomy as composed of a material similar to fibrous asbestos. Horta physiology as very different from the carbon-based lifeforms more commonly found in the galaxy.',
        'interestingFact': 'Every fifty thousand years, all of the Horta died out except for one, the so-called mother Horta, who then watched the eggs until they hatched, and mothered and protected them.' ,
        'notableExamples' : "Mother Horta",
        'image': 'https://i.postimg.cc/CRMK3yx1/horta.jpg'
    },
    "jem'hadar":{
        'speciesName' : "Jem'Hadar",
        'homeworld': 'Gamma Quadrant',
        'features':'A genetically-engineered reptilian-like humanoid species, as they aged, their skin paled to a bluish-white and became scaly and reptilian in appearance.',
        'interestingFact': "Adolescent Jem'Hadar required food for nourishment. Adult Jem'Hadar do not require sleep, and their sole source of nourishment is the drug ketracel-white, which provides the Jem'Hadar with all necessary nutrients, as well as an isogenic enzyme that has been deliberately omitted from their metabolism." ,
        'notableExamples' : "Omet'iklan, Remata'Klan, Ikat'ika",
        'image': 'https://i.postimg.cc/Hj5j54Np/jem-hadar.jpg'
    },
    'kazon':{
        'speciesName' : 'Kazon',
        'homeworld': 'Delta Quadrant',
        'features':'The Kazon are a humanoid race, having at least two racial variants, one minority race with brown skin and the most common race with copper-colored skin. The foreheads of all Kazon feature distinctive ridges and their black or brown hair grew in large chunks rather than individual strands.',
        'interestingFact': 'The Kazon were a subjugated race, used as slave labor by the Trabe, who had conquered their homeworld.' ,
        'notableExamples' : "Culluh, Karden, Jabin",
        'image': 'https://i.postimg.cc/hfBv0QFV/kazon.jpg'
    },
    'kelpiens':{
        'speciesName' : 'Kelpiens',
        'homeworld': 'Kaminar',
        'features':'Kelpiens have a tall, lanky build, brownish orange skin, and no head hair, although males at least can grow facial hair at an advanced age.',
        'interestingFact': "Tendril-like threat ganglia splay out from the back of a Kelpien's head when they sense danger." ,
        'notableExamples' : "Saru, Siranna",
        'image': 'https://i.postimg.cc/3yVJ0dC4/kelpiens.jpg'
    },
    'organians':{
        'speciesName' : 'Organians',
        'homeworld': 'Organia',
        'features': "It is unclear exactly what the Organians really look like, but they stated they had once been humanoid. They can take over people's bodies and communicate through them.",
        'interestingFact': 'To prevent the conflict between Humans and Klingons, they caused extreme heat to emanate from every harmful object available, including phaser controls in both fleets.' ,
        'notableExamples' : "Ayelborne, Claymare, Trefayne",
        'image': 'https://i.postimg.cc/nXdLZdX1/organians.jpg'
    },
    'orions':{
        'speciesName' : 'Orions',
        'homeworld': 'Orion',
        'features':'Orions were known for their distinctive green skin, which could feature yellowish to bluish undertones. They usually had black hair, though some had red, green, brown or white hair.',
        'interestingFact': 'Some female Orions are capable of emitting highly potent pheromones that can impact the physiology of other species.' ,
        'notableExamples' : "D'nesh, Devna, Gaila",
        'image': 'https://i.postimg.cc/bs9JVY8W/orions.jpg'
    },
    'pakled':{
        'speciesName' : 'Pakled',
        'homeworld': 'Pakled Planet',
        'features':'Eyebrows that grow up, and a protruding browline that looks as though it is melting down the face around the eyes.',
        'interestingFact': 'Pakleds are durable enough to survive the vacuum of space.' ,
        'notableExamples' : "Grebnedlog, Grubdin, Jackabog",
        'image': 'https://i.postimg.cc/xJmjvnts/pakled.jpg'
    },
    'q':{
        'speciesName' : 'Q',
        'homeworld': 'unknown',
        'features':'Unknown. They can take the appearance of humanoid as well as non humanoid beings.',
        'interestingFact': 'The Q is immortal, seemingly omnipotent creatures, all named Q. Q is also their collective name and the name of their Continuum.' ,
        'notableExamples' : "Q",
        'image': 'https://i.postimg.cc/7JyHXdRq/q.jpg'
    },
    'remans':{
        'speciesName' : 'Remans',
        'homeworld': 'Remus',
        'features':'Humanoid with webbed ears, sunken eyes, skull like features of the face and head, and sharp teeth.',
        'interestingFact': 'Some Remans, if not all, possessed telepathic abilities similar to those shown by Vulcans and Betazoids.' ,
        'notableExamples' : "N/A",
        'image': 'https://i.postimg.cc/SjWNjQXR/remans.jpg'
    },
    "son'a":{
        'speciesName' : "Son'a",
        'homeworld': "Ba'ku",
        'features':'They resemble humans in appearance, but have their face skin stretched to the sides as to appear younger.',
        'interestingFact': "Without the regenerative effects of the Ba'ku homeworld's metaphasic radiation, the Son'a became desperate in their efforts to prolong their lives by any possible means, including genetic manipulation and surgical techniques." ,
        'notableExamples' : "Ru'afo, Gallatin",
        'image': 'https://i.postimg.cc/7JMxRXv0/son-a.jpg'
    },
    'species 8472':{
        'speciesName' : 'Species 8472',
        'homeworld': 'Fluidic Space',
        'features':'Species 8472 stand approximately three meters tall and are tripedal. Their eyes have cruciform pupils and they lack obvious mouths, nostrils, and ears. They have an epidermis. ',
        'interestingFact': 'They were immensely strong, able to dismember humanoid limbs, and rip through bulkheads with ease. They did not appear to require oxygen or need any atmosphere for survival, and could walk without the aid of gravity, being able to cling to surfaces.' ,
        'notableExamples' : "Valerie Archer, Boothby, Bullock",
        'image': 'https://i.postimg.cc/SntmHJPT/species8472.jpg'
    },
    'talaxians':{
        'speciesName' : 'Talaxians',
        'homeworld': 'Talax (Delta Quadrant)',
        'features':' Humanoid, with large areas of yellow to reddish-brown spotting on their heads, arms, and bodies. They have pale skin, with a protruding "Y"-shaped bone ridge across the top of their chest area with a plume of ginger hair on the top of their heads.',
        'interestingFact': 'Talaxians appear to be a whimsical race with a well developed sense of humor. They are usually very friendly, helpful and are willing to offer their services to anyone who requires them.' ,
        'notableExamples' : "Alixia, Brax, Dexa",
        'image': 'https://i.postimg.cc/svmj9n4R/talaxians.jpg'
    },
    'tellarites':{
        'speciesName' : 'Tellarites',
        'homeworld': 'Tellar Prime (Alpha Quadrant)',
        'features':'They have distinctive snouts, often wear beards, and their hands are sometimes hoof-like in appearance. Their lower jaw usually possesses a pair of small tusks.',
        'interestingFact': 'They consider arguing a sport.' ,
        'notableExamples' : "Q'ral, Taahz Gorev, Tevrin Krit",
        'image': 'https://i.postimg.cc/VSrzwzQY/tellarites.jpg'
    },
    'talosians':{
        'speciesName' : 'Talosians',
        'homeworld': 'Talos IV (Alpha Quadrant)',
        'features':'Enlarged horedeahs and craniums with a ridge following up the bridge of the nose',
        'interestingFact': 'Talosians were once a warp-capable, technologically advanced culture but a nuclear holocaust left their planet virtually uninhabitable and killed most of the species.' ,
        'notableExamples' : "The Keeper",
        'image': 'https://i.postimg.cc/mPrbdQm1/talosians.jpg'
    },
    'tholians':{
        'speciesName' : 'Tholians',
        'homeworld': 'unknown (Alpha Quadrant)',
        'features':'Tholians are a crystalline species. They have a hard carapace that is chiefly mineral. There are six thin legs that made it possible for the being to move in any direction quickly; the legs are articulated with joints roughly corresponding to the knee and ankle of humanoid species. Each leg ends in a multi-toed foot. The legs are attached at the base of the torso and are radially symmetric. There are two arms; each have joints analogous to the humanoid elbow and wrist, and each arm ends in a multi-fingered hand.',
        'interestingFact': 'Tholian biology requires high temperatures around 480 Kelvin (207 °C, 404 °F). They can tolerate lower temperatures for a brief period of time; if they are exposed to temperatures around 380 Kelvin or less, their carapace will fracture. This is painful or distressing; a Tholian subjected to such a temperature regime can be coerced to cooperate. In temperatures even lower, a Tholian will freeze solid and shatter.' ,
        'notableExamples' : "Loskene",
        'image': 'https://i.postimg.cc/f3GDT1DY/tholians.jpg'
    },
    'tribbles':{
        'speciesName' : 'Tribbles',
        'homeworld': 'Iota Geminorum IV',
        'features':'Round, furry creatures that are born pregnant and use asexual reproduction to quickly multiply. They have no way to attack or defend themselves.',
        'interestingFact': 'Over a period of three days, a single tribble can account for 1,771,561 progeny.' ,
        'notableExamples' : "N/A",
        'image': 'https://i.postimg.cc/ctZWfYKH/tribbles.jpg'
    },
    'vidiians':{
        'speciesName' : 'Vidiians',
        'homeworld': 'Vidiia Prime',
        'features':"The Vidiians' facial appearance was similar to that of a Human with two eyes, a nose and a mouth, but they also possessed a swept back hairline and a slightly enlarged forehead with no eyebrows. There was also a slight ridge that ran from the hairline down the center of the forehead to the top of the nose.",
        'interestingFact': 'For two millennia, the entire race suffered from a disease called the Phage that ate skin and internal organs, and damaged their DNA.' ,
        'notableExamples' : "Danara Pel, Dereth, Mala",
        'image': 'https://i.postimg.cc/Fd0mfGH8/vidiians.jpg'
    },
    'vorta':{
        'speciesName' : 'Vorta',
        'homeworld': 'Kurill Prime',
        'features':'Vorta had pale skin, violet eyes, and elongated ears that were completely joined to the rest of the head.',
        'interestingFact': "The Vorta were genetically changed by the Founders into humanoids and were employed at the highest level of the Dominion, as the Founders' tools of conquest." ,
        'notableExamples' : "Borath, Deyos, Eris",
        'image': 'https://i.postimg.cc/yJV0ppwX/all.jpg'
    },
    'xindi':{
        'speciesName' : 'Xindi',
        'homeworld': 'Xindus',
        'features':'All the Xindi species share distinctive ridges on their cheekbones and foreheads.',
        'interestingFact': 'Six different intelligent species developed on Xindus; one of them, the Xindi-Avians, was believed extinct by the 2150s, as the result of a brutal civil war between the six species that destroyed the planet. The surviving species were united under the governance of the Xindi Council, which contained two representatives from each species. The five remaining species were Xindi-Aquatics, Xindi-Arboreals, Xindi-Insectoids, Xindi-Primates, and Xindi-Reptilians.' ,
        'notableExamples' : "Degra, Dolim, Jannar",
        'image': 'https://thumbs2.imgbox.com/9c/7f/VTCsKzSQ_t.jpeg'
    },
    
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (request,response)=>{
    const aliensName = request.params.alienName.toLowerCase()
    if(aliens[aliensName]){
        response.json(aliens[aliensName])
    }else{
        response.json(aliens['humans'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running Amigo!`)
})