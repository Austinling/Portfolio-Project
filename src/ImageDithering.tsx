import { useEffect, useRef, useState } from "react";
import useImage from "use-image";

type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};

type Dot = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
};

function getNewColor(factor: number, rgbValue: number): number {
  return Math.round((factor * rgbValue) / 255) * (255 / factor);
}

function getImageIndex(img: ImageData, x: number, y: number): number {
  return (x + y * img.width) * 4;
}

function getColorAtIndex(imageData: ImageData, pixelIndex: number): Color {
  const pixels = imageData.data;

  return {
    r: pixels[pixelIndex],
    g: pixels[pixelIndex + 1],
    b: pixels[pixelIndex + 2],
    a: pixels[pixelIndex + 3],
  };
}

function setColorAtIndex(
  imageData: ImageData,
  pixelIndex: number,
  colorObject: Color,
): void {
  const pixels = imageData.data;

  pixels[pixelIndex] = colorObject.r;
  pixels[pixelIndex + 1] = colorObject.g;
  pixels[pixelIndex + 2] = colorObject.b;
  pixels[pixelIndex + 3] = colorObject.a;
}

function addError(
  imageData: ImageData,
  factor: number,
  pixelIndex: number,
  errR: number,
  errG: number,
  errB: number,
) {
  const pixels = imageData.data;

  const finalColor = {
    r: pixels[pixelIndex] + errR * factor,
    g: pixels[pixelIndex + 1] + errG * factor,
    b: pixels[pixelIndex + 2] + errB * factor,
    a: pixels[pixelIndex + 3],
  };

  setColorAtIndex(imageData, pixelIndex, finalColor);
}

function doAllErrors(
  imageData: ImageData,
  x: number,
  y: number,
  errR: number,
  errG: number,
  errB: number,
) {
  const addRealError = (newX: number, newY: number, scale: number) => {
    if (
      newX >= 0 &&
      newX < imageData.width &&
      newY >= 0 &&
      newY < imageData.height
    ) {
      addError(
        imageData,
        scale,
        getImageIndex(imageData, newX, newY),
        errR,
        errG,
        errB,
      );
    }
  };

  addRealError(x + 1, y, 7 / 16);
  addRealError(x - 1, y + 1, 3 / 16);
  addRealError(x, y + 1, 5 / 16);
  addRealError(x + 1, y + 1, 1 / 16);
}

function makeDithered(imageData: ImageData, factor: number) {
  for (let y = 0; y < imageData.height; y++) {
    for (let x = 0; x < imageData.width; x++) {
      const imageIndex = getImageIndex(imageData, x, y);

      const colorObject: Color = getColorAtIndex(imageData, imageIndex);

      const oldR = colorObject.r;
      const oldG = colorObject.g;
      const oldB = colorObject.b;
      const newR = getNewColor(factor, oldR);
      const newG = getNewColor(factor, oldG);
      const newB = getNewColor(factor, oldB);

      setColorAtIndex(imageData, imageIndex, {
        r: newR,
        g: newG,
        b: newB,
        a: colorObject.a,
      });

      const errR = oldR - newR;
      const errG = oldG - newG;
      const errB = oldB - newB;

      doAllErrors(imageData, x, y, errR, errG, errB);
    }
  }
}

export function ImageDithering({
  imageRef,
}: {
  imageRef: string;
}) {
  const baseUrl = import.meta.env.BASE_URL;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pagodaImage, status] = useImage(`${baseUrl}${imageRef}`, "anonymous");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsiveScale =
    windowWidth > 1200 ? 0.7 : windowWidth > 1000 ? 0.9 : 1;

  useEffect(() => {
    if (status == "loaded" && pagodaImage) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.width = pagodaImage.width;
        canvas.height = pagodaImage.height;

        ctx.drawImage(pagodaImage, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        makeDithered(imageData, 4);

        const points = [];
        const skipPoints = 3;

        const imageWidth = pagodaImage.width;
        const finalScale = (windowWidth * responsiveScale) / imageWidth;
        const xOffset =
          (windowWidth - pagodaImage.width * finalScale) / 2;

        for (let y = 0; y < imageData.height; y += skipPoints) {
          for (let x = 0; x < imageData.width; x += skipPoints) {
            const color = getColorAtIndex(
              imageData,
              getImageIndex(imageData, x, y),
            );

            if (
              color.r > 10 ||
              color.g > 10 ||
              (color.b > 10 && color.a > 128)
            ) {
              points.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                targetX: x * finalScale + xOffset,
                targetY: y * finalScale,
                color: `rgb(${color.r},${color.g},${color.b})`,
              });
            }
          }
        }

        dotsRef.current = points;
      }
    }
  }, [status, pagodaImage, windowWidth, responsiveScale]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dots = dotsRef.current;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        const dx = dot.targetX - dot.x;
        const dy = dot.targetY - dot.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
          dot.x = dot.x + dx * 0.05;
          dot.y = dot.y + dy * 0.05;
        }

        ctx.beginPath();
        ctx.fillStyle = dot.color;
        ctx.arc(dot.x, dot.y, 1, 0, 2 * Math.PI);
        ctx.fill();
      }

      requestAnimationFrame(render);
    };

    const animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [pagodaImage, windowWidth]);

  const imageHeight = pagodaImage?.height || 1000;

  const imageWidth = pagodaImage?.width || 1000;
  const finalScale = (windowWidth * responsiveScale) / imageWidth;
  const renderedImageHeight = imageHeight * finalScale;
  const isPhoneScreen = windowWidth < 900;
  const stageHeight = isPhoneScreen
    ? renderedImageHeight
    : Math.max(window.innerHeight, renderedImageHeight);

  return (
    <div className="overflow-hidden">
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          pointerEvents: "none",
        }}
      >
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={stageHeight}
          style={{ display: "block" }}
        />
      </div>
    </div>
  );
}
