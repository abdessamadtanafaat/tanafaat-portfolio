import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.2) {
  const { ref, inView,entry } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
    // console.log(`${sectionName} section in view:`, inView);
    // console.log(`${sectionName} section entry:`, entry);
  }, [inView, setActiveSection, timeOfLastClick, sectionName, ref, entry]);

  return {
    ref,
  };
}
