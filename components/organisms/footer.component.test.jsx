// Main
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// To tests
import ComponentToTest from "./footer";

// Execute
describe("[COMPONENT TEST][ORGANISMS]: footer.tsx", () => {
  describe("When component is rendered,", () => {
    it("link should be in document", () => {
      render(<ComponentToTest />);

      const heading = screen.getByTitle("Company logo");

      expect(heading).toBeInTheDocument();
    });
  });
});
