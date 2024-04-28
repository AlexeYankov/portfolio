import s from './animation.module.css';
import CloseIcon from '../../../public/icons/icon_close.svg';

export const Dialog = ({
  modal,
  modalHandler,
}: {
  modal: boolean;
  modalHandler: () => void;
}) => {
  return (
    <div className={modal ? s.tilt : ''}>
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={
          modal
            ? 'flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
            : 'hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
        }
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white shadow-xl rounded-lg shadow dark:bg-gray-700">
          {/* <div className="relative backdrop-blur-sm bg-white/50 shadow-xl rounded-lg shadow dark:bg-gray-700"> */}
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5  rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Оставить заявку
              </h3>
              <button
                onClick={modalHandler}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <CloseIcon />
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="px-4 space-y-4">
              <input
                type="text"
                name="name"
                className="flex backdrop-blur-sm bg-white/10 w-full border-2 rounded-md h-10 p-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Имя"
              />
              <input
                type="tel"
                name="phone"
                className="flex w-full border-2 backdrop-blur-sm bg-white/10 rounded-md h-10 p-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="телефон"
              />
              <textarea
                name=""
                id=""
                placeholder="комментарий"
                className="flex backdrop-blur-sm bg-white/10 w-full h-[140px] border-2 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
                style={{ resize: 'none' }}
              ></textarea>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center md:p-5 p-4 border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={modalHandler}
                className="text-white transition ease-in-out delay-100 bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Отправить
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={modalHandler}
                className="py-2.5 px-5 ms-3 transition ease-in-out delay-100 text-sm font-medium text-white focus:outline-none bg-red-600 rounded-lg border border-gray-200 hover:bg-red-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Отменить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
