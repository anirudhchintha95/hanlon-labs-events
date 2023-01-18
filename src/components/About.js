import React from "react";

const About = () => {
  return (
    <div className="box-border border-2 border-p-4 shadow-xl p-4 rounded-lg bg-slate-50">
      <h1 className="text-2xl font-semibold w-full text-center text-p-1 my-1">About Hanlon Financial Systems Center</h1>
      <p>
        The state-of-the-art Hanlon Financial Systems Lab is the heart of the
        Financial Systems Center in Stevens. This lab came into being as a
        result of a generous gift by Stevens Trustee and Alumnus, Sean Hanlon.
        The Lab integrates the latest hardware and software technologies,
        accessing real-time data and historical data, supporting innovative
        research into the most common and urgent problems in contemporary
        finance.
      </p>
      <h2 className="text-lg font-semibold text-p-1 my-1">Highlights</h2>
      <ul className="list-disc pl-4">
        <li>Open 6 days per week</li>
        <li>
          Provide research and teaching support to more than 500 students every
          year
        </li>
        <li>
          Provide a high tech teaching environment to more than 40 courses every
          year
        </li>
        <li>
          Provide powerful research support in terms of infrastructure, data and
          training to faculty from Business School and School of System and
          Enterprise
        </li>
      </ul>
    </div>
  );
};

export default About;
