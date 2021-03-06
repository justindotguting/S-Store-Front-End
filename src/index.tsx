import * as React from "react";
import * as ReactDOM from "react-dom";
import {Search} from "./pages/search"
import {Home} from "./pages/home"

import {Layout} from "./components/layout"
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import {addCourse, setDepartments, update} from './actions'
import { sStore } from './reducers'
import thunkMiddleware from 'redux-thunk'

let store = createStore(sStore, applyMiddleware(thunkMiddleware))
store.dispatch(addCourse({
    title: "hacksu",
    course: 12312,
    department: 1,
    section: 1,
    semester: 1,
    year: 2016,
    teacher: "Isaac",
    CRN: 123123,
    keyword: "Student led classes"
}))

store.dispatch(addCourse({
    title: "KHE",
    course: 12310,
    department: 1,
    section: 1,
    semester: 1,
    year: 2016,
    teacher: "Isaac",
    CRN: 123123,
    keyword: "Student Led Classes"
}))

store.dispatch(update("http://www.catohenry.com:8080"))

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <Route path="/search" component={Search}/>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("react")
);