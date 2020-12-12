import { html } from 'lit-element';
import { BapcView } from './scoreboard-bapc';

export default function template(this: BapcView) {
  return html`
<section>
<h1>Scoreboard BAPC 2020 after the freeze</h1>
   <table class="scoreboard center ">

            <colgroup>
              <col id="scorerank"/>
              <col id="scoreflags"/>
              <col id="scorelogos"/>
              <col id="scoreteamname"/>
            </colgroup>
            <colgroup>
              <col id="scoresolv"/>
              <col id="scoretotal"/>
            </colgroup>
            <colgroup>
              <col class="scoreprob"/>
              <col class="scoreprob"/>
              <col class="scoreprob"/>
              <col class="scoreprob"/>
              <col class="scoreprob"/>
              <col class="scoreprob"/>
              <col class="scoreprob"/>
              <col class="scoreprob"/>
              <col class="scoreprob"/>
              <col class="scoreprob"/>
              <col class="scoreprob"/>
            </colgroup>


            <thead>
            <tr class="scoreheader">
              <th title="rank" scope="col">rank</th>
              <th title="team name" scope="col" colspan="3">team</th>
              <th title="# solved / penalty time" colspan="2" scope="col">score</th>
              <th title="problem Aquarium Arrangement" scope="col">
                <a  target="_self">
                  A
                  <div class="circle" style="background: #ff4545;"></div>
                </a>
              </th>
              <th title="problem Balanced Breakdown" scope="col">
                <a  target="_self">
                  B
                  <div class="circle" style="background: #00FFFF;"></div>
                </a>
              </th>
              <th title="problem Corrupted Contest" scope="col">
                <a  target="_self">
                  C
                  <div class="circle" style="background: #00FF00;"></div>
                </a>
              </th>
              <th title="problem Destabilized Drone" scope="col">
                <a  target="_self">
                  D
                  <div class="circle" style="background: #ff00ff;"></div>
                </a>
              </th>
              <th title="problem Efficiently Elevated" scope="col">
                <a  target="_self">
                  E
                  <div class="circle" style="background: #FFFF00;"></div>
                </a>
              </th>
              <th title="problem Family Fares" scope="col">
                <a  target="_self">
                  F
                  <div class="circle" style="background: #0080FF;"></div>
                </a>
              </th>
              <th title="problem Generator Grid" scope="col">
                <a  target="_self">
                  G
                  <div class="circle" style="background: #c6ff40;"></div>
                </a>
              </th>
              <th title="problem Hungry Henk" scope="col">
                <a  target="_self">
                  H
                  <div class="circle" style="background: #0000FF;"></div>
                </a>
              </th>
              <th title="problem Incomplete Implementation" scope="col">
                <a  target="_self">
                  I
                  <div class="circle" style="background: #FF8000;"></div>
                </a>
              </th>
              <th title="problem Jigsaw" scope="col">
                <a  target="_self">
                  J
                  <div class="circle" style="background: #b433ff;"></div>
                </a>
              </th>
              <th title="problem Xortest Path" scope="col">
                <a  target="_self">
                  K
                  <div class="circle" style="background: #a3d1ff;"></div>
                </a>
              </th>
            </tr>
            </thead>
            <tbody>

            <tr class="sortorderswitch" id="team:478639">
              <td class="scorepl">
                1
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/9.png?v=7.3.2" alt="Utrecht University"
                       title="Utrecht University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="while (false) break;">
                <a  >
                    <span class="forceWidth">
                                                    <span class="badge badge-warning" style="margin-right: 2em; font-weight: normal;">
                            Participants
                        </span>
                                                while (false) break;
                    </span>
                  <span class="univ forceWidth">
                                                            Utrecht University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">9</td>
              <td class="scorett">731</td>





              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    76
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    55
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    220
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    28
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    99
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    42
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    10
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    102
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    19
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>
            </tr>

            <tr class="" id="team:476891">
              <td class="scorepl">
                2
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/5.png?v=7.3.2" alt="Radboud University"
                       title="Radboud University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="The Algoteers">
                <a  >
                    <span class="forceWidth">
                                                The Algoteers
                    </span>
                  <span class="univ forceWidth">
                                                            Radboud University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">9</td>
              <td class="scorett">906</td>





              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    163
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    37
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    92
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    72
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    106
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    22
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    30
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    136
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    28
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478725">
              <td class="scorepl">
                3
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/9.png?v=7.3.2" alt="Utrecht University"
                       title="Utrecht University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="SnackUnderflow">
                <a  >
                    <span class="forceWidth">
                                                SnackUnderflow
                    </span>
                  <span class="univ forceWidth">
                                                            Utrecht University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">9</td>
              <td class="scorett">1118</td>





              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    222
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    77
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    32
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    208
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    104
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    131
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    10
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    144
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    50
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>
            </tr>

            <tr class="" id="team:478960">
              <td class="scorepl">
                4
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Segfault go BRRRR">
                <a  >
                    <span class="forceWidth">
                                                Segfault go BRRRR
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">9</td>
              <td class="scorett">1147</td>





              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    173
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    35
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    222
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    100
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    187
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    90
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    20
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    79
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    41
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478815">
              <td class="scorepl">
                5
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/2.png?v=7.3.2" alt="Université Catholique de Louvain"
                       title="Université Catholique de Louvain">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Algorithms Beat Lockdown">
                <a  >
                    <span class="forceWidth">
                                                Algorithms Beat Lockdown
                    </span>
                  <span class="univ forceWidth">
                                                            Université Catholique de Louvain
                                                    </span>
                </a>
              </td>
              <td class="scorenc">8</td>
              <td class="scorett">687</td>





              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    145
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    15
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    40
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    179
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    26
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    10
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    98
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    54
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>
            </tr>

            <tr class="" id="team:478959">
              <td class="scorepl">
                6
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Out of Touch">
                <a  >
                    <span class="forceWidth">
                                                Out of Touch
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">8</td>
              <td class="scorett">740</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    139
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    60
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    91
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    205
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    73
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    7
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    34
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    31
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>
            </tr>

            <tr class="" id="team:476892">
              <td class="scorepl">
                7
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/5.png?v=7.3.2" alt="Radboud University"
                       title="Radboud University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Perry the C+platy+">
                <a  >
                    <span class="forceWidth">
                                                Perry the C+platy+
                    </span>
                  <span class="univ forceWidth">
                                                            Radboud University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">8</td>
              <td class="scorett">744</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    55
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    62
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    127
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    115
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    175
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    7
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    90
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    13
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:476689">
              <td class="scorepl">
                8
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/3.png?v=7.3.2" alt="Université de Mons"
                       title="Université de Mons">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="CPUMONS">
                <a  >
                    <span class="forceWidth">
                                                CPUMONS
                    </span>
                  <span class="univ forceWidth">
                                                            Université de Mons
                                                    </span>
                </a>
              </td>
              <td class="scorenc">8</td>
              <td class="scorett">803</td>





              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    127
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    26
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    48
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    183
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    128
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    12
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    96
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    63
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>
            </tr>

            <tr class="" id="team:478961">
              <td class="scorepl">
                9
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title=" ( ◉ ⌣(◔ ⌣ ◔)⌣ ☼) Migos">
                <a  >
                    <span class="forceWidth">
                                                 ( ◉ ⌣(◔ ⌣ ◔)⌣ ☼) Migos
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">8</td>
              <td class="scorett">836</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    231
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    55
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    5 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    63
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    138
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    112
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    10
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    42
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    5
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478519">
              <td class="scorepl">
                10
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/9.png?v=7.3.2" alt="Utrecht University"
                       title="Utrecht University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="🦆🦒">
                <a  >
                    <span class="forceWidth">
                                                🦆🦒
                    </span>
                  <span class="univ forceWidth">
                                                            Utrecht University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">7</td>
              <td class="scorett">444</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    76
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    12
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    114
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    101
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    16
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    51
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    14
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>
            </tr>

            <tr class="" id="team:479079">
              <td class="scorepl">
                11
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="PIece of cake">
                <a  >
                    <span class="forceWidth">
                                                PIece of cake
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">7</td>
              <td class="scorett">716</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    208
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    45
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    63
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    115
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    14
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    209
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    22
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478577">
              <td class="scorepl">
                12
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/11.png?v=7.3.2" alt="Vrije Universiteit"
                       title="Vrije Universiteit">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="The Hyperspheres">
                <a  >
                    <span class="forceWidth">
                                                The Hyperspheres
                    </span>
                  <span class="univ forceWidth">
                                                            Vrije Universiteit
                                                    </span>
                </a>
              </td>
              <td class="scorenc">7</td>
              <td class="scorett">736</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    144
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    102
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    67
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    89
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    15
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    187
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    52
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:476894">
              <td class="scorepl">
                13
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/5.png?v=7.3.2" alt="Radboud University"
                       title="Radboud University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="The Turbofish">
                <a  >
                    <span class="forceWidth">
                                                The Turbofish
                    </span>
                  <span class="univ forceWidth">
                                                            Radboud University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">7</td>
              <td class="scorett">786</td>





              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 8 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    110
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    60
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    95
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    181
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    19
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    161
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    40
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478366">
              <td class="scorepl">
                14
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/12.png?v=7.3.2" alt="KU Leuven"
                       title="KU Leuven">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="The Matrix Builders">
                <a  >
                    <span class="forceWidth">
                                                The Matrix Builders
                    </span>
                  <span class="univ forceWidth">
                                                            KU Leuven
                                                    </span>
                </a>
              </td>
              <td class="scorenc">7</td>
              <td class="scorett">815</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    174
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    59
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    82
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    192
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    78
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    19
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    4 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    71
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478965">
              <td class="scorepl">
                15
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Dacia GPL">
                <a  >
                    <span class="forceWidth">
                                                Dacia GPL
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">7</td>
              <td class="scorett">943</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    230
                    <span>
                                                                                    9 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    135
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    97
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    88
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    26
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    151
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    16
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479855">
              <td class="scorepl">
                16
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/7.png?v=7.3.2" alt="University of Twente"
                       title="University of Twente">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Trivial">
                <a  >
                    <span class="forceWidth">
                                                Trivial
                    </span>
                  <span class="univ forceWidth">
                                                            University of Twente
                                                    </span>
                </a>
              </td>
              <td class="scorenc">6</td>
              <td class="scorett">607</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    53
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    61
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    160
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    14
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    223
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    16
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:475939">
              <td class="scorepl">
                17
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/7.png?v=7.3.2" alt="University of Twente"
                       title="University of Twente">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Shara">
                <a  >
                    <span class="forceWidth">
                                                Shara
                    </span>
                  <span class="univ forceWidth">
                                                            University of Twente
                                                    </span>
                </a>
              </td>
              <td class="scorenc">6</td>
              <td class="scorett">625</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    41
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    95
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    158
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    24
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    176
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    51
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478964">
              <td class="scorepl">
                18
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Sleetje2L">
                <a  >
                    <span class="forceWidth">
                                                Sleetje2L
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">6</td>
              <td class="scorett">677</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    89
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    137
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    69
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    21
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    179
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    62
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478963">
              <td class="scorepl">
                19
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Crystal Math">
                <a  >
                    <span class="forceWidth">
                                                Crystal Math
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">6</td>
              <td class="scorett">727</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    145
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    113
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    194
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    11
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    159
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    25
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479081">
              <td class="scorepl">
                20
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Red Pi">
                <a  >
                    <span class="forceWidth">
                                                Red Pi
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">6</td>
              <td class="scorett">741</td>





              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    210
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    63
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    31
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    136
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    9
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    52
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>
            </tr>

            <tr class="" id="team:479078">
              <td class="scorepl">
                21
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="LadMads">
                <a  >
                    <span class="forceWidth">
                                                LadMads
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">6</td>
              <td class="scorett">803</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    209
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    127
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    4 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    153
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    12
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    55
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    87
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479236">
              <td class="scorepl">
                22
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="The Vikings">
                <a  >
                    <span class="forceWidth">
                                                The Vikings
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">349</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    163
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    44
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    73
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    6
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    23
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478969">
              <td class="scorepl">
                23
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Chocolade Kruidnoten">
                <a  >
                    <span class="forceWidth">
                                                Chocolade Kruidnoten
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">441</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    58
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    67
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    127
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    5 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    23
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    46
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478982">
              <td class="scorepl">
                24
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Stardust Crusaders">
                <a  >
                    <span class="forceWidth">
                                                Stardust Crusaders
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">550</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    4 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    50
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 9 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    126
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    19
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    230
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    25
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478599">
              <td class="scorepl">
                25
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Eulerianen">
                <a  >
                    <span class="forceWidth">
                                                Eulerianen
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">570</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    64
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    120
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    131
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    13
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    122
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:476824">
              <td class="scorepl">
                26
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/10.png?v=7.3.2" alt="Fontys University of Applied Science"
                       title="Fontys University of Applied Science">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="CEV">
                <a  >
                    <span class="forceWidth">
                                                CEV
                    </span>
                  <span class="univ forceWidth">
                                                            Fontys University of Applied Science
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">576</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    217
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    127
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    23
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    8
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    61
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478573">
              <td class="scorepl">
                27
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/13.png?v=7.3.2" alt="Leiden University"
                       title="Leiden University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Snekmentation Fault">
                <a  >
                    <span class="forceWidth">
                                                Snekmentation Fault
                    </span>
                  <span class="univ forceWidth">
                                                            Leiden University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">602</td>





              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    46
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    128
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    5
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    205
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    38
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478600">
              <td class="scorepl">
                28
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="chocolademelk">
                <a  >
                    <span class="forceWidth">
                                                chocolademelk
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">607</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    85
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    210
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    128
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    17
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    67
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478966">
              <td class="scorepl">
                29
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="&#039; or 1=1 drop table users;">
                <a  >
                    <span class="forceWidth">
                                                &#039; or 1=1 drop table users;
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">616</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    199
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    72
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    237
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    31
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    17
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478581">
              <td class="scorepl">
                30
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/11.png?v=7.3.2" alt="Vrije Universiteit"
                       title="Vrije Universiteit">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Amazon is on fire">
                <a  >
                    <span class="forceWidth">
                                                Amazon is on fire
                    </span>
                  <span class="univ forceWidth">
                                                            Vrije Universiteit
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">625</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    41
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    145
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    7
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    238
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    94
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478607">
              <td class="scorepl">
                31
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Hack Attack">
                <a  >
                    <span class="forceWidth">
                                                Hack Attack
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">785</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    205
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    66
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    20
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    164
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    110
                    <span>
                                                                                    7 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478606">
              <td class="scorepl">
                32
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Algenritme">
                <a  >
                    <span class="forceWidth">
                                                Algenritme
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">886</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    207
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    45
                    <span>
                                                                                    7 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    221
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    16
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    57
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478603">
              <td class="scorepl">
                33
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="ICE">
                <a  >
                    <span class="forceWidth">
                                                ICE
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">988</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    237
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    228
                    <span>
                                                                                    8 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    169
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    41
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    33
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479080">
              <td class="scorepl">
                34
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="TuringMachine">
                <a  >
                    <span class="forceWidth">
                                                TuringMachine
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">5</td>
              <td class="scorett">1199</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    155
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    197
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    237
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    17
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    193
                    <span>
                                                                                    17 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:476895">
              <td class="scorepl">
                35
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/5.png?v=7.3.2" alt="Radboud University"
                       title="Radboud University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Nameless team">
                <a  >
                    <span class="forceWidth">
                                                Nameless team
                    </span>
                  <span class="univ forceWidth">
                                                            Radboud University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">317</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    51
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    6 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    25
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    139
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    42
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479844">
              <td class="scorepl">
                36
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Name for the algothing">
                <a  >
                    <span class="forceWidth">
                                                Name for the algothing
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">328</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    42
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    141
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    45
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    80
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:476640">
              <td class="scorepl">
                37
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/7.png?v=7.3.2" alt="University of Twente"
                       title="University of Twente">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Dispuut Yorinf - Heren 1">
                <a  >
                    <span class="forceWidth">
                                                Dispuut Yorinf - Heren 1
                    </span>
                  <span class="univ forceWidth">
                                                            University of Twente
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">329</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    130
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    28
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    8 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    18
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    53
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:476933">
              <td class="scorepl">
                38
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/5.png?v=7.3.2" alt="Radboud University"
                       title="Radboud University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="beep boop ben robot">
                <a  >
                    <span class="forceWidth">
                                                beep boop ben robot
                    </span>
                  <span class="univ forceWidth">
                                                            Radboud University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">379</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    57
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    170
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    17
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    35
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479082">
              <td class="scorepl">
                39
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="M^3">
                <a  >
                    <span class="forceWidth">
                                                M^3
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">382</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    55
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    85
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    7
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    75
                    <span>
                                                                                    8 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478967">
              <td class="scorepl">
                40
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="camel_case">
                <a  >
                    <span class="forceWidth">
                                                camel_case
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">395</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    183
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    52
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    14
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    46
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478818">
              <td class="scorepl">
                41
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/2.png?v=7.3.2" alt="Université Catholique de Louvain"
                       title="Université Catholique de Louvain">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Les dés codeurs">
                <a  >
                    <span class="forceWidth">
                                                Les dés codeurs
                    </span>
                  <span class="univ forceWidth">
                                                            Université Catholique de Louvain
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">398</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    66
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    127
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    31
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    74
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478817">
              <td class="scorepl">
                42
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/2.png?v=7.3.2" alt="Université Catholique de Louvain"
                       title="Université Catholique de Louvain">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Le Cercle Des Éplucheurs De Code">
                <a  >
                    <span class="forceWidth">
                                                Le Cercle Des Éplucheurs De Code
                    </span>
                  <span class="univ forceWidth">
                                                            Université Catholique de Louvain
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">428</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    125
                    <span>
                                                                                    7 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    98
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    4 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    10
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    35
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478962">
              <td class="scorepl">
                43
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Codebeukers">
                <a  >
                    <span class="forceWidth">
                                                Codebeukers
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">442</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    58
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    208
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    13
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    43
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478301">
              <td class="scorepl">
                44
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/9.png?v=7.3.2" alt="Utrecht University"
                       title="Utrecht University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="🤔👨‍💻👨‍💻👨‍💻😕">
                <a  >
                    <span class="forceWidth">
                                                🤔👨‍💻👨‍💻👨‍💻😕
                    </span>
                  <span class="univ forceWidth">
                                                            Utrecht University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">458</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    127
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    131
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    19
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    61
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479083">
              <td class="scorepl">
                45
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="HELPME.txt">
                <a  >
                    <span class="forceWidth">
                                                HELPME.txt
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">482</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    70
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    9 + 5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    11
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    196
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    45
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478981">
              <td class="scorepl">
                46
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Just to late">
                <a  >
                    <span class="forceWidth">
                                                Just to late
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">506</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    117
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    141
                    <span>
                                                                                    8 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    4 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    11
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    37
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:476900">
              <td class="scorepl">
                47
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/5.png?v=7.3.2" alt="Radboud University"
                       title="Radboud University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Artificial Incompetence">
                <a  >
                    <span class="forceWidth">
                                                Artificial Incompetence
                    </span>
                  <span class="univ forceWidth">
                                                            Radboud University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">560</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    207
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    196
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    14
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    83
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478582">
              <td class="scorepl">
                48
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/11.png?v=7.3.2" alt="Vrije Universiteit"
                       title="Vrije Universiteit">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Shockers">
                <a  >
                    <span class="forceWidth">
                                                Shockers
                    </span>
                  <span class="univ forceWidth">
                                                            Vrije Universiteit
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">572</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    140
                    <span>
                                                                                    8 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    182
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    25
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    45
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478602">
              <td class="scorepl">
                49
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="jsr $FFBD">
                <a  >
                    <span class="forceWidth">
                                                jsr $FFBD
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">618</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    162
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    225
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    7 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    18
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    73
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478972">
              <td class="scorepl">
                50
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Team №1">
                <a  >
                    <span class="forceWidth">
                                                Team №1
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">622</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    228
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    108
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    25
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    121
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478300">
              <td class="scorepl">
                51
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/9.png?v=7.3.2" alt="Utrecht University"
                       title="Utrecht University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="pi">
                <a  >
                    <span class="forceWidth">
                                                pi
                    </span>
                  <span class="univ forceWidth">
                                                            Utrecht University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">83</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    38
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    4 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    14
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    11
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479242">
              <td class="scorepl">
                52
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Team David en Geert">
                <a  >
                    <span class="forceWidth">
                                                Team David en Geert
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">113</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    50
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    12
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    31
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478970">
              <td class="scorepl">
                53
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="The Y(ee)T Crowd">
                <a  >
                    <span class="forceWidth">
                                                The Y(ee)T Crowd
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">153</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    46
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    6 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    11
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    5 + 5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    16
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479077">
              <td class="scorepl">
                54
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Team Lucer">
                <a  >
                    <span class="forceWidth">
                                                Team Lucer
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">178</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    46
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    16
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    36
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:475938">
              <td class="scorepl">
                55
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/7.png?v=7.3.2" alt="University of Twente"
                       title="University of Twente">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Mokers">
                <a  >
                    <span class="forceWidth">
                                                Mokers
                    </span>
                  <span class="univ forceWidth">
                                                            University of Twente
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">258</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    47
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    14
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    117
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479224">
              <td class="scorepl">
                56
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Team Davit en Geerd">
                <a  >
                    <span class="forceWidth">
                                                Team Davit en Geerd
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">264</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    74
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    11
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    59
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479845">
              <td class="scorepl">
                57
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Kids in a Box">
                <a  >
                    <span class="forceWidth">
                                                Kids in a Box
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">277</td>





              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    118
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    40
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    59
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>
            </tr>

            <tr class="" id="team:478824">
              <td class="scorepl">
                58
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/2.png?v=7.3.2" alt="Université Catholique de Louvain"
                       title="Université Catholique de Louvain">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Prog(r)ammers">
                <a  >
                    <span class="forceWidth">
                                                Prog(r)ammers
                    </span>
                  <span class="univ forceWidth">
                                                            Université Catholique de Louvain
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">289</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    121
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    27
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    61
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478968">
              <td class="scorepl">
                59
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Binary Beasts">
                <a  >
                    <span class="forceWidth">
                                                Binary Beasts
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">325</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    43
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    184
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    7 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    18
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    5 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478574">
              <td class="scorepl">
                60
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/13.png?v=7.3.2" alt="Leiden University"
                       title="Leiden University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Syntax Terror">
                <a  >
                    <span class="forceWidth">
                                                Syntax Terror
                    </span>
                  <span class="univ forceWidth">
                                                            Leiden University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">368</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    200
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    37
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    31
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:477053">
              <td class="scorepl">
                61
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/3.png?v=7.3.2" alt="Université de Mons"
                       title="Université de Mons">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="RETURN PRINT">
                <a  >
                    <span class="forceWidth">
                                                RETURN PRINT
                    </span>
                  <span class="univ forceWidth">
                                                            Université de Mons
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">378</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    4 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    35
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    4 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    23
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    160
                    <span>
                                                                                    7 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478973">
              <td class="scorepl">
                62
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Barbatos">
                <a  >
                    <span class="forceWidth">
                                                Barbatos
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">3</td>
              <td class="scorett">568</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    110
                    <span>
                                                                                    7 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    55
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    143
                    <span>
                                                                                    8 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478825">
              <td class="scorepl">
                63
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/2.png?v=7.3.2" alt="Université Catholique de Louvain"
                       title="Université Catholique de Louvain">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Saperlipopette - It doesn&#039;t work... again">
                <a  >
                    <span class="forceWidth">
                                                Saperlipopette - It doesn&#039;t work... again
                    </span>
                  <span class="univ forceWidth">
                                                            Université Catholique de Louvain
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">83</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    5 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    49
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    34
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478604">
              <td class="scorepl">
                64
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Tommaso, Jan &amp; Mara">
                <a  >
                    <span class="forceWidth">
                                                Tommaso, Jan &amp; Mara
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">90</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    51
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    19
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478609">
              <td class="scorepl">
                65
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Ketel 1">
                <a  >
                    <span class="forceWidth">
                                                Ketel 1
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">141</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    126
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    15
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    6 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:477848">
              <td class="scorepl">
                66
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/3.png?v=7.3.2" alt="Université de Mons"
                       title="Université de Mons">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="UMONS #3">
                <a  >
                    <span class="forceWidth">
                                                UMONS #3
                    </span>
                  <span class="univ forceWidth">
                                                            Université de Mons
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">198</td>





              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    145
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    33
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    12 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:476897">
              <td class="scorepl">
                67
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/5.png?v=7.3.2" alt="Radboud University"
                       title="Radboud University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Heylya">
                <a  >
                    <span class="forceWidth">
                                                Heylya
                    </span>
                  <span class="univ forceWidth">
                                                            Radboud University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">214</td>





              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    135
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    39
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478575">
              <td class="scorepl">
                68
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/13.png?v=7.3.2" alt="Leiden University"
                       title="Leiden University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="$ sudo solve -A problems">
                <a  >
                    <span class="forceWidth">
                                                $ sudo solve -A problems
                    </span>
                  <span class="univ forceWidth">
                                                            Leiden University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">219</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    77
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    42
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:477348">
              <td class="scorepl">
                69
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/5.png?v=7.3.2" alt="Radboud University"
                       title="Radboud University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="OR 1=1">
                <a  >
                    <span class="forceWidth">
                                                OR 1=1
                    </span>
                  <span class="univ forceWidth">
                                                            Radboud University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">254</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    122
                    <span>
                                                                                    7 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    12
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478610">
              <td class="scorepl">
                70
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="404: Groepnaam niet gevonden">
                <a  >
                    <span class="forceWidth">
                                                404: Groepnaam niet gevonden
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">256</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    7 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    15
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    181
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478826">
              <td class="scorepl">
                71
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/2.png?v=7.3.2" alt="Université Catholique de Louvain"
                       title="Université Catholique de Louvain">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Al-bro-rithmics">
                <a  >
                    <span class="forceWidth">
                                                Al-bro-rithmics
                    </span>
                  <span class="univ forceWidth">
                                                            Université Catholique de Louvain
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">286</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    153
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    33
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    5 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478605">
              <td class="scorepl">
                72
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="console.log(teamNaam)">
                <a  >
                    <span class="forceWidth">
                                                console.log(teamNaam)
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">304</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    239
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    25
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    5 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478819">
              <td class="scorepl">
                73
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/2.png?v=7.3.2" alt="Université Catholique de Louvain"
                       title="Université Catholique de Louvain">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="CodeWe">
                <a  >
                    <span class="forceWidth">
                                                CodeWe
                    </span>
                  <span class="univ forceWidth">
                                                            Université Catholique de Louvain
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">328</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    7 + 5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    17
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    211
                    <span>
                                                                                    6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:476690">
              <td class="scorepl">
                74
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/3.png?v=7.3.2" alt="Université de Mons"
                       title="Université de Mons">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="UMONS #1">
                <a  >
                    <span class="forceWidth">
                                                UMONS #1
                    </span>
                  <span class="univ forceWidth">
                                                            Université de Mons
                                                    </span>
                </a>
              </td>
              <td class="scorenc">2</td>
              <td class="scorett">382</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    110
                    <span>
                                                                                    9 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    52
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    5 + 4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:476691">
              <td class="scorepl">
                75
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/3.png?v=7.3.2" alt="Université de Mons"
                       title="Université de Mons">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Arthooouuuuur">
                <a  >
                    <span class="forceWidth">
                                                Arthooouuuuur
                    </span>
                  <span class="univ forceWidth">
                                                            Université de Mons
                                                    </span>
                </a>
              </td>
              <td class="scorenc">1</td>
              <td class="scorett">70</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    70
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:477831">
              <td class="scorepl">
                76
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/3.png?v=7.3.2" alt="Université de Mons"
                       title="Université de Mons">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="GrosVarchar">
                <a  >
                    <span class="forceWidth">
                                                GrosVarchar
                    </span>
                  <span class="univ forceWidth">
                                                            Université de Mons
                                                    </span>
                </a>
              </td>
              <td class="scorenc">1</td>
              <td class="scorett">130</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    7 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    110
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    8 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478611">
              <td class="scorepl">
                77
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/13.png?v=7.3.2" alt="Leiden University"
                       title="Leiden University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="DROP TABLE participants;">
                <a  >
                    <span class="forceWidth">
                                                DROP TABLE participants;
                    </span>
                  <span class="univ forceWidth">
                                                            Leiden University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">1</td>
              <td class="scorett">253</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    233
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 6 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478828">
              <td class="scorepl">
                78
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/2.png?v=7.3.2" alt="Université Catholique de Louvain"
                       title="Université Catholique de Louvain">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="AlphaGang">
                <a  >
                    <span class="forceWidth">
                                                AlphaGang
                    </span>
                  <span class="univ forceWidth">
                                                            Université Catholique de Louvain
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478971">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Drebsko Niffo&#039;s">
                <a  >
                    <span class="forceWidth">
                                                Drebsko Niffo&#039;s
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479276">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="FE203">
                <a  >
                    <span class="forceWidth">
                                                FE203
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478827">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/2.png?v=7.3.2" alt="Université Catholique de Louvain"
                       title="Université Catholique de Louvain">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Lolli.pop()">
                <a  >
                    <span class="forceWidth">
                                                Lolli.pop()
                    </span>
                  <span class="univ forceWidth">
                                                            Université Catholique de Louvain
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478823">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/2.png?v=7.3.2" alt="Université Catholique de Louvain"
                       title="Université Catholique de Louvain">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="OD">
                <a  >
                    <span class="forceWidth">
                                                OD
                    </span>
                  <span class="univ forceWidth">
                                                            Université Catholique de Louvain
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478601">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="ou7/Srq84aruLTCdGWo4sHC/FU...">
                <a  >
                    <span class="forceWidth">
                                                ou7/Srq84aruLTCdGWo4sHC/FU...
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478578">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/11.png?v=7.3.2" alt="Vrije Universiteit"
                       title="Vrije Universiteit">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="TAE++">
                <a  >
                    <span class="forceWidth">
                                                TAE++
                    </span>
                  <span class="univ forceWidth">
                                                            Vrije Universiteit
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479085">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/8.png?v=7.3.2" alt="Eindhoven University of Technology"
                       title="Eindhoven University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="Team Viktor">
                <a  >
                    <span class="forceWidth">
                                                Team Viktor
                    </span>
                  <span class="univ forceWidth">
                                                            Eindhoven University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478608">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/6.png?v=7.3.2" alt="Universiteit van Amsterdam"
                       title="Universiteit van Amsterdam">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="The Thinking Machines">
                <a  >
                    <span class="forceWidth">
                                                The Thinking Machines
                    </span>
                  <span class="univ forceWidth">
                                                            Universiteit van Amsterdam
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479843">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/4.png?v=7.3.2" alt="Delft University of Technology"
                       title="Delft University of Technology">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="typeof(NaN) == &quot;number&quot; == true == (&quot;really?&quot; ? true : false)">
                <a  >
                    <span class="forceWidth">
                                                typeof(NaN) == &quot;number&quot; == true == (&quot;really?&quot; ? true : false)
                    </span>
                  <span class="univ forceWidth">
                                                            Delft University of Technology
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478649">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/3.png?v=7.3.2" alt="Université de Mons"
                       title="Université de Mons">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="UMONS #2">
                <a  >
                    <span class="forceWidth">
                                                UMONS #2
                    </span>
                  <span class="univ forceWidth">
                                                            Université de Mons
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478650">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/BEL.png?v=7.3.2" alt="Belgium"
                       title="Belgium">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/3.png?v=7.3.2" alt="Université de Mons"
                       title="Université de Mons">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="UMONS #4">
                <a  >
                    <span class="forceWidth">
                                                UMONS #4
                    </span>
                  <span class="univ forceWidth">
                                                            Université de Mons
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:478632">
              <td class="scorepl">
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="countryflag"
                       src="/images/countries/NLD.png?v=7.3.2" alt="Netherlands"
                       title="Netherlands">
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/13.png?v=7.3.2" alt="Leiden University"
                       title="Leiden University">
                </a>
              </td>
              <td class="scoretn cl_FFFFFF" title="We use Arch, btw.">
                <a  >
                    <span class="forceWidth">
                                                We use Arch, btw.
                    </span>
                  <span class="univ forceWidth">
                                                            Leiden University
                                                    </span>
                </a>
              </td>
              <td class="scorenc">0</td>
              <td class="scorett">0</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>
            </tr>
            <tr style="border-top: 2px solid black;">
              <td id="scoresummary" title="Summary" colspan="4">Summary</td>
              <td title="total solved" class="scorenc">
                346
              </td>
              <td></td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                1
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                13
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                27
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            222min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                33
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                80
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                56
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            43min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                69
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                195
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                8
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            12min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                6
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                36
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                40
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            92min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                39
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                109
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                63
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            23min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                10
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                17
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                34
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            99min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                22
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                61
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                29
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            22min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                77
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                15
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                0
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            5min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                25
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                51
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                39
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            34min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                64
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                201
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                22
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            5min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                0
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                2
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                10
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            n/a
                                                    </span>
                </a>
              </td>
            </tr>

            <tr class="sortorderswitch" id="team:479848">
              <td class="scorepl">
                1
              </td>
              <td class="scoreaf">
                <a >
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/16.png?v=7.3.2" alt="bol.com"
                       title="bol.com">
                </a>
              </td>
              <td class="scoretn cl_ffcc33" title="bol.com 1">
                <a  >
                    <span class="forceWidth">
                                                    <span class="badge badge-warning" style="margin-right: 2em; font-weight: normal;">
                            Companies
                        </span>
                                                bol.com 1
                    </span>
                  <span class="univ forceWidth">
                                                            bol.com
                                                    </span>
                </a>
              </td>
              <td class="scorenc">9</td>
              <td class="scorett">904</td>





              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    222
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    117
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    15
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    47
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    156
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    106
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    6
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    88
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    27
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>
            </tr>

            <tr class="" id="team:479846">
              <td class="scorepl">
                2
              </td>
              <td class="scoreaf">
                <a >
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/15.png?v=7.3.2" alt="CWI"
                       title="CWI">
                </a>
              </td>
              <td class="scoretn cl_ffcc33" title="CWI 1">
                <a  >
                    <span class="forceWidth">
                                                CWI 1
                    </span>
                  <span class="univ forceWidth">
                                                            CWI
                                                    </span>
                </a>
              </td>
              <td class="scorenc">9</td>
              <td class="scorett">958</td>





              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    134
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    105
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    37
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    4 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    65
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    48
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    8
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    89
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    124
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    188
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>
            </tr>

            <tr class="" id="team:479852">
              <td class="scorepl">
                3
              </td>
              <td class="scoreaf">
                <a >
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/18.png?v=7.3.2" alt="ORTEC"
                       title="ORTEC">
                </a>
              </td>
              <td class="scoretn cl_ffcc33" title="ORTEC 1">
                <a  >
                    <span class="forceWidth">
                                                ORTEC 1
                    </span>
                  <span class="univ forceWidth">
                                                            ORTEC
                                                    </span>
                </a>
              </td>
              <td class="scorenc">8</td>
              <td class="scorett">737</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    128
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    31
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    75
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    205
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    111
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    7
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    36
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    24
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479853">
              <td class="scorepl">
                4
              </td>
              <td class="scoreaf">
                <a >
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/18.png?v=7.3.2" alt="ORTEC"
                       title="ORTEC">
                </a>
              </td>
              <td class="scoretn cl_ffcc33" title="ORTEC 2">
                <a  >
                    <span class="forceWidth">
                                                ORTEC 2
                    </span>
                  <span class="univ forceWidth">
                                                            ORTEC
                                                    </span>
                </a>
              </td>
              <td class="scorenc">7</td>
              <td class="scorett">654</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    127
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    28
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    71
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    209
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    128
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    15
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    3 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    16
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479851">
              <td class="scorepl">
                5
              </td>
              <td class="scoreaf">
                <a >
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/17.png?v=7.3.2" alt="Dassault Systèmes"
                       title="Dassault Systèmes">
                </a>
              </td>
              <td class="scoretn cl_ffcc33" title="Dassault Systemes – DELMIA Quintiq – Team Omega">
                <a  >
                    <span class="forceWidth">
                                                Dassault Systemes – DELMIA Quintiq – Team Omega
                    </span>
                  <span class="univ forceWidth">
                                                            Dassault Systèmes
                                                    </span>
                </a>
              </td>
              <td class="scorenc">6</td>
              <td class="scorett">402</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    5 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    50
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    167
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct score_first">
                    38
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_incorrect">
                    &nbsp;
                    <span>
                                                                                    9 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    9
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    101
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    17
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479847">
              <td class="scorepl">
                6
              </td>
              <td class="scoreaf">
                <a >
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/15.png?v=7.3.2" alt="CWI"
                       title="CWI">
                </a>
              </td>
              <td class="scoretn cl_ffcc33" title="CWI 2">
                <a  >
                    <span class="forceWidth">
                                                CWI 2
                    </span>
                  <span class="univ forceWidth">
                                                            CWI
                                                    </span>
                </a>
              </td>
              <td class="scorenc">6</td>
              <td class="scorett">882</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    163
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    38
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    158
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    239
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    67
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    77
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479854">
              <td class="scorepl">
                7
              </td>
              <td class="scoreaf">
                <a >
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/19.png?v=7.3.2" alt="ASML"
                       title="ASML">
                </a>
              </td>
              <td class="scoretn cl_ffcc33" title="ASML">
                <a  >
                    <span class="forceWidth">
                                                ASML
                    </span>
                  <span class="univ forceWidth">
                                                            ASML
                                                    </span>
                </a>
              </td>
              <td class="scorenc">6</td>
              <td class="scorett">915</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    177
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    148
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    1 + 5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    208
                    <span>
                                                                                    4 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    33
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    184
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    25
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479850">
              <td class="scorepl">
                8
              </td>
              <td class="scoreaf">
                <a >
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/17.png?v=7.3.2" alt="Dassault Systèmes"
                       title="Dassault Systèmes">
                </a>
              </td>
              <td class="scoretn cl_ffcc33" title="Dassault Systèmes - DELMIA Quintiq - The Laundry Team">
                <a  >
                    <span class="forceWidth">
                                                Dassault Systèmes - DELMIA Quintiq - The Laundry Team
                    </span>
                  <span class="univ forceWidth">
                                                            Dassault Systèmes
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">293</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    44
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    0 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    200
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    10
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    19
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr class="" id="team:479849">
              <td class="scorepl">
                9
              </td>
              <td class="scoreaf">
                <a >
                </a>
              </td>
              <td class="scoreaf">
                <a >
                  <img loading="lazy" class="affiliation-logo"
                       src="/images/affiliations/16.png?v=7.3.2" alt="bol.com"
                       title="bol.com">
                </a>
              </td>
              <td class="scoretn cl_ffcc33" title="bol.com 2">
                <a  >
                    <span class="forceWidth">
                                                bol.com 2
                    </span>
                  <span class="univ forceWidth">
                                                            bol.com
                                                    </span>
                </a>
              </td>
              <td class="scorenc">4</td>
              <td class="scorett">486</td>





              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    204
                    <span>
                                                                                    5 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    67
                    <span>
                                                                                    3 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    2 + 2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    18
                    <span>
                                                                                    1 try
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_pending">
                    &nbsp;
                    <span>
                                                                                    6 + 1 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
                <a >
                  <div class="score_correct">
                    57
                    <span>
                                                                                    2 tries
                                                                            </span>
                  </div>
                </a>
              </td>




              <td class="score_cell">
              </td>
            </tr>

            <tr style="border-top: 2px solid black;">
              <td id="scoresummary" title="Summary" colspan="4">Summary</td>
              <td title="total solved" class="scorenc">
                59
              </td>
              <td></td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                2
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                1
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                0
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            134min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                7
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                13
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                3
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            105min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                9
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                11
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                0
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            15min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                1
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                9
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                12
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            167min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                7
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                13
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                1
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            38min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                3
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                0
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                5
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            156min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                6
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                15
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                4
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            48min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                9
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                0
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                0
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            6min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                5
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                10
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                2
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            36min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                9
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                9
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                0
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            16min
                                                    </span>
                </a>
              </td>
              <td style="text-align: left;">
                <a >
                  <i class="fas fa-thumbs-up fa-fw"></i>
                  <span style="font-size:90%;" title="number of accepted submissions">
                                1
                            </span>
                  <br/>

                  <i class="fas fa-thumbs-down fa-fw"></i>
                  <span style="font-size:90%;" title="number of rejected submissions">
                                1
                            </span>
                  <br/>

                  <i class="fas fa-question-circle fa-fw"></i>
                  <span style="font-size:90%;" title="number of pending submissions">
                                1
                            </span>
                  <br/>

                  <i class="fas fa-clock fa-fw"></i>
                  <span style="font-size:90%;" title="first solved">
                                                            188min
                                                    </span>
                </a>
              </td>
            </tr>
            </tbody>
          </table>

          <p><br/><br/></p>

          <table id="categ_legend" class="scoreboard scorelegend ">
            <thead>
            <tr>
              <th scope="col">
                <a >Categories</a>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr >
              <td>
                <a >Participants</a>
              </td>
            </tr>
            <tr style="background: #ffcc33;">
              <td>
                <a >Companies</a>
              </td>
            </tr>
            </tbody>
          </table>

          <table id="cell_legend" class="scoreboard scorelegend ">
            <thead>
            <tr>
              <th scope="col">Cell colours</th>
            </tr>
            </thead>
            <tbody>
            <tr class="score_first">
              <td>Solved first</td>
            </tr>
            <tr class="score_correct">
              <td>Solved</td>
            </tr>
            <tr class="score_incorrect">
              <td>Tried, incorrect</td>
            </tr>
            <tr class="score_pending">
              <td>Tried, pending</td>
            </tr>
            <tr class="score_neutral">
              <td>Untried</td>
            </tr>
            </tbody>
          </table>

          <p id="lastmod">
            Last Update: Sat 12 Dec 2020 17:03:33 CET<br/>
            using <a href="https://www.domjudge.org/" target="_top">DOMjudge</a>
          </p>

</section>
  `;
}
