import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" BSc in Mathematics"
            subTitle="Banasthali Vidyapith  (2020 - 2023)"
            result="8.1 CGPA"
            des="Completed BSc in Computer Science, Electronics, and Mathematics offers a comprehensive blend of theoretical knowledge
             and practical expertise."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Prabha Gyan Peeth sr Sec School(2019-2020)"
            result="70%"
            des="Covering classes 11 and 12, I had done with specialization PCM (Physics, Chemistry, and Mathematics)."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Prabha Gyan Peeth sr Sec School(2017-2018)"
            result="84%"
            des="In the Indian education system, secondary education, also known as high school education, comprises two phases: lower secondary, which includes classes 6 to 8, and upper secondary, which includes classes 9 to 12."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
       
      </div>
    </motion.div>
  );
}

export default Education