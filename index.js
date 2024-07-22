// index.js
const cssshort = `
  /* Flex classes */
  .fcc { display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; align-items: center; }
  .fcb { display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: space-between; align-items: center; }
  .fcr { display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; align-items: flex-end; }
  .frc { display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: center; align-items: center; }
  .frb { display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: center; }
  .fre { display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: center; align-items: flex-end; }
  .fccr { display: flex; flex-direction: column; flex-wrap: wrap; justify-content: center; align-items: center; }
  .fcrb { display: flex; flex-direction: column; flex-wrap: wrap; justify-content: center; align-items: flex-end; }
  .fw { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; }
  .fwn { display: flex; flex-wrap: nowrap; justify-content: center; align-items: center; }
  .align-c { align-items: center; }
  .align-s { align-items: start; }
  .align-e { align-items: end; }
  .align-b { align-items: baseline; }
  .just-c { justify-content: center; }
  .just-s { justify-content: start; }
  .just-e { justify-content: end; }
  .just-b { justify-content: space-between; }
  .just-a { justify-content: space-around; }
  .carddark { background-color:black;color:white ;padding: 4rem 2rem; }
  .card { background-color:white;color:black ;padding: 4rem 2rem; }

  /* Faded effect classes */
  .fade-effect1 { display: block; border: none; color: white; height: 1px; background: black; background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from(#000), to(#fff)); background: -webkit-radial-gradient(circle, #000, #fff); background: -moz-radial-gradient(circle, #000, #fff); background: -o-radial-gradient(circle, #000, #fff); background: radial-gradient(circle, #000, #fff); }
  .fade-effect2 { display: block; border: none; color: white; height: 1px; background: black; background: -webkit-gradient(linear, left top, right top, from(#000), to(#fff)); background: -webkit-linear-gradient(left, #000, #fff); background: -moz-linear-gradient(left, #000, #fff); background: -o-linear-gradient(left, #000, #fff); background: linear-gradient(to right, #000, #fff); }
  .fade-effect3 { display: block; border: none; color: white; height: 1px; background: black; background: -webkit-gradient(linear, left top, left bottom, from(#000), to(#fff)); background: -webkit-linear-gradient(top, #000, #fff); background: -moz-linear-gradient(top, #000, #fff); background: -o-linear-gradient(top, #000, #fff); background: linear-gradient(to bottom, #000, #fff); }
  .fade-effect4 { display: block; border: none; color: white; height: 1px; background: black; background: -webkit-radial-gradient(circle, #111, #000 70%); background: -moz-radial-gradient(circle, #111, #000 70%); background: -o-radial-gradient(circle, #111, #000 70%); background: radial-gradient(circle, #111, #000 70%); }
  .fade-effect5 { display: block; border: none; color: white; height: 1px; background: rgba(0, 0, 0, 0.5); background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); background: -moz-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); background: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); }
  .fade-effect6 { display: block; border: none; color: white; height: 1px; background: rgba(0, 0, 0, 0.2); background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)); background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)); background: -o-linear-gradient(top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)); background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)); }
`;

export default cssshort;
