import React from "react";
import { Composition, getInputProps } from "remotion";
import { MyComposition } from "./composition";

export const RemotionRoot = () => {
  const { composition } = getInputProps();
  return (
    <>
      <Composition
        id={composition}
        component={MyComposition}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
