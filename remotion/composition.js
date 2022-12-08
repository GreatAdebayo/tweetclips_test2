import {
  spring,
  useCurrentFrame,
  useVideoConfig,
  getInputProps,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/TitanOne";

export const MyComposition = () => {
  const { fontFamily } = loadFont;
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const { singleArtboard } = getInputProps();
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
              src={singleArtboard.profileImageUrl}
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
              {singleArtboard.name}
            </h1>
            <p
              style={{
                fontSize: "32px",
                margin: "0",
                color: `${singleArtboard.props.fontColor}`,
              }}
            >
              @{singleArtboard.username}
            </p>
          </div>
        </div>

        {/* main text */}
        <div>
          <h1
            style={{
              fontFamily: `${singleArtboard.props.fontStyle}`,
              fontSize: `${singleArtboard.props.fontSize}px`,
              overflowWrap: "break-word",
            }}
          >
            {singleArtboard.text
              .split(" ")
              .map((t) => ` ${t} `)
              .map((t, i) => {
                return (
                  <span
                    key={t}
                    style={{
                      marginLeft: 6,
                      marginRight: 6,
                      transform: `scale(${spring({
                        fps: videoConfig.fps,
                        frame: frame - i * 5,
                        config: {
                          damping: 100,
                          stiffness: 200,
                          mass: 0.5,
                        },
                      })})`,
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
        <div style={{ color: `${singleArtboard.props.fontColor}` }}>
          <p
            style={{
              fontSize: "28px",
            }}
          >
            {singleArtboard.source}
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
                  {singleArtboard.retweetCount}
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
                  {singleArtboard.quoteCount}
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
                  {singleArtboard.likeCount}
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
