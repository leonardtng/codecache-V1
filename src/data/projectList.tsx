// Connect this to backend, change to json file

import img1 from '../images/projectImages/axolotl-stock.jpg';
import img2 from '../images/projectImages/saxman-stock.jpg';
import img3 from '../images/projectImages/abstract-stock.jpg';
import img4 from '../images/projectImages/saxman2-stock.jpg';
import img5 from '../images/projectImages/abstract2-stock.jpg';
import img6 from '../images/projectImages/fossa-stock.jpg';
import img7 from '../images/projectImages/forest-stock.jpg';
import img8 from '../images/projectImages/wolf-stock.jpg';
import img9 from '../images/projectImages/dragon-stock.jpg';
import img10 from '../images/projectImages/totoro-horizontal.jpg';

var projectList = [
  {
    id: 0,
    owner: 'jeffrey',
    img: img1,
    name: 'Drainage Analysis',
    description: 'This report states that along South Federal Blvd. (a planning sheet was provided) there will be an estimated 55 CFS flowing through the existing 48" storm sewer for a 100-year event. The 55 cfs that currently flows to the south in the existing storm sewer will be diverted to an existing open drainage ditch (Big Bend drainage ditch) that flows east and will flow into a detention basin to be constructed during phase II of this project. This will then leave the full capacity of the existing 48" storm drain, which is estimated at 55 cfs, available to transmit the storm water from that point south.',
    commits: 3,
    views: 50,
    likes: 65,
    collaborators: 2,
    tags: ['Python', 'C++'],
  },

  {
    id: 1,
    owner: 'serenetay',
    img: img2,
    name: 'Jazz Forum',
    description: 'Remember when you first learned how to scoop notes? For most of us, as newcomers to the instrument, the tendency is to overdo the bending and scooping. Try to imagine a singer scooping a ton of notes, and the phrase “looney tunes” comes to mind, as that singer would sound downright kooky.',
    commits: 12,
    views: 200,
    likes: 8,
    collaborators: 3,
    tags: ['Python', 'Java'],
  },

  {
    id: 2,
    owner: 'leonardtng',
    img: img3,
    name: 'Digital Art',
    description: 'Digital art is an artistic work or practice that uses digital technology as part of the creative or presentation process. Since the 1970s, various names have been used to describe the process, including computer art and multimedia art. Digital art is itself placed under the larger umbrella term new media art.',
    commits: 6,
    views: 120,
    likes: 56,
    collaborators: 3,
    tags: ['Java', 'Ruby'],
  },

  {
    id: 3,
    owner: 'serenetay',
    img: img4,
    name: 'Music Website V2',
    description: 'There are countless approaches to vibrato and I could probably write an entire article on this subject alone. There’s the approach of holding the note out straight for a moment and then vibrato-ing with slightly increasing intensity into the release of the note. Used by players from Dexter Gordon to David Sanborn, this is an extremely common approach to vibrato in jazz and jazz-related music.',
    commits: 5,
    views: 230,
    likes: 16,
    collaborators: 2,
    tags: ['Ruby', 'C#'],
  },

  {
    id: 4,
    owner: 'serenetay',
    img: img5,
    name: 'Science of Materials',
    description: 'Historically artesian wells have supplied much of the water to the residents of the town. A walking tour of the city surrounding the county courthouse indicated one or two artesian wells per block. It seems reasonable to expect that fixing the town known artesian wells in the courthouse region (plus perhaps one or two additional unknown wells) will stop the artificial discharge of artesian water into the zone and allow the water table to drop back down to its natural level. The work will be conducted in July and August and the groundwater should return the normal levels in time for a successful restoration of the courthouse.',
    commits: 2,
    views: 40,
    likes: 3,
    collaborators: 1,
    tags: ['PHP'],
  },

  {
    id: 5,
    owner: 'leonardtng',
    img: img6,
    name: 'Big Cats',
    description: 'The term "big cat" is typically used to refer to any of the five living members of the genus Panthera, namely tiger, lion, jaguar, leopard, and snow leopard. Except the snow leopard, these species are able to roar.',
    commits: 5,
    views: 30,
    likes: 8,
    collaborators: 1,
    tags: ['Java'],
  },

  {
    id: 6,
    owner: 'serenetay',
    img: img7,
    name: 'Go Green Web App',
    description: 'This project consists of the acquisition of flood damaged properties located adjacent to the Park River (in the floodway) (photos were provided). Nineteen (19) properties have been identified as having substantial damages and are at high risk for future flood damages. Once acquired, these structures will be put up for bid for relocation outside the 100-year floodplain. Any unsold homes will be demolished and removed. The sites will then be deed restricted and become green space.',
    commits: 10,
    views: 92,
    likes: 26,
    collaborators: 3,
    tags: ['HTML', 'CSS', 'Javascript'],
  },

  {
    id: 7,
    owner: 'jeffrey',
    img: img8,
    name: 'Fox in the Wild',
    description: 'The county courthouse is a historic building that is located in the oldest town in the state. Over the past few years several "localized" floods have occurred in the two-block region surrounding the courthouse. These floods develop as a result of rainfall events that are at or near the yearly maximum. The floodwaters have flowed both into the historic courthouse (photos were provided) and the adjoining annex, bordering the parking lot to the east of the courthouse. The floods originate in the vicinity of the parking lot and flow south and west into the courthouse complex, exiting onto the downhill streets adjacent to the courthouse (photos were provided)',
    commits: 1,
    views: 30,
    likes: 5,
    collaborators: 3,
    tags: ['HTML', 'CSS', 'PHP'],
  },

  {
    id: 8,
    owner: 'serenetay',
    img: img9,
    name: 'Fun Stuff!',
    description: 'The Partial Detention Alternative is the flood mitigation scheme as proposed in the Hogback Detention Master Plan by Graef, Anhalt, Schloemer & Associates, Inc. (February, 1995), commissioned by the city. The plan calls for seven (7) small detention ponds to be formed by constructing low height dams across openings in the lower, eastern hogback. During storm events, ponding behind the dams would remove sediment and reduce peak flows by approximately 50 percent. Volumes of water stored during the 100-year storm would range from 0.4 to 2.0 acre-feet, maximum ponding depths would range from 3.3 to 5.2 feet, and the inundated area would range from 0.15 to 0.35 acres.',
    commits: 9,
    views: 50,
    likes: 12,
    collaborators: 1,
    tags: ['HTML', 'CSS', 'Python'],
  },

  {
    id: 9,
    owner: 'leonardtng',
    img: img10,
    name: 'Ghibli Compilation',
    description: 'Studio Ghibli, Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki gaisha Sutajio Jiburi) is a Japanese animation film studio based in Koganei, Tokyo, Japan. The studio is best known for its anime feature films, and has also produced several short films, television commercials, and one television film.',
    commits: 11,
    views: 80,
    likes: 26,
    collaborators: 2,
    tags: ['C++'],
  },

];

export default projectList