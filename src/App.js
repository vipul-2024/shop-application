import React from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Shopping Cart</h1>
        <button>Wecome</button>
      </header>
      <SearchComponent searchCourse={searchCourse} 
                        courseSearchUserFunction=
                            {courseSearchUserFunction} />
      <main className="App-main">
        <ShowCourseComponent
          courses={courses}
          filterCourseFunction={filterCourseFunction}
          addCourseToCartFunction={addCourseToCartFunction}
        />

        <UserCartComponent
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={
            totalAmountCalculationFunction
          }
          setCartCourses={setCartCourses}
        />
      </main>
    </div>

  );
}

export default App;