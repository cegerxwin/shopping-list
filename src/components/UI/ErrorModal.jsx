import PropTypes from "prop-types";
import Attention from "../../assets/attention.svg";

const ErrorModal = (props) => {
  if (!props.isShowError) {
    return;
  }

  return (
    <div className="error-modal">
      <div className="flex justify-center items-center h-screen">
        <div>
          <button className="px-4 py-2 bg-black text-yellow-500 rounded-md"></button>
          <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => props.setIsShowError(false)}></div>
            <div className="bg-yellow-500 rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
              <div className="bg-black text-yellow-500 px-4 py-2 text-center">
                <h2 className="text-4xl font-semibold">ATTENTION!</h2>
              </div>
              <div className="p-4 text-black flex text-left gap-7">
                <p className="py-3">
                  <img src={Attention} alt="Attention" height="100px" />
                </p>
                <p className="text-2xl font-semibold">{props.message}</p>
              </div>
              <div className="px-4 py-2 flex justify-end bg-black">
                <button
                  className="px-3 py-1 bg-yellow-500 text-black text- rounded-md w-full sm:w-auto"
                  onClick={() => props.setIsShowError(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;

ErrorModal.propTypes = {
  message: PropTypes.string,
  isShowError: PropTypes.bool,
  setIsShowError: PropTypes.func,
};
