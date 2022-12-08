import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useContext } from "react";
import ArtBoardContext from "../context/artboard/context";
import style from "../styles/artboard.module.css";
import ArtboardState from "../context/artboard/state";
import { loadFont } from "@remotion/google-fonts/TitanOne";

export const ArtBoard = () => {
  // let { artboardProps, singleArtboard, artboardLoading } = React.useContext(ArtBoardContext);

  // const videoConfig = useVideoConfig();
  // const frame = useCurrentFrame();

  const { fontFamily } = loadFont; // "Titan One"

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "40px",
          height: "100%",
          backgroundColor: "white",
          fontFamily: fontFamily,
        }}
      >
        {/* top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div>
            <img
              src="https://res.cloudinary.com/dylrl8ydb/image/upload/v1669032385/pexels-mag-photography-11850842_bxfmxq.jpg"
              alt="img"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "100%",
              }}
            />
          </div>

          <div>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "44px",
                margin: "0",
              }}
            >
              {/* {singleArtboard.name} */}
              The_name
            </h1>
            <p
              // className="text-xs md:text-base xl:text-lg"
              style={{
                fontSize: "32px",
                margin: "0",
              }}
              // style={{ color: `${artboardProps.fontColor}` }}
            >
              @username
              {/* {singleArtboard.username} */}
            </p>
          </div>
        </div>

        {/* main text */}
        <div>
          <h1
            style={{
              width: "91.67%",
              overflowWrap: "break-word",
              fontWeight: "600",
              fontSize: "50px",
            }}
            // style={{ fontFamily: ` ${artboardProps.fontStyle}`, fontSize: `${artboardProps.fontSize}px` }}
          >
            {"welecome to this application now"
              .split(" ")
              .map((t) => ` ${t} `)
              .map((t, i) => {
                return (
                  <span
                    key={t}
                    style={{
                      marginLeft: 6,
                      marginRight: 6,
                      // transform: `scale(${spring({
                      //     fps: videoConfig.fps,
                      //     frame: frame - i * 5,
                      //     config: {
                      //         damping: 100,
                      //         stiffness: 200,
                      //         mass: 0.5,
                      //     },
                      // })})`,
                      display: "inline-block",
                    }}
                  >
                    {t}
                  </span>
                );
              })}
          </h1>
        </div>

        {/* bottom */}
        <div
          className="space-y-3"
          // style={{ color: `${artboardProps.fontColor}` }}
        >
          <p
            style={{
              fontSize: "28px",
            }}
          >
            11:40 AM · Nov 16, 2022 · Iphone tweet
            {/* {singleArtboard.source} */}
          </p>
          <div
            className="border-y p-2.5 md:p-4"
            style={{
              borderTop: "1.5px solid black",
              borderBottom: "1.5px solid black",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {/* {singleArtboard.retweetCount} */} 234
                </p>
                <p>Retweets</p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {/* {singleArtboard.quoteCount}  */}
                  400
                </p>
                <p>Quote Tweets</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {/* {singleArtboard.likeCount} */}
                  453
                </p>
                <p>Likes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
