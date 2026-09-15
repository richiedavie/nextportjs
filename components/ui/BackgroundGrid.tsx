"use client";

import ShapeGrid from "@/components/ui/ShapeGrid";

/**
 * Full-page fixed background using the ShapeGrid component.
 * Replaces both the old dot-grid CSS pattern and the MagicRings hero background.
 * Tuned to match the dark monochrome portfolio aesthetic — very subtle border color,
 * slow diagonal drift, and a soft hover trail.
 */
export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-auto">
      <ShapeGrid
        speed={0.3}
        squareSize={40}
        direction="diagonal"
        borderColor="rgba(255, 255, 255, 0.06)"
        hoverFillColor="rgba(255, 255, 255, 0.04)"
        shape="square"
        hoverTrailAmount={5}
      />
    </div>
  );
}
