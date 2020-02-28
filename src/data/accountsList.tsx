import serenetayimg from '../images/profileImages/serenetay.png';
import jeffreyimg from '../images/profileImages/jeffrey.jpg';
import leonardtngimg from '../images/profileImages/leonardtng.jpg';

var accountsList = [
  {
    id: 0,
    username: 'serenetay', //match project owner data in database
    img: serenetayimg,
    description: 'Currently working in a fintech company and learning about IT. I can code in Python, Javascript, PHP, C++, C#, HTML, CSS. Looking for part-time opportunities for me to practice my skills.',
    commits: 10,
    views: 112,
    likes: 30,
  },

  {
    id: 1,
    username: 'jeffrey',
    img: jeffreyimg,
    description: 'I am a Loan Officer at XYZ Bank, where I processes loan applications from start to finish, including mortgage refinancing and educating clients about their different financing options.',
    commits: 11,
    views: 157,
    likes: 23,
  },

  {
    id: 2,
    username: 'leonardtng',
    img: leonardtngimg,
    description: 'Before starting a writing business, Leonard spent six years as a Bank Teller and Virtual Assistant for financial companies in the U.S. and U.K. After a successful career helping small banks and real estate agencies, Leonard now helps them write marketing copy for their products and services. ',
    commits: 8,
    views: 128,
    likes: 35,
  },
]

export default accountsList