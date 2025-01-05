import Aos from "aos";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      id="education"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-11/12 mx-auto flex flex-col items-center py-28"
    >
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center mb-12">
        <span className="text-3xl md:text-5xl lg:text-6xl">
          Educational <span className="text-primary">Qualifications</span>
        </span>
      </h1>

      {/* Education Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative border-l-4  border-orange-600 pl-4">
            <h3 className="text-xl font-bold">Education</h3>
            <div className="absolute -left-2 bottom-2 w-3 h-3 rounded-full bg-primary"></div>
          </div>
        </div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-3 w-full">
          <div className=" p-6 text-center border-r border-r-gray-100">
            <h4 className="font-bold text-lg">B.S.C in Physics</h4>
            <p className="text-sm text-gray-500">
              Mohammadpur Kendriya College(2019 - running)
            </p>
            <p className="text-sm mt-2 text-gray-600">
              Focused on quantum mechanics, thermodynamics, and astrophysics
              with hands-on lab experiments and research projects.
            </p>
          </div>
          <div className="p-6 text-center border-r border-r-gray-100">
            <h4 className="font-bold text-lg">H.S.C</h4>
            <p className="text-sm text-gray-500">
              Mymensingh City College (2017 - 2019)
            </p>
            <p className="text-sm mt-2 text-gray-600">
              Achieved a strong foundation in Physics, Chemistry, and
              Mathematics, with excellent results in the Higher Secondary
              Certificate (HSC) examination.
            </p>
          </div>
          <div className=" p-6 text-center">
            <h4 className="font-bold text-lg">Secondary School Education</h4>
            <p className="text-sm text-gray-500">
              Jamalpur Zilla School (2012 - 2017)
            </p>
            <p className="text-sm mt-2 text-gray-600">
              Completed secondary education with a focus on science and
              mathematics, building a strong academic foundation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
