import React, { Component } from 'react';
import Book from './Book';

// import { Container } from './styles';



const experiment = {  
    "title":"Satire TV",
    "subtitle":"Politics and Comedy in the Post-Network Era",
    "authors":[  
       "Jonathan Gray",
       "Jeffrey P. Jones",
       "Ethan Thompson"
    ],
    "publisher":"NYU Press",
    "publishedDate":"2009-04-01",
    "description":"Satirical TV has become mandatory viewing for citizens wishing to make sense of the bizarre contemporary state of political life. Shifts in industry economics and audience tastes have re-made television comedy, once considered a wasteland of escapist humor, into what is arguably the most popular source of political critique. From fake news and pundit shows to animated sitcoms and mash-up videos, satire has become an important avenue for processing politics in informative and entertaining ways, and satire TV is now its own thriving, viable television genre. Satire TV examines what happens when comedy becomes political, and politics become funny. A series of original essays focus on a range of programs, from The Daily Show to South Park, Da Ali G Show to The Colbert Report, The Boondocks to Saturday Night Live, Lil’ Bush to Chappelle’s Show, along with Internet D.I.Y. satire and essays on British and Canadian satire. They all offer insights into what today’s class of satire tells us about the current state of politics, of television, of citizenship, all the while suggesting what satire adds to the political realm that news and documentaries cannot.",
    "industryIdentifiers":[  
       {  
          "type":"ISBN_10",
          "identifier":"081473216X"
       },
       {  
          "type":"ISBN_13",
          "identifier":"9780814732168"
       }
    ],
    "readingModes":{  
       "text":true,
       "image":false
    },
    "pageCount":288,
    "printType":"BOOK",
    "categories":[  
       "Performing Arts"
    ],
    "maturityRating":"NOT_MATURE",
    "allowAnonLogging":true,
    "contentVersion":"0.6.4.0.preview.2",
    "panelizationSummary":{  
       "containsEpubBubbles":false,
       "containsImageBubbles":false
    },
    "imageLinks":{  
       "smallThumbnail":"http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
       "thumbnail":"http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language":"en",
    "previewLink":"http://books.google.com/books?id=1wy49i-gQjIC&printsec=frontcover&dq=satire&hl=&cd=3&source=gbs_api",
    "infoLink":"https://play.google.com/store/books/details?id=1wy49i-gQjIC&source=gbs_api",
    "canonicalVolumeLink":"https://market.android.com/details?id=book-1wy49i-gQjIC",
    "id":"1wy49i-gQjIC",
    "shelf":"read"
 };

 const experiment2 = {  
    "title":"Needful Things",
    "authors":[  
       "Stephen King"
    ],
    "publisher":"Simon and Schuster",
    "publishedDate":"2016-05-03",
    "description":"Now available for the first time in a mass-market premium paperback edition—master storyteller Stephen King presents the classic #1 New York Times bestseller about a mysterious store than can sell you whatever you desire—but not without exacting a terrible price in return. “There are two prices for this. Half…and half. One half is cash. The other is a deed. Do you understand?” The town of Castle Rock, Maine has seen its fair share of oddities over the years, but nothing is a peculiar as the little curio shop that’s just opened for business. Its mysterious proprietor, Leland Gaunt, seems to have something for everyone out on display at Needful Things…interesting items that run the gamut from worthless to priceless. Nothing has a price tag in this place, but everything is certainly for sale. The heart’s desire for any resident of Castle Rock can easily be found among the curiosities…in exchange for a little money and—at the specific request of Leland Gaunt—a whole lot of menace against their fellow neighbors. Everyone in town seems willing to make a deal at Needful Things, but the devil is in the details. And no one takes heed of the little sign handing on the wall: Caveat emptor. In other words, let the buyer beware…",
    "industryIdentifiers":[  
       {  
          "type":"ISBN_13",
          "identifier":"9781501143786"
       },
       {  
          "type":"ISBN_10",
          "identifier":"1501143786"
       }
    ],
    "readingModes":{  
       "text":false,
       "image":false
    },
    "pageCount":960,
    "printType":"BOOK",
    "categories":[  
       "Fiction"
    ],
    "averageRating":3.5,
    "ratingsCount":28,
    "maturityRating":"NOT_MATURE",
    "allowAnonLogging":false,
    "contentVersion":"1.3.1.0.preview.0",
    "imageLinks":{  
       "smallThumbnail":"http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
       "thumbnail":"http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language":"en",
    "previewLink":"http://books.google.com/books?id=jAUODAAAQBAJ&printsec=frontcover&dq=king&hl=&cd=8&source=gbs_api",
    "infoLink":"http://books.google.com/books?id=jAUODAAAQBAJ&dq=king&hl=&source=gbs_api",
    "canonicalVolumeLink":"https://books.google.com/books/about/Needful_Things.html?hl=&id=jAUODAAAQBAJ",
    "id":"jAUODAAAQBAJ",
    "shelf":"read"
 };



class Bookshelf extends Component {

    state = {
        books: []
      }


      componentWillMount() {
         this.setState({ books: this.props })
         console.log('Bookshelf will mount', this.props)
    }
     
    
    render() {
        
        return (   
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* <Book metaData={experiment} />
                    <Book metaData={experiment2} /> */}

                    {this.props.groupOfBooks.map( results => (
                       <Book metaData={results} key={results.id}/>  
                     ) )}

                    </ol>
                </div>
                </div>
                )
            }
        }
            
export default Bookshelf;
