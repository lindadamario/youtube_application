import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import registerServiceWorker from './registerServiceWorker';
const API_KEY = 'AIzaSyDRmqNSfBg1v4kbCJ4NiZzNVPWwoDxwjeA';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }


    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// FAT ARROW
// it is nearly equal to th classic one (the classic "function" keyword)
//
//
//


/*

first part on search_bar.js
we have the api and we need to make a call and spread this info through all the components because all of them have to
update/respond to the call of the API.

"downwords data flow" -> react term used to say that a parent component is responsible for fetching data
from api or flux or redux for example.  So the parent is responsible for transmitting the info to all
the other components. Index.js is the parent component for most of the applications. all the components in
the other files are children of "app", the component in index.js.

first we need to import "import YTSearch from 'youtube-api-search';".
(note: it didn't work at the first shoot. i updated npm and restarted react)


Refactoring the functional component in class component.
we need to use "state" that's why we need to transform it into a class. it's
gonna change over time.

Functional component:

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


class component:

class App extends Component {
    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}

Our list of videos is gonna change over time; we need to use state.
whenever the user enters a new search input, we need to conduct a new search
and set the results of that search on state.
now we need to set up the "constructor" function.

When we define the state, it's better to use a term that really defines the purpose
of what we are doing. for example in this case, it sounds good to define the
state "videos". it's gonna be an erray because it's gonna return a list of arryas.

In order to update the list of video that we have in return to the search,
we return "this.setState" in the YTSearch.
Refactoring the YTSearch with the fat arroy.
current version:


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
            this.setState({videos: data });
        });
    }


    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}


after refactoring:


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
            this.setState({videos: data });
        });
    }


    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}

the argument "data" doesn't have to be data. it can be anything. In this case, by being the data
a set of videos, we can substitute the word "data" with "videos";

how it looks now:

YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos: videos });
        });

we can condense this function even more and because the state is videos:videos,
we can delete one of these and leave only "videos"
This only works when the key and the property names are the same.
this is read by React as:
    this.setState({ videos: videos });

so now when the component renders for the first time, it gives back the data
we put in the request (surfboards).
Now we have to work on the three components that have to use the API data: video_detail.js,
video_list_item.js and video_list.js.

video_list is the parent of the other two components (video_list_item and video_details).

video_list.js doesn't have a need for state. it doens't record any user interaction or render itself.
so it will be purely presentational.

App is the parent of both searchbar and VideoList.
Videolist needs to get access to the videos in the App compoennt (YTSearch)'s state.
basically we need to pass some data from the parent component App to the child
component VideoList; to do we use a property of JSX; we define the property videos
and write:
    videos={this.props.videos}


video_list is a functional component. when we use a functional component, this porps
object will arrive as argument to the function.

const VideoList = (props) => {
    return (
        <ul>

        </ul>
    );
};

and then we call "props.videos" in the return statement:

const VideoList = (props) => {
    return (
        <ul>
            {props.videos.length}
        </ul>
    );
};


On the browser, we see at first 0 and then 5 (5 means that we have found 5 videos).
We see the 0 because we initialise our state to an empty array; and then we make our
search. the search is not instanteneus operation, but it's a narrow request, it takes
some time. between the two request there is some time when the request is equa to 0 until
the fetch function works.

in a functional component the props object is an argument.
In a class based component, props are available anywhere and in any method we define
as "this.props.". So in a render method we could say: "this.props"....

so it's really important that when we refactor a functional component into a class
based component, we need to update all the references from props.videos.length to
this.props.videos.length i.e.
(1)
const VideoList = (props) => {
    return (
        <ul>
            {props.videos.length}
        </ul>
    );
};

(2)
class extends VideoList {
    return (
        <ul>
            {this.props.videos.length}
        </ul>
    );
};

continue on videolist







*/
