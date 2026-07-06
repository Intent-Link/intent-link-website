import { notFound } from "next/navigation";

/** Unmatched paths under a valid locale render the branded [locale] 404. */
const CatchAll = () => {
  notFound();
};

export default CatchAll;
