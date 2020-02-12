// Connect this to backend, change to json file

import img1 from '../images/wolf-stock.jpg';
import img2 from '../images/fossa-stock.jpg';
import img3 from '../images/dragon-stock.jpg';
import img4 from '../images/axolotl-stock.jpg';
import img5 from '../images/totoro-horizontal.jpg';

var projectList = [
    { id: 0, 
      owner: 'serenetay', 
      img: img1, 
      name: 'Project 1', 
      description: 'This report states that along South Federal Blvd. (a planning sheet was provided) there will be an estimated 55 CFS flowing through the existing 48" storm sewer for a 100-year event. The 55 cfs that currently flows to the south in the existing storm sewer will be diverted to an existing open drainage ditch (Big Bend drainage ditch) that flows east and will flow into a detention basin to be constructed during phase II of this project. This will then leave the full capacity of the existing 48" storm drain, which is estimated at 55 cfs, available to transmit the storm water from that point south.', 
      commits: 20, 
      views: 0, 
      likes: 6 },

    { id: 1, 
      owner: 'jeffrey', 
      img: img2, 
      name: 'Project 2', 
      description: 'This project consists of the acquisition of flood damaged properties located adjacent to the Park River (in the floodway) (photos were provided). Nineteen (19) properties have been identified as having substantial damages and are at high risk for future flood damages. Once acquired, these structures will be put up for bid for relocation outside the 100-year floodplain. Any unsold homes will be demolished and removed. The sites will then be deed restricted and become green space.',
      commits: 30, 
      views: 0, 
      likes: 8 },

    { id: 2, 
      owner: 'leonardtng', 
      img: img3, 
      name: 'Project 3', 
      description: 'The Partial Detention Alternative is the flood mitigation scheme as proposed in the Hogback Detention Master Plan by Graef, Anhalt, Schloemer & Associates, Inc. (February, 1995), commissioned by the city. The plan calls for seven (7) small detention ponds to be formed by constructing low height dams across openings in the lower, eastern hogback. During storm events, ponding behind the dams would remove sediment and reduce peak flows by approximately 50 percent. Volumes of water stored during the 100-year storm would range from 0.4 to 2.0 acre-feet, maximum ponding depths would range from 3.3 to 5.2 feet, and the inundated area would range from 0.15 to 0.35 acres.',
      commits: 40, 
      views: 0, 
      likes: 5 },

    { id: 3, 
      owner: 'serenetay', 
      img: img4, 
      name: 'Project 4', 
      description: 'The county courthouse is a historic building that is located in the oldest town in the state. Over the past few years several "localized" floods have occurred in the two-block region surrounding the courthouse. These floods develop as a result of rainfall events that are at or near the yearly maximum. The floodwaters have flowed both into the historic courthouse (photos were provided) and the adjoining annex, bordering the parking lot to the east of the courthouse. The floods originate in the vicinity of the parking lot and flow south and west into the courthouse complex, exiting onto the downhill streets adjacent to the courthouse (photos were provided).',
      commits: 50, 
      views: 0, 
      likes: 16 },

    { id: 4,
      owner: 'serenetay', 
      img: img5, 
      name: 'Project 5',
      description: 'Historically artesian wells have supplied much of the water to the residents of the town. A walking tour of the city surrounding the county courthouse indicated one or two artesian wells per block. It seems reasonable to expect that fixing the town known artesian wells in the courthouse region (plus perhaps one or two additional unknown wells) will stop the artificial discharge of artesian water into the zone and allow the water table to drop back down to its natural level. The work will be conducted in July and August and the groundwater should return the normal levels in time for a successful restoration of the courthouse.',
      commits: 60, 
      views: 0, 
      likes: 3 }, 

];

export default projectList