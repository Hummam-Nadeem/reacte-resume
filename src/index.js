import React from "react";
import ReactDOM from "react-dom";
import CSS from "./index.css";
function Hi() {
  return (
    <div>
      <h1>
        {" "}
        <b>
          {" "}
          <ins> MY PROFILE </ins>{" "}
        </b>{" "}
      </h1>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>HUMMAM NADEEM</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            A-210 Square Shopper Plaza, Main Abul Hassan Isphaani Road,
            Gulshan-e-Iqbal, Karachi.
          </td>
        </tr>
        <tr>
          {" "}
          <td>Mobile Number</td>
          <td>
            {" "}
            <a href="tel:03152935605">03152935605</a>{" "}
          </td>
        </tr>
        <tr>
          <td>Email Address</td>
          <td>
            {" "}
            <a href="mailto:chhummam1234@gmail.com">chhummam1234@gmail.com</a>
          </td>
        </tr>
        <tr>
          <td>Date of Birth</td>
          <td>07-10-1996</td>
        </tr>
        <tr>
          <td>Nationality</td>
          <td>Pakistan</td>
        </tr>
        <tr>
          <td>Languages Known</td>
          <td>English and Urdu</td>
        </tr>
        <tr>
          <td>Marital Status</td>
          <td>Single</td>
        </tr>
      </table>
      <dl>
        {" "}
        <h2>
          {" "}
          <b>
            {" "}
            <ins>
              {" "}
              <dt> OBJECTIVE STATEMENT </dt>{" "}
            </ins>
          </b>
        </h2>{" "}
      </dl>
      <p>
        {" "}
        <b>
          {" "}
          <i>
            {" "}
            <dd>
              {" "}
              To start my career by joining a well-settled and highly
              professional organization and grab good career advancement through
              large efforts and innovative work techniques.{" "}
            </dd>
          </i>
        </b>
      </p>
      <h3>
        {" "}
        <strong>
          {" "}
          <ins> EDUCATION</ins>
        </strong>{" "}
      </h3>
      <p>
        <ul>
          <li>
            Passed higher secondary (HUMANITIES) from Govt. Degree College
            ALLAMA IQBAL GOVT.BOYS HIGHER SECONDARY SCHOOL in year 2018.
          </li>
          <li>Passed school from Yakeen Islamic Model School.</li>
          <li>ADMS Graphic designing pursuing in 3rd semestar</li>
        </ul>
      </p>
      <h4>
        <strong>
          <ins>COMPUTER SKILLS</ins>
        </strong>
      </h4>
      <ol>
        {" "}
        <li>MS word/Excel/Power point</li>
        <li>Windows XP and windows 7 </li>
        <li>Net Surfing</li>
        <li>Data Entry</li>
        <li>Content Research</li>{" "}
      </ol>
      <h4>
        <u>
          <b>
            <dt> PERSONAL ABILITIES</dt>
          </b>
        </u>
      </h4>
      <p>
        <ul>
          <li>Good team player, smart worker and quick learner</li>
        </ul>
      </p>
      <p>
        <ul>
          <li>
            Ambitious, hardworking, self-confident, energetic and well
            disciplined{" "}
          </li>
        </ul>
      </p>
      <p> <ul> <li> <strong> Able to meet deadlines and handle responsibilities</strong></li></ul>
      <ul> <li> Positive thinking, self-motivated and flexible</li></ul></p>
      <ul><li><p><i> Good communication skills </i></p></li></ul> 
      <ul><li><p>Good presentation skills, both group and individual</p></li></ul>
      <h5><b><strong><u>INTERESTS AND HOBBIES </u></strong></b></h5>
      <b><ul><li>Learning New Skills</li>
        <li>Playing video games</li>
        <li>Internet Surfing</li></ul></b>
        <h3> <u> <b>EXPERIENCE</b></u></h3>
        <ul><li> Freelancing logo animation
        </li>
        <li>vapebazaar as a Graphic designer </li></ul>
        <p><q>I hereby declare that the above information's are true to best of my knowledge</q></p>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));

