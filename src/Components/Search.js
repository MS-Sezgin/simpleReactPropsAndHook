import React from 'react';
import { STUDENTS } from '../studentList';

// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,
function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split('-');
  const [yyyy, mm, dd] = validityDate.split('-');
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return (maxValid >= selected) && (maxValid >= today);
}

//------------------VARİABLE-------------------\\
let tempJoining = "";//İnput date value tutacak variable
let studentCheck = {
  students: STUDENTS,//STUDENT valuemizi tutan variable. Aslında kullanmasak olurdu ama tek bir objede tüm veriyi tutmak istedim
  name: [],//ResidentList'e gönderilecek listeyi tutan variable
  tempName: " "//İnput name value tutacak variable
};
//------------------VARİABLE-------------------\\


//------------------INPUT TO VARİABLE-------------------\\
const joiningDateEvent = (e) => {tempJoining = e.target.value;}
const studentsEvent = (e) => {studentCheck.tempName = e.target.value;}
//------------------INPUT TO VARİABLE-------------------\\


function Search(props) {

  const buttonEvent = () => {
    for (let index = 0; index < studentCheck.students.length; index++) {
      if ((studentCheck.students[index].name).toLowerCase() === (studentCheck.tempName).toLowerCase()) {
        if (!studentCheck.name.includes(studentCheck.students[index].name)) {
          if (checkValidity(tempJoining, studentCheck.students[index].validityDate)) {
            studentCheck.name.push(studentCheck.students[index].name);
            props.setState([studentCheck.name]);
            props.errMessageFunc(" ")
            studentCheck.tempName = " "
            tempJoining = " "
            break
          }
          else {
            props.errMessageFunc("Sorry " + studentCheck.tempName + "'s validity has expired!")
            break
          }
        } else {
          props.errMessageFunc(" ")
          break
        }
      }
      else {
        props.errMessageFunc("Sorry " + studentCheck.tempName + " is not a verified student!")
      }
    }
  }

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <form action='/'>
        <label htmlFor="studentName">Student Name:
          <div>
            <input onChange={(e) => { studentsEvent(e) }} id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" />
          </div>
        </label>
        <label htmlFor="joiningDate">Joining Date:
          <div>
            <input onChange={(e) => { joiningDateEvent(e) }} id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" />
          </div>
        </label>
        <button onClick={() => { buttonEvent() }} type="reset" data-testid="addBtn" className="small mb-0">Add</button>
      </form>
    </div>
  );
}

export default Search
