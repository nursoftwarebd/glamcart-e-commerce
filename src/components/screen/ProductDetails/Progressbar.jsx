"use client";
import { Line } from "rc-progress";
const Progressbar = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <p className="progress_text">5 Stars</p>
        <Line
          className="w-[200px]"
          trailWidth={3}
          trailColor="#DBDEDF"
          percent={90}
          strokeWidth={3}
          strokeColor="#FFB340"
        />
        <p className="progress_text">90%</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="progress_text">4 Stars</p>
        <Line
          className="w-[200px]"
          trailWidth={3}
          trailColor="#DBDEDF"
          percent={75}
          strokeWidth={3}
          strokeColor="#FFB340"
        />
        <p className="progress_text">75%</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="progress_text">3 Stars</p>
        <Line
          className="w-[200px]"
          trailWidth={3}
          trailColor="#DBDEDF"
          percent={70}
          strokeWidth={3}
          strokeColor="#FFB340"
        />
        <p className="progress_text">70%</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="progress_text">2 Stars</p>
        <Line
          className="w-[200px]"
          trailWidth={3}
          trailColor="#DBDEDF"
          percent={60}
          strokeWidth={3}
          strokeColor="#FFB340"
        />
        <p className="progress_text">60%</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="progress_text">2 Stars</p>
        <Line
          className="w-[200px]"
          trailWidth={3}
          trailColor="#DBDEDF"
          percent={30}
          strokeWidth={3}
          strokeColor="#FFB340"
        />
        <p className="progress_text">30%</p>
      </div>
    </div>
  );
};

export default Progressbar;
