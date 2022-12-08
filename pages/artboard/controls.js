import { useContext, useEffect } from "react";
import ArtBoardContext from "../../context/artboard/context";
import AuthContext from "../../context/auth/context";
import UiContext from "../../context/UI/context";
import { MyComposition } from "../../remotion/composition";
import Animations from "./animations/animations";
import BackgroundColor from "./backgroundColor/bgColor";
import Color from "./color/color";
import FontSize from "./fontsize/fontSize";
import Layout from "./layout/layout";
import Text from "./text/text";

const Controls = () => {
  let { showItem, show } = useContext(UiContext);
  let { singleArtboard } = useContext(ArtBoardContext);
  const { token } = useContext(AuthContext);

  const generateVideo = async () => {
    const reponse = await fetch("http://localhost:3000/api/generateVideo", {
      method: "POST",
      body: JSON.stringify({
        composition: singleArtboard.id,
        siteName: singleArtboard.siteName,
        token,
      }),
    });
    var body = await reponse.json();
    console.log(body);
  };

  return (
    <>
      <div className="space-y-4 py-8">
        <div className="border-b-2 border-slate-300 dark:border-slate-600 mb-8 pb-4">
          <h2 className="font-bold text-xl text-slate-500 dark:text-slate-300">
            Tools
          </h2>
        </div>

        <div>
          <div
            onClick={() => showItem("bgcolor")}
            className={`cursor-pointer px-6 border-2 text-sm font-medium dark:border-slate-600 flex justify-between dark:text-slate-300 text-center py-5 w-full rounded-lg ${
              show === "bgcolor"
                ? "bg-blue-600 border-0 text-white dark:text-white"
                : ""
            }`}
          >
            <p className="">Background Color</p>
            <p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  show === "bgcolor"
                    ? "rotate-90 transition duration-300"
                    : "transition duration-300"
                }
              >
                <path
                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.3"
                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                  fill="currentColor"
                ></path>
              </svg>
            </p>
          </div>
          {show === "bgcolor" && (
            <div
              data-aos="fade-in"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className=""
            >
              <BackgroundColor />
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => showItem("color")}
            className={`cursor-pointer px-6 border-2 text-sm font-medium dark:border-slate-600 flex justify-between dark:text-slate-300 text-center py-5 w-full rounded-lg ${
              show === "color"
                ? "bg-blue-600 border-0 text-white dark:text-white"
                : ""
            }`}
          >
            <p className="">Font Color</p>
            <p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  show === "color"
                    ? "rotate-90 transition duration-300"
                    : "transition duration-300"
                }
              >
                <path
                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.3"
                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                  fill="currentColor"
                ></path>
              </svg>
            </p>
          </div>
          {show === "color" && (
            <div
              data-aos="fade-in"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className=""
            >
              <Color />
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => showItem("text")}
            className={`cursor-pointer px-6 border-2 text-sm font-medium dark:border-slate-600 flex justify-between dark:text-slate-300 text-center py-5 w-full rounded-lg  ${
              show === "text"
                ? "bg-blue-600 border-0 text-white dark:text-white"
                : ""
            }`}
          >
            <p className="font-medium">Font Style</p>
            <p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  show === "text"
                    ? "rotate-90 transition duration-300"
                    : "transition duration-300"
                }
              >
                <path
                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.3"
                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                  fill="currentColor"
                ></path>
              </svg>
            </p>
          </div>
          {show === "text" && (
            <div
              data-aos="fade-in"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className=""
            >
              <Text />
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => showItem("fontsize")}
            className={`cursor-pointer px-6 border-2 text-sm font-medium dark:border-slate-600 flex justify-between dark:text-slate-300 text-center py-5 w-full rounded-lg  ${
              show === "fontsize"
                ? "bg-blue-600 border-0 text-white dark:text-white"
                : ""
            }`}
          >
            <p className="font-medium">Font Size</p>
            <p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  show === "fontsize"
                    ? "rotate-90 transition duration-300"
                    : "transition duration-300"
                }
              >
                <path
                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.3"
                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                  fill="currentColor"
                ></path>
              </svg>
            </p>
          </div>
          {show === "fontsize" && (
            <div
              data-aos="fade-in"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className=""
            >
              <FontSize />
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => showItem("layout")}
            className={`cursor-pointer px-6 border-2 text-sm font-medium dark:border-slate-600 flex justify-between dark:text-slate-300 text-center py-5 w-full rounded-lg  ${
              show === "layout"
                ? "bg-blue-600 border-0 text-white dark:text-white"
                : ""
            }`}
          >
            <p className="font-medium">Layout</p>
            <p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  show === "layout"
                    ? "rotate-90 transition duration-300"
                    : "transition duration-300"
                }
              >
                <path
                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.3"
                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                  fill="currentColor"
                ></path>
              </svg>
            </p>
          </div>
          {show === "layout" && (
            <div
              data-aos="fade-in"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className=""
            >
              <Layout />
            </div>
          )}
        </div>

        <div>
          <div
            onClick={() => showItem("animation")}
            className={`cursor-pointer px-6 border-2 text-sm font-medium dark:border-slate-600 flex justify-between dark:text-slate-300 text-center py-5 w-full rounded-lg  ${
              show === "animation"
                ? "bg-blue-600 border-0 text-white dark:text-white"
                : ""
            }`}
          >
            <p className="font-medium">Animations</p>
            <p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  show === "animation"
                    ? "rotate-90 transition duration-300"
                    : "transition duration-300"
                }
              >
                <path
                  d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.3"
                  d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                  fill="currentColor"
                ></path>
              </svg>
            </p>
          </div>
          {show === "animation" && (
            <div
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className=""
            >
              <Animations />
            </div>
          )}
        </div>

        <div className="">
          <button
            onClick={generateVideo}
            data-aos="fade-in"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            className="space-x-2 w-full border-2 dark:border-slate-800 text-lg dark:text-slate-300 text-center py-5 rounded-2xl bg-blue-500 text-white font-semibold"
          >
            <i className="lni lni-video text-2xl"></i>
            <span className="text-sm font-semibold">Generate Video</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Controls;
