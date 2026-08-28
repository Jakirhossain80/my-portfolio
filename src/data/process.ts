type ProcessStep = {
  id: string;
  title: string;
  summary: string;
  details: readonly string[];
};

export const processSteps = [
  {
    id: "understand-requirements",
    title: "Understand requirements",
    summary:
      "Clarify the problem, audience, priorities, constraints, and expected outcome before proposing a solution.",
    details: [
      "Discuss goals, users, essential features, content, and available references.",
      "Record open questions and confirm what success should look like for the project.",
    ],
  },
  {
    id: "define-scope-architecture",
    title: "Define scope and architecture",
    summary:
      "Turn the requirements into an agreed delivery boundary and a practical technical direction.",
    details: [
      "Separate essential deliverables from optional or future work.",
      "Choose an appropriate structure, data flow, and technology approach for the confirmed needs.",
    ],
  },
  {
    id: "design-responsive-interfaces",
    title: "Design responsive interfaces",
    summary:
      "Plan clear user journeys and interface patterns that work across screen sizes and input methods.",
    details: [
      "Establish content hierarchy, reusable patterns, and responsive behavior.",
      "Consider semantics, keyboard access, focus visibility, contrast, and readable content early.",
    ],
  },
  {
    id: "develop-functionality",
    title: "Develop frontend and backend functionality",
    summary:
      "Build the agreed features in manageable parts while keeping responsibilities and code organization clear.",
    details: [
      "Implement the interface, application logic, APIs, and data integration required by the scope.",
      "Review progress against the agreed requirements as the project develops.",
    ],
  },
  {
    id: "test-fix-issues",
    title: "Test and fix issues",
    summary:
      "Check the completed flows and resolve issues before treating the work as ready for delivery.",
    details: [
      "Review functionality, responsive layouts, accessibility basics, and relevant error states.",
      "Run available code-quality, type, and production-build checks and address confirmed problems.",
    ],
  },
  {
    id: "deploy-support-delivery",
    title: "Deploy and support delivery",
    summary:
      "Prepare the approved release, communicate what was delivered, and support a clear handover.",
    details: [
      "Confirm deployment configuration, essential documentation, and known limitations.",
      "Address handover questions and post-delivery fixes only within the support terms agreed for the project scope.",
    ],
  },
] as const satisfies readonly ProcessStep[];
