import React from "react";
import { Button } from "@/components/ui/Button";

export function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
      <Button href="#portfolio" variant="primary">
        See More!
      </Button>
      <Button href="#portfolio" variant="secondary">
        See Full Portfolio
      </Button>
    </div>
  );
}
