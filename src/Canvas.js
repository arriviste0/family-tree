import React, { useEffect, useCallback, useLayoutEffect, useRef, useState } from "react";
import { OrganizationChart } from 'primereact/organizationchart';
import ReactDOM from 'react-dom'; // Import ReactDOM

// Rest of your code...


const ORIGIN = Object.freeze({ x: 0, y: 0 });

// Adjust to device to avoid blur
const { devicePixelRatio: ratio = 1 } = window;

function diffPoints(p1, p2) {
  return { x: p1.x - p2.x, y: p1.y - p2.y };
}

function addPoints(p1, p2) {
  return { x: p1.x + p2.x, y: p1.y + p2.y };
}

function scalePoint(p1, scale) {
  return { x: p1.x / scale, y: p1.y / scale };
}

const ZOOM_SENSITIVITY = 500;

export default function Canvas(props) {
  const canvasRef = useRef(null);
  const offScreenCanvasRef = useRef(null); // Ref for off-screen canvas
  const [context, setContext] = useState(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState(ORIGIN);
  const [mousePos, setMousePos] = useState(ORIGIN);
  const [viewportTopLeft, setViewportTopLeft] = useState(ORIGIN);
  const isResetRef = useRef(false);
  const lastMousePosRef = useRef(ORIGIN);
  const lastOffsetRef = useRef(ORIGIN);

  // Update last offset
  useEffect(() => {
    lastOffsetRef.current = offset;
  }, [offset]);

  // Reset function
  const reset = useCallback(
    (ctx) => {
      if (ctx && !isResetRef.current) {
        // Adjust for device pixel density
        ctx.canvas.width = props.canvasWidth * ratio;
        ctx.canvas.height = props.canvasHeight * ratio;
        ctx.scale(ratio, ratio);
        setScale(1);

        // Reset state and refs
        setContext(ctx);
        setOffset(ORIGIN);
        setMousePos(ORIGIN);
        setViewportTopLeft(ORIGIN);
        lastOffsetRef.current = ORIGIN;
        lastMousePosRef.current = ORIGIN;

        // Ensure multiple resets in a row don't clear canvas unnecessarily
        isResetRef.current = true;
      }
    },
    [props.canvasWidth, props.canvasHeight]
  );

  // Function for panning
  const mouseMove = useCallback(
    (event) => {
      if (context) {
        const lastMousePos = lastMousePosRef.current;
        const currentMousePos = { x: event.pageX, y: event.pageY }; // Use document coordinates to pan off the canvas
        lastMousePosRef.current = currentMousePos;

        const mouseDiff = diffPoints(currentMousePos, lastMousePos);
        setOffset((prevOffset) => addPoints(prevOffset, mouseDiff));
      }
    },
    [context]
  );

  const mouseUp = useCallback(() => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }, [mouseMove]);

  const startPan = useCallback(
    (event) => {
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
      lastMousePosRef.current = { x: event.pageX, y: event.pageY };
    },
    [mouseMove, mouseUp]
  );

  // Setup canvas and set context
  useLayoutEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext("2d");
      if (renderCtx) {
        reset(renderCtx);
      }
    }
  }, [reset, props.canvasHeight, props.canvasWidth]);

  // Function to render OrganizationChart onto off-screen canvas
  const renderOrganizationChart = useCallback((offScreenCtx) => {
    offScreenCtx.save();
    offScreenCtx.clearRect(0, 0, offScreenCtx.canvas.width, offScreenCtx.canvas.height);
    
    // Example data (replace with actual data source or props)
    const data = [
      {
        label: 'Argentina',
        expanded: true,
        children: [
          {
            label: 'Argentina',
            expanded: true,
            children: [
              {
                label: 'Argentina'
              },
              {
                label: 'Croatia'
              }
            ]
          },
          {
            label: 'France',
            expanded: true,
            children: [
              {
                label: 'France'
              },
              {
                label: 'Morocco'
              }
            ]
          }
        ]
      }
    ];
    
    // Ensure proper positioning and rendering of OrganizationChart
    offScreenCtx.translate(50, 50); // Adjust position as needed
    offScreenCtx.scale(ratio, ratio); // Adjust for device pixel ratio
    const chart = <OrganizationChart value={data} />;
    ReactDOM.render(chart, offScreenCanvasRef.current); // Render React component onto off-screen canvas
  
    offScreenCtx.restore();
  }, []);

  // Draw off-screen canvas onto main canvas when context changes
  useLayoutEffect(() => {
    if (context && offScreenCanvasRef.current) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.drawImage(offScreenCanvasRef.current, 0, 0);
    }
  }, [context, offScreenCanvasRef.current]);

  // Add event listener on canvas for mouse position
  useEffect(() => {
    const canvasElem = canvasRef.current;
    if (canvasElem === null) {
      return;
    }

    function handleUpdateMouse(event) {
      event.preventDefault();
      if (canvasRef.current) {
        const viewportMousePos = { x: event.clientX, y: event.clientY };
        const topLeftCanvasPos = {
          x: canvasRef.current.offsetLeft,
          y: canvasRef.current.offsetTop
        };
        setMousePos(diffPoints(viewportMousePos, topLeftCanvasPos));
      }
    }

    canvasElem.addEventListener("mousemove", handleUpdateMouse);
    canvasElem.addEventListener("wheel", handleUpdateMouse);
    return () => {
      canvasElem.removeEventListener("mousemove", handleUpdateMouse);
      canvasElem.removeEventListener("wheel", handleUpdateMouse);
    };
  }, []);

  // Add event listener on canvas for zoom
  useEffect(() => {
    const canvasElem = canvasRef.current;
    if (canvasElem === null) {
      return;
    }

    function handleWheel(event) {
      event.preventDefault();
      if (context) {
        const zoom = 1 - event.deltaY / ZOOM_SENSITIVITY;
        const viewportTopLeftDelta = {
          x: (mousePos.x / scale) * (1 - 1 / zoom),
          y: (mousePos.y / scale) * (1 - 1 / zoom)
        };
        const newViewportTopLeft = addPoints(
          viewportTopLeft,
          viewportTopLeftDelta
        );

        context.translate(viewportTopLeft.x, viewportTopLeft.y);
        context.scale(zoom, zoom);
        context.translate(-newViewportTopLeft.x, -newViewportTopLeft.y);

        setViewportTopLeft(newViewportTopLeft);
        setScale(scale * zoom);
        isResetRef.current = false;
      }
    }

    canvasElem.addEventListener("wheel", handleWheel);
    return () => canvasElem.removeEventListener("wheel", handleWheel);
  }, [context, mousePos.x, mousePos.y, viewportTopLeft, scale]);

  return (
    <div>
      <button onClick={() => context && reset(context)}>Reset</button>
      <pre>scale: {scale}</pre>
      <pre>offset: {JSON.stringify(offset)}</pre>
      <pre>viewportTopLeft: {JSON.stringify(viewportTopLeft)}</pre>
      <canvas
        onMouseDown={startPan}
        ref={canvasRef}
        width={props.canvasWidth * ratio}
        height={props.canvasHeight * ratio}
        style={{
          border: "2px solid #000",
          width: `${props.canvasWidth}px`,
          height: `${props.canvasHeight}px`
        }}
      ></canvas>
      {/* Off-screen canvas for rendering OrganizationChart */}
      <canvas
        ref={offScreenCanvasRef}
        style={{ display: 'none' }} // Hide off-screen canvas
        width={props.canvasWidth * ratio}
        height={props.canvasHeight * ratio}
      ></canvas>
    </div>
  );
}
