import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList() {
  return (
    <div className="CourseList">
      <table id="CourseList">
        <thead>
          <CourseListRow 
            isHeader={true}
            textFirstCell="Course Name"
            textSecondCell="Credit"
            textThirdCell="Availability"
          />
        </thead>
        <tbody>
          <CourseListRow 
            isHeader={false}
            textFirstCell="ES6"
            textSecondCell={12}
            textThirdCell="available"
          />
          <CourseListRow 
            isHeader={false}
            textFirstCell="Webpack"
            textSecondCell={4}
            textThirdCell="available"
          />
          <CourseListRow 
            isHeader={false}
            textFirstCell="React"
            textSecondCell={7}
            textThirdCell="available"
          />
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
