"use client";

import { PuffLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <section className={loadingSpinnerClasses.section}>
      <div>
        <PuffLoader color="#01416A" loading />
      </div>
    </section>
  );
};

export default LoadingSpinner;

const loadingSpinnerClasses = {
  section: "flex justify-center content-center",
};
