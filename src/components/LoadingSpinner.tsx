import LoadingSpinnerStyles from "./LoadingSpinner.module.scss";

/**
 * Simple loading spinner to be displayed for any loading state
 * @returns 
 */
const LoadingSpinner = () => {
  return <span className={LoadingSpinnerStyles.loader}></span>;
};

export default LoadingSpinner;
