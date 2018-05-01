import React, { Component } from 'react';
import Main from './Components/Main'
import './App.css';

class App extends Component {

  constructor(){
    super()
      this.state = {

        categories:[


          {

            categoryName:'Sports',
            categoryPuzzles:[
              {
                puzzleName:'NFL Teams',
                grid:[
                      ['K','D','E','E','A','G','L','E','S','T'],
                      ['S','N','O','I','L','Q','G','R','E','A'],
                      ['E','H','K','D','H','V','B','E','Y','D'],
                      ['S','Y','R','A','V','E','N','S','O','V'],
                      ['R','R','A','G','F','N','L','L','T','B'],
                      ['E','O','M','H','I','E','P','D','F','E'],
                      ['K','G','S','N','G','H','H','N','G','A'],
                      ['C','H','R','U','I','W','J','F','T','R'],
                      ['A','Y','T','N','G','F','D','E','C','S'],
                      ['P','Y','S','G','N','I','K','I','V','S']
                      ],
                words:['Lions','Bears','Eagles','Rams','Dolphins','Ravens','Packers','Vikings'],
                solved:[]
              },
              {
                puzzleName:'NBA Teams',
                grid:[
                      ['E','I','H','J','A','Z','Z','Y','R','T'],
                      ['S','N','O','I','L','Q','G','R','O','A'],
                      ['R','S','N','O','T','S','I','P','C','D'],
                      ['A','Y','R','T','E','H','N','S','K','V'],
                      ['P','R','A','H','F','A','L','L','E','H'],
                      ['T','O','N','U','I','W','P','D','T','D'],
                      ['O','G','S','N','H','K','R','N','S','Y'],
                      ['R','H','R','D','I','S','J','W','T','Y'],
                      ['S','Y','T','E','G','F','D','E','C','S'],
                      ['P','S','D','R','A','Z','I','W','V','E']
                      ],
                words:['Jazz','Raptors','Pistons','Hawks','Thunder','Wizards','Rockets'],
                solved:[]
              }
                            ]

        },
        {

          categoryName:'Movies',
          categoryPuzzles:[
            {
              puzzleName:'Scary Movies',
              grid:[
                    ['G','F','E','F','A','Y','B','E','S','T'],
                    ['S','W','A','J','R','Q','G','R','A','A'],
                    ['E','H','K','D','H','V','B','E','W','D'],
                    ['S','Y','M','T','I','L','P','S','O','V'],
                    ['R','R','A','G','F','N','L','L','T','V'],
                    ['E','S','N','E','I','L','A','D','F','N'],
                    ['K','G','T','N','G','H','H','N','G','A'],
                    ['C','H','R','U','I','W','J','F','T','R'],
                    ['A','S','U','O','I','D','I','S','N','I'],
                    ['P','S','Y','C','H','O','Y','I','E','S']
                    ],
              words:['Psycho','It','Jaws','Insidious','Saw','Split','Aliens'],
              solved:[]
            },
            {
              puzzleName:'Action Movies',
              grid:[

                    ['S','N','O','D','E','E','P','S','Y','T'],
                    ['E','R','A','M','B','O','B','E','Y','E'],
                    ['X','Y','M','A','T','R','I','X','O','R'],
                    ['A','R','A','G','F','N','B','L','T','M'],
                    ['M','O','D','I','E','H','A','R','D','I'],
                    ['D','G','S','N','G','H','H','N','G','N'],
                    ['A','L','L','I','B','L','L','I','K','A'],
                    ['M','B','T','N','G','F','H','E','A','T'],
                    ['J','O','H','N','W','I','C','K','G','O'],
                    ['T','E','B','L','A','D','E','I','G','R']
                    ],
              words:['Blade','Mad Max','Matrix','Die Hard','Terminator','Kill Bill','John Wick','Speed','Rambo','Heat'],
              solved:[]
            }
                          ]

      },
      {

          categoryName:'Characters',
          categoryPuzzles:[
            {
              puzzleName:'Superheroes',
              grid:[
                    ['D','E','A','D','P','O','O','L','R','I'],
                    ['S','W','A','J','R','Q','G','O','N','E'],
                    ['E','H','K','A','H','V','R','A','W','N'],
                    ['S','Y','V','T','I','S','M','S','O','I'],
                    ['R','E','A','G','C','T','L','L','H','R'],
                    ['N','F','F','H','A','L','R','D','U','E'],
                    ['K','G','A','B','G','H','H','N','L','V'],
                    ['C','C','R','U','I','W','J','F','K','L'],
                    ['H','S','U','O','N','I','B','O','R','O'],
                    ['D','G','B','T','H','O','R','I','E','W']
                    ],
              words:['Deadpool','Thor','Batman','Wolverine','Robin','Raven','Hulk','Rorschach'],
              solved:[]
            },
            {
              puzzleName:'Cartoons',
              grid:[
                    ['J','S','Y','P','O','P','E','Y','E','T'],
                    ['E','N','O','I','L','Q','G','T','J','A'],
                    ['T','O','R','U','G','R','A','T','S','D'],
                    ['S','S','G','A','R','F','I','E','L','D'],
                    ['O','P','A','S','F','N','F','H','T','J'],
                    ['N','M','M','F','M','T','G','F','F','D'],
                    ['S','I','S','N','G','U','O','D','G','R'],
                    ['C','S','R','U','I','W','R','F','T','R'],
                    ['A','Y','O','G','I','B','E','F','R','I'],
                    ['P','Y','S','R','T','I','S','G','S','Y']
                    ],
              words:['Jetsons','Yogi Bear','Smurfs','Doug','Garfield','Rugrats','Simpsons','Popeye'],
              solved:[]
            }
                          ]

      },
      {

          categoryName:'United States',
          categoryPuzzles:[
            {
              puzzleName:'US States',
              grid:[
                    ['I','N','A','D','P','O','U','L','R','I'],
                    ['D','W','E','O','R','Q','G','T','N','E'],
                    ['A','H','I','T','H','T','R','N','A','N'],
                    ['H','H','V','O','Y','E','M','N','O','H'],
                    ['O','A','A','O','W','X','L','O','H','R'],
                    ['N','E','V','A','D','A','R','G','U','E'],
                    ['E','E','U','B','G','S','H','E','L','V'],
                    ['A','R','I','Z','O','N','A','R','K','L'],
                    ['H','D','U','N','E','W','Y','O','R','K'],
                    ['D','G','B','T','E','G','Y','I','B','X']
                    ],
              words:['Idaho','Iowa','Utah','New York','Texas','Nevada','Ohio','Oregon','Arizona'],
              solved:[]
            },
            {
              puzzleName:'US Cities',
              grid:[
                    ['H','O','U','S','T','O','N','Y','E','T'],
                    ['E','R','L','A','U','G','U','S','T','A'],
                    ['C','L','R','A','G','D','D','T','I','D'],
                    ['H','A','U','A','F','G','H','E','O','D'],
                    ['I','N','A','S','F','F','F','H','R','J'],
                    ['C','D','M','F','M','T','U','F','T','I'],
                    ['A','O','S','N','G','U','O','B','E','M'],
                    ['G','S','R','U','I','W','R','F','D','A'],
                    ['O','Y','S','A','N','T','A','F','E','I'],
                    ['T','A','M','P','A','B','A','Y','S','M']
                    ],
              words:['Tampa Bay','Houston','Orlando','Santa Fe','Miami','Buffalo','Chicago','Detroit','Augusta'],
              solved:[]
            }
                          ]

      }



                  ]


      }
      this.store = this.store.bind(this);

  }

  componentDidMount(){
      this.store();

  }
store(){

    let st = localStorage.getItem("categories");
    if(st == null){
      localStorage.setItem("categories",JSON.stringify(this.state.categories));

}


}
  render() {
    return (
      <div className="App">
          <h1 className="Title">Word Search</h1>
          <Main categories={this.state.categories}></Main>
      </div>
    );
  }
}

export default App;


/*

categories:[
{
  categoryName:'String',
  categoryPuzzles:[
    puzzles:[{
      puzzleName:'String',
      grid:[]
      words:[]
      solved:[{index,x1,x2,y1,y2}{index,x1,x2,y1,y2}]
          }]
    ]
}
]

*/
