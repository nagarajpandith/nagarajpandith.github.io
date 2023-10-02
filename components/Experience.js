import { experience } from '@/data/config';

export default function Experience() {
  return (
    <>
      {/* Will be optimised and be sent as props */}

      <div id="experience" className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative md:w-max text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent">
          Experience
        </h2>
      </div>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="-mt-6 mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Nov 2022 - Jan 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Forent Co., Ltd.
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Software Engineering Intern
          </p>
          <ul className="list-disc list-inside">
            <li>
              Worked on migrating ExCamp project from HTML/Bootstrap to Next.js
              with Typescript & Sass.
            </li>
            <li>
              Involved in designing, building & optimizing pages, with
              performance and user experience in mind.
            </li>
            <li>
              Followed Agile software development using Jira for project
              management and Git for version control.
            </li>
          </ul>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Nov 2021 - May 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Inspirante Technologies Pvt. Ltd.
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Frontend Web Developer
          </p>
          <ul className="list-disc list-inside">
            <li>
              Revamped the Finite Loop Club website using Next.js, Prisma, tRPC,
              TypeScript, & MySQL.
            </li>
            <li>
              Developed a feature-rich community platform with customizable user
              profiles, digital certificates, and admin panel.
            </li>
            <li>
              Contributed to the development of Edu-tech web portal [LMS] as
              part of a collaborative team.
            </li>
          </ul>
        </li>
      </ol>

      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative md:w-max text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent">
          Education
        </h2>
      </div>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="-mt-6 mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Bachelor of Engineering @ N.M.A.M.I.T.
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            CGPA: 8.95/10.00
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2017 - 2019
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Pre-University Education @ Poorna Prajna PUC
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Aggregate percentage: 94% with A+ grade
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2014 - 2017
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            High School Education @ I.E.M.H.S.
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Aggregate percentage: 98.56%
          </p>
        </li>
      </ol>
    </>
  );
}
